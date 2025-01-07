import { useEffect } from "react"
import { getAcupunctureContent } from "../../../../Redux/actions/acupunctureAction"
import { useDispatch, useSelector } from "react-redux"

const Acupuncture = () => {
    const data = useSelector(state => state.acupuncture.data)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAcupunctureContent())
    }, [])
    console.log("Public Acupuncture ******", data)
    return (
        <section className="flex flex-col gap-4 justify-center items-center py-[15px] sm:py-[30px] px-[15px] mobile:px-[30px] sm:px-[65.5px]">
            <div className=" max-w-[1200px] " >

            <h1 className=" text-blue_head text-[19px] sm:text-[25px] font-semibold " >
                Acupuncture
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
            </div>
    </section>
    )
}

export default Acupuncture