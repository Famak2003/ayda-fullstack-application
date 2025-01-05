import './Hero.css'
import {Carousel} from 'flowbite-react'
import IMAGE1 from './../../../Asset/image5.jpg'
import IMAGE2 from './../../../Asset/image4.jpg'
import IMAGE3 from './../../../Asset/image1.jpg'

import LEFT from './../../../Asset/icons8-left-50.png'
import ArrowComp from './components/ArrowComp'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'


const carouselData = [
    {
        image: IMAGE1, 
        header: 'Come To Us To Have You', 
        subHeader: "Let's Give the Best Gift"
    },
    {
        image: IMAGE2, 
        header: 'Come To Us To Have You', 
        subHeader: "Let's Give the Best Gift"
    },
    {
        image: IMAGE3, 
        header: 'Come To Us To Have You', 
        subHeader: "Let's Give the Best Gift"
    },
]

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
        <div className=" flex justify-center items-center h-[905px] w-screen ">
            {
                hero ? 
                <div className=' h-full w-full relative '>
                    <div className=' absolute bottom-[30px] z-[500] text-white left-[30px] text-[19px] font-semibold tracking-[2px]' >
                        Ayda IVF Center
                    </div>
                    <Carousel id='carousel' className=' !rounded-none !z-0 ' slide={false} leftControl={<ArrowComp img={LEFT} />} rightControl={<ArrowComp right={true} img={LEFT} />} >
                        {
                            hero.map((obj, idx) => (
                                <div key={idx} className="flex flex-col items-center justify-center h-full bg-cover bg-center"
                                    style={{
                                        backgroundImage: `url(${obj.image})`,
                                    }}
                                >
                                    <div className=' max-w-[750px] text-center ' >
                                        <h1 className="text-light_pink text-[20px] leading-[40px] font-bold">{obj.header}</h1>
                                        <h2 className="text-primary_pink text-[80px] font-semibold">{obj.subHeader}</h2>
                                    </div>
                                    <div>
                                        <p className=' text-white text-center font-semibold tracking-[5px] text-[12px] mobile:text-[16px] px-2 '>
                                            {`MONDAY - FRIDAY : ${obj.start} - ${obj.stop}`}
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </Carousel>
                </div> :
                <div>
                    Loading...
                </div>
            }
        </div>
    )
}
{/* <div className=" flex w-fit h-full overflow-x-scroll " >
    {
        carouselData.map((obj, idx) => {
            return (
                <div className={` h-full w-screen `}
                    style={{ 
                        backgroundImage: `url(${obj.image})`,
                        backgroundPosition: 'center', // Centers the image
                        backgroundSize: 'cover', // Ensures the image covers the container
                        backgroundRepeat: 'no-repeat', // Prevents tiling
                        height: '100vh', // Full-screen height
                        width: '100vw', // Full-screen width
                    }}
                >
                    <h1>{obj.header}</h1>
                    <h2>{obj.subHeader}</h2>

                </div>
            )
        })
    }

</div> */}


//     --breakpoint-xs: 0;
//     --breakpoint-sm: 576px;
//     --breakpoint-md: 768px;
//     --breakpoint-lg: 992px;
//     --breakpoint-xl: 1200px;
//    

export default Hero;