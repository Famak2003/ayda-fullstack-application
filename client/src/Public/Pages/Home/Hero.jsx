import './Hero.css'
import {Carousel} from 'flowbite-react'
import DOT from './../../../Asset/dots.png'

import LEFT from './../../../Asset/icons8-left-50.png'
import ArrowComp from './components/ArrowComp'
import { useSelector } from 'react-redux'


const Hero = () => {
    // Extracting hero data START
    const content = useSelector(state => state?.home.content)
    let rawData
    content?.filter((item) => {
        if (item.type === "hero"){
            return rawData = item
        }}
    )
    const hero = rawData ? JSON.parse(rawData?.content)[0] : ""
    // Extracting hero data STOP
    
    return (
        <div className=" flex justify-center items-center h-[100dvh] w-screen ">
            {
                hero ? 
                <div className=' h-full w-full relative '>
                    <div className=' absolute bottom-[30px] z-[500] text-white left-[35%] sm:left-[30px] text-[19px] font-semibold tracking-[2px]' >
                        Ayda IVF Center
                    </div>
                    <Carousel id='carousel' className=' relative !rounded-none !z-0 ' slide={false} leftControl={<ArrowComp img={LEFT} />} rightControl={<ArrowComp right={true} img={LEFT} />} >
                        {
                            hero.map((obj, idx) => (
                                <div key={idx} className="flex flex-col items-center justify-center h-full bg-no-repeat bg-cover bg-center"
                                    style={{
                                        backgroundImage: `url(${obj.image})`,
                                    }}
                                >
                                    <div 
                                        className='flex flex-col items-center justify-center w-full h-full bg-repeat'
                                        style={{
                                            backgroundImage: `url(${DOT})`
                                        }} 
                                        >
                                        <div className=' max-w-[750px] text-center ' >
                                            <h1 className="text-light_pink text-[20px] leading-[40px] font-bold">{obj.header}</h1>
                                            <h2 className="text-primary_pink text-[36px] mobile:text-[56px] sm:text-[66px] md:text-[70px] lg:text-[80px] leading-[78px] font-semibold">{obj.subHeader}</h2>
                                        </div>
                                        <div className=' hidden lg:block lg:absolute lg:right-[-100px] lg:rotate-90 ' >
                                            <p className=' text-white text-center font-semibold tracking-[5px] text-[12px] mobile:text-[16px] px-2 '>
                                                {`PTESİ - CUMA : ${obj.start} - ${obj.stop}`}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Carousel>
                </div> :
                <div>
                    Yükleniyor...
                </div>
            }
        </div>
    )
}

export default Hero;