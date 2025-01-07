import { useDispatch, useSelector } from "react-redux"
import { getEggFreezingContent } from "../../../../Redux/actions/eggFreezingAction"
import { useEffect } from "react"

const EggFreezing = () => {
    const data = useSelector(state => state.eggFreezing.data)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getEggFreezingContent())
    }, [])
    console.log("Public EggFreezing ******", data)
    return (
        <section className="flex flex-col gap-4 justify-center items-center py-[15px] sm:py-[30px] px-[15px] mobile:px-[30px] sm:px-[65.5px]">
            <h1 className=" text-blue_head text-[19px] sm:text-[25px] font-semibold " >
                Egg Freezing
            </h1>
            {
                data ?
                    <>
                        <div className=" flex flex-col gap-4 " >
                            {
                                data?.body.map((obj, idx) => {
                                    return(
                                        <div key={idx} className=" flex flex-col gap-3 " > 
                                            <h4 className="text-[17.5px] text-light_pink font-bold text-center " >
                                                {obj?.header}
                                            </h4>
                                            <div className=" text-left leading-[26px] text-[15px] mobile:text-[16px] text-light_grey" >
                                                <div className=' w-full items-start ' id='content' dangerouslySetInnerHTML={{ __html: obj.content }} />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className=" mobile:text-[16px] text-primary_black" >
                            <div className=' w-full text-[12.5px] ' id='content' dangerouslySetInnerHTML={{ __html: data.writeUp }} />
                        </div>
                    </>
                :
                    <div>
                        Loading...
                    </div>
            }
    </section>
    )
}

export default EggFreezing