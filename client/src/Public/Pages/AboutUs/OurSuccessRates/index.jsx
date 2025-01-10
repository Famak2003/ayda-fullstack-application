import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getOurSuccessRateContent } from "../../../../Redux/actions/ourSuccessRateAction"
import SuccessRateTable from "../../../components/SuccessRateTable"

const OurSuccessRates = () => {
    const data = useSelector(state => state.ourSuccessRate.data)
    console.log(data)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getOurSuccessRateContent())
    }, [])
    return (
        <section className="flex flex-col gap-4 py-[15px] sm:py-[30px] px-[15px] mobile:px-[30px] sm:px-[65.5px]" >
            {
                data ? 
                    <>
                        <h1 className=" text-blue_head text-center text-[18px] sm:text-[25px] font-semibold " >
                            {data.pageHeader}
                        </h1>
                        <div className=" text-left leading-[26px] text-[15px] mobile:text-[16px] text-light_grey " >
                            <div id="content" className=' w-full items-start ' dangerouslySetInnerHTML={{ __html: data.writeUp }} />
                        </div>
                        <SuccessRateTable headers={["Age of lady", "IVF", "Sperm Donation", "Egg Donation", "Embryo Donation"]} data={data?.ivfDetails} />
                        <h3 className=" text-light_pink text-[17.5px] text-center font-semibold " >
                            {data.buttomHeader}
                        </h3>
                        <div className=" text-left leading-[26px] text-[15px] mobile:text-[16px] text-light_grey " >
                            <div id="content" className=' w-full items-start ' dangerouslySetInnerHTML={{ __html: data.writeUp }} />
                        </div>
                        {
                            data.body.map((obj, idx) => {
                                return(
                                    <div>
                                        <h3 className=" text-light_pink text-[17.5px] text-center font-semibold " >
                                            {obj.header}
                                        </h3>
                                        <div className=" text-center mobile:text-left leading-[26px] text-[15px] mobile:text-[16px] text-light_grey " >
                                            <div id="content" className=' w-full items-start ' dangerouslySetInnerHTML={{ __html: obj.content }} />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </>
                    :
                <>
                <div>
                    Loading...
                </div>
                </>
            }
        </section>
    )
}

export default OurSuccessRates