import { useSelector } from "react-redux"
import DoubleHeader from "../../components/DoubleHeader"
import WELCOMEIMAGE from './../../../Asset/home-welcome-sec-img.png'
const Greetings = () => {
    // Extracting greetings data START
    const content = useSelector(state => state?.home.content)
    let rawData
    content?.filter((item) => {
        if (item.type === "greetings"){
            return rawData = item
        }}
    )
    const greetings = rawData ? JSON.parse(rawData?.content) : ""
    // Extracting greetings data STOP

    return (
        <div className=" flex justify-center items-center w-full bg-light px-[15px] py-[30px]" >
            {
                greetings ? 
                    <div className="grid max-[1150px]:grid-cols-1 grid-cols-2 max-w-[1180px] bg-opacity-50 px-[15px] " >
                        <div className=" flex justify-center items-center " >
                            <figure className=" w-[404px] h-[558px] " >
                                <img className=" h-full w-full object-contain " src={WELCOMEIMAGE} alt=" welcome image" />
                            </figure>
                        </div>
                        <div className=" flex flex-col justify-center items-center ">
                            <DoubleHeader header1={greetings.header} header2={greetings.subHeader} />
                            <div className=" text-left max-w-[640px] leading-[26px] text-[16px] text-light_grey" >
                                <div className='overflow-scroll w-full items-start' dangerouslySetInnerHTML={{ __html: greetings.content }} />
                            </div>
                            <DoubleHeader header1={greetings.buttomHeader} header2={greetings.buttomSubHeader} align={"left"} flip={true} />
                        </div>
                    </div> :
                    <div>
                        Loading...
                    </div>
            }
        </div>
    )
}

export default Greetings