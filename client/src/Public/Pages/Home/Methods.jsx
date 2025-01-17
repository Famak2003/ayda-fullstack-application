import CHECK from './../../../Asset/icons8-check-48.png'
import DoubleHeader from '../../components/DoubleHeader'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Skeleton } from 'antd'

const Methods = () => {
     // Extracting methods data START
     const content = useSelector(state => state?.home.content)
     let rawData
     content?.filter((item) => {
         if (item.type === "quickInfo"){
             return rawData = item
         }}
     )
     const methods = rawData ? JSON.parse(rawData?.content) : ""
     // Extracting methods data STOP

    const listData = [
        "In vitro fertilization (IVF)-ICSI",
        "Egg Donation",
        "Sperm Donation",
        "Embryo Donation",
        "Ovarian & Endometrial PRP",
        "Embryo Genetic Screening (NGS, Single Gene)",
        "Sex Selection (PGD)",
        "Egg Freezing",
        "Surrogacy",
        "Embryo Genetic Screening (PGD)",
    ]

    return (
        <div id='method' style={{
                backgroundImage: `url("https://aydaivf.com/templates/aydaivf/imgs/logoonly.svg")`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                
            }} className={` bg-opacity-0.5 px-[25px] py-[70px] flex justify-center items-center h-fit `}
        >
            <div className=' bg-opacity-50 bg-white flex flex-col gap-4 justify-center items-center h-fit' >
                {
                    methods ? 
                        <> 
                            <DoubleHeader header1={methods.header} header2={methods.subHeader} />
                            <div className=" text-center text-light_grey max-w-[1150px] leading-[28px] font-normal " >
                                <div id='content' className='overflow-scroll w-full items-start' dangerouslySetInnerHTML={{ __html: methods.content }} />
                            </div>
                            <ul className=" grid max-[550px]:grid-cols-1 grid-cols-2 gap-2 gap-y-4 " >
                                {
                                    methods.linksArr.map((obj, idx) => {
                                        return <li className=' flex gap-2 justify-center items-center text-[15px] text-light_grey font-semibold max-w-[360px] ' key={idx} >
                                            <figure className=' h-[15px] w-[15px] ' > <img className=' h-full w-full object-cover ' src={CHECK} alt="check-img"/> </figure>
                                            <a href={obj.link} className=' font-bold leading- text-[15px] hover:text-secondary_pink duration-300 text-secondary_light_grey' >
                                                {obj.linkName}
                                            </a>
                                        </li>
                                    })
                                }
                            </ul>
                            <Link to={'iletisim'} className=' cursor-pointer w-[161px] h-[56px] mt-[1.5rem] rounded-[32px] bg-light_pink ring-1 ring-secondary_pink flex justify-center items-center text-white font-semibold  ' >
                                Contact Us
                            </Link>
                        </> :
                        <div className=' w-full h-[500px] '>
                            <Skeleton.Input active />
                        </div>
                }
            </div>

        </div>
    )
}

export default Methods