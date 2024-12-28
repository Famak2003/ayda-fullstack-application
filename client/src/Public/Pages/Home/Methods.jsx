import CHECK from './../../../Asset/icons8-check-48.png'
import DoubleHeader from '../../components/DoubleHeader'
import { useSelector } from 'react-redux'

const Methods = () => {
    // const methods = useSelector(state => state?.home?.content?.methods)
     // Extracting methods data START
     const content = useSelector(state => state?.home.content)
     let rawData
     content?.filter((item) => {
         if (item.type === "quickInfo"){
             return rawData = item
         }}
     )
     const methods = rawData ? JSON.parse(rawData?.content) : ""
     console.log(methods)
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
        <div className=" flex flex-col gap-4 px-[25px] py-[70px] justify-center items-center h-fit " >
            {
                methods ? 
                    <> 
                        <DoubleHeader header1={methods.header} header2={methods.subHeader} />
                        <p className=" text-center text-light_grey max-w-[1150px] leading-[28px] font-normal " >
                            <div className='overflow-scroll w-full items-start' dangerouslySetInnerHTML={{ __html: methods.content }} />

                            {/* {
                                methods.content
                            } */}
                            {/* Before you visit Ayda IVF Team, be sure to take a look at our treatment methods that we have prepared especially for you, carefully considering every detail, so that you can have more detailed information about your treatment. Here, you will have the opportunity to examine your suitable treatment more closely and get detailed information.
                            <br/>
                            <br/>
                            After reviewing our treatments, please remember that we are just a phone call away for any questions you may have. We look forward to meeting you and providing you with professional assistance so that you can have a healthy baby. */}
                        </p>
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
                        <button className=' w-[161px] h-[56px] mt-[1.5rem] rounded-[32px] bg-light_pink ring-1 ring-secondary_pink flex justify-center items-center text-white font-semibold  ' >
                            Contact Us
                        </button>
                    </> :
                    <div>
                        Loading
                    </div>
            }

        </div>
    )
}

export default Methods