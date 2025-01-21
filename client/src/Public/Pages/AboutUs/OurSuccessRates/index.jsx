import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getOurSuccessRateContent } from "../../../../Redux/actions/ourSuccessRateAction"
import SuccessRateTable from "../../../components/SuccessRateTable"

const OurSuccessRates = () => {
    const data = useSelector(state => state.ourSuccessRate.data)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getOurSuccessRateContent())
    }, [])
    return (
        <section className=" max-w-[1200px] flex flex-col gap-4 py-[15px] sm:py-[30px] px-[15px] mobile:px-[30px] sm:px-[30px]" >
            {
                data ? 
                    <>
                        <h1 className=" text-blue_head text-center text-[18px] sm:text-[25px] font-semibold " >
                            {data.pageHeader}
                        </h1>
                        <div className=" text-left leading-[24px] text-[15px] mobile:text-[16px] text-light_grey " >
                            <div id="content" className=' w-full items-start ' dangerouslySetInnerHTML={{ __html: data.writeUp }} />
                        </div>
                        <SuccessRateTable headers={["Bayanın Yaşı", "Tüp Bebek", "Sperm Donasyonu", "Yumurta Donasyonu", "Embriyo Donasyonu"]} data={data?.ivfDetails} />
                        <h3 className=" text-light_pink text-[17.5px] text-center font-semibold " >
                            {data.buttomHeader}
                        </h3>
                        <div className=" text-left leading-[24px] text-[15px] mobile:text-[16px] text-light_grey " >
                            <div id="content" className=' w-full items-start ' dangerouslySetInnerHTML={{ __html: data.writeUp }} />
                        </div>
                        {
                            data.body.map((obj, idx) => {
                                return(
                                    <div>
                                        <h3 className=" text-light_pink text-[17.5px] text-center font-semibold " >
                                            {obj.header}
                                        </h3>
                                        <div className=" text-center mobile:text-left leading-[24px] text-[15px] mobile:text-[16px] text-light_grey " >
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
                    Yükleniyor...
                </div>
                </>
            }
        </section>
    )
}

export default OurSuccessRates