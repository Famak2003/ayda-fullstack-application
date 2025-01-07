import './whyus.css'

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getWhyusContent } from "../../../../Redux/actions/whyusAction"

const Whyus = () => {
    const data = useSelector(state => state.whyus.data)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getWhyusContent())
    }, [])
    console.log("Public Whyus ******", data)
    return (
        <section className=" flex flex-col gap-6 py-[30px] sm:py-[70px] px-[15px] mobile:px-[30px] sm:px-[65.5px] ">
            {
                data ? 
                <>
                    <h1 className=" text-[16px] sm:text-[17.5px] font-semibold text-center " >
                        {data.header}
                    </h1>
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
                </>
                :
                <>
                    Loading...
                </>
            }
        </section>
    )
}

export default Whyus