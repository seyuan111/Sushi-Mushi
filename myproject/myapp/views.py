from rest_framework.views import APIView
from rest_framework import viewsets
from .serializers import CustomUserSerializer
from rest_framework import status
from rest_framework.response import Response
from django.contrib.auth.hashers import check_password, make_password
from .models import CustomUser
from decouple import config
import jwt
import datetime
import logging

SECRET_KEY = config("JWT_SECRET_KEY")

class Authenticate(APIView):

    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")

        try:
            user = CustomUser.objects.get(username=username)
        except CustomUser.DoesNotExist:
            return Response({"error": "Invalid username or password"}, status=status.HTTP_401_UNAUTHORIZED)

        if check_password(password, user.password):
            payload = {
                "user_id": user.id,
                "exp": datetime.datetime.utcnow() + datetime.timedelta(days=1),
                "iat": datetime.datetime.utcnow(),
            }
            token = jwt.encode(payload, SECRET_KEY, algorithm="HS256")
            return Response({"token": token}, status=status.HTTP_200_OK)
        else:
            return Response({"error": "Invalid username or password"}, status=status.HTTP_401_UNAUTHORIZED)


class Signup(APIView):

    def post(self, request):
        data = request.data
        username = data.get("username")
        password = data.get("password")
        email = data.get("email")

        if not username or not password or not email:
            return Response({"error": "Missing username, password, or email"}, status=status.HTTP_400_BAD_REQUEST)

        if CustomUser.objects.filter(username=username).exists():
            return Response({"error": "Username already exists"}, status=status.HTTP_400_BAD_REQUEST)
        elif CustomUser.objects.filter(email=email).exists():
            return Response({"error": "Email already exists"}, status=status.HTTP_400_BAD_REQUEST)
        else:
            hashed_password = make_password(password)
            user = CustomUser.objects.create(username=username, password=hashed_password, email=email)
            user.save()
            return Response({"message": "User created successfully"}, status=status.HTTP_201_CREATED)


class CustomUserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
