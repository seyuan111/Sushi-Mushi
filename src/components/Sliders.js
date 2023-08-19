'use client'
import React, {useState} from 'react'
import {BsArrowLeftCircle, BsArrowRightCircle} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

const Sliders = () => {

    const [current, setCurrent] = useState(0)

    const slides = [
        {
            url: "https://media.istockphoto.com/id/1414888937/photo/salmon-sushi-by-wooden-chopsticks.webp?b=1&s=170667a&w=0&k=20&c=iISxfAEkuqalZzfqC_X9qGyU5jhPpmvECCsd_LNWkGY="
        },
        {
            url: "https://media.istockphoto.com/id/1383411781/photo/homemade-sushi-for-lunch.webp?b=1&s=170667a&w=0&k=20&c=7XET_VJVLQY-5lxbeN1WMIdcwoXW-0anDELlz92R6JI="
        },
        {
            url: "https://media.istockphoto.com/id/1385754615/photo/sushi-mix-plate.webp?b=1&s=170667a&w=0&k=20&c=K1-kJ1m8_l5QkjxIr4Kcv9B_azStKl28qbr9LZY74Kk="
        },
        {
            url: "https://media.istockphoto.com/id/1320922361/photo/woman-taking-tasty-sushi-roll-with-salmon-from-set-at-table-closeup.webp?b=1&s=170667a&w=0&k=20&c=0c_1yejNq9Y1_hgl3fu4ygspGhf_8yUelIgyctEapEA="
        },
        {
            url: "https://media.istockphoto.com/id/1217584540/photo/woman-eating-sushi-rolls.webp?b=1&s=170667a&w=0&k=20&c=u9v_BDwJCJHMlCOWfD3I05MNCHqeiKCbjg62cZT43m8="
        }
    ]

    const prevSlide = () => {
        const goBack = current === 0;
        const prevSlide = goBack ? slides.length -1 : current -1;
        setCurrent(prevSlide)
    }

    const nextSlide = () => {
        const forward = current === slides.length -1;
        const nextSlide = forward ? 0 : current + 1;
        setCurrent(nextSlide)
    }

    const dotSlides = (sushi) => {
        setCurrent(sushi)
    }

  return (
    <div className="bg-zinc-900/70">

        <div className="h-[900px] w-full m-auto py-16 px-4 relative group">
            <div style={{backgroundImage: `url(${slides[current].url})`}} className="w-full h-full bg-cover bg-center duration-300"></div>

            <div onClick={prevSlide} className="cursor-pointer absolute transition-x-0 transition-y-[50%] top-[50%] text-white left-10">
                <BsArrowLeftCircle size={30} />
            </div>

            <div onClick={nextSlide} className="cursor-pointer absolute transition-x-0 transition-y-[50%] top-[50%] text-white right-10">
                <BsArrowRightCircle size={30} />
            </div>

            <div className="flex justify-center text-white my-2">
                {slides.map((slide,index) => (
                    <div key={index} onClick={() => dotSlides(index)} className="text-2xl cursor-pointer">
                        <RxDotFilled />
                    </div>
                ))}
            </div>

        </div>

    </div>
  )
}

export default Sliders