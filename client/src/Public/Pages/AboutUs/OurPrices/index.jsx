import { useEffect } from "react"
import { getOurPricesContent } from "../../../../Redux/actions/ourPricesAction"
import { useDispatch, useSelector } from "react-redux"
import Table from "../../../components/Table"

const OurPrices = () => {
    const data = useSelector(state => state.ourPrices.data)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getOurPricesContent())
    }, [])
    console.log("Public Our Price ******", data)
    return (
        <section className=" max-w-[1200px] flex flex-col gap-6 justify-center items-center py-[15px] sm:py-[30px] px-[15px] mobile:px-[30px] sm:px-[30px] " >
            {
                data ? 
                    <>
                        <h1 className=" text-blue_head text-[19px] sm:text-[25px] font-semibold " >
                            {data.pageHeader}
                        </h1>
                        <div className=" text-left leading-[26px] text-[15px] mobile:text-[16px] text-light_grey " >
                            <div id="content" className=' w-full items-start ' dangerouslySetInnerHTML={{ __html: data.writeUp }} />
                        </div>
                        <h3 className=" text-light_pink text-[17.5px] text-center font-semibold " >
                            IVF Prices
                        </h3>
                        <Table headers={["Treatment Type", "Price"]} data={data?.ivfPrices} />
                        <h3 className=" text-light_pink text-[17.5px] text-center font-semibold sm:mt-[5px] " >
                            {data.buttomHeader}
                        </h3>
                        <div className=" text-left leading-[26px] text-[15px] mobile:text-[16px] text-light_grey " >
                            <div id="content" className=' w-full items-start ' dangerouslySetInnerHTML={{ __html: data.buttomContent }} />
                        </div>
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

export default OurPrices
