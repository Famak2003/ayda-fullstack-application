import { useDispatch, useSelector } from "react-redux"
import { getTripContent } from "../../../Redux/actions/tripAction"
import { useEffect } from "react"

const  Trip = () => {
    const data = useSelector(state => state.trip.data)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTripContent())
    }, [])
    return(
        <section className="max-w-[1200px] flex flex-col gap-4 justify-center items-center py-[15px] sm:py-[30px] px-[15px] mobile:px-[30px] sm:px-[30px]" >
            {
                data ? 
                    <>
                        <h1 className=" text-blue_head text-[19px] text-center sm:text-[25px] font-semibold " >
                            Seyahat
                        </h1>
                        <ul className=' flex flex-col gap-8 ' >
                            {
                                data.body.map((obj, idx) => {
                                    return (
                                        <li className='target flex flex-col gap-3 sm:gap-5 ' >
                                            <h3 className=" text-light_pink text-[17.5px] text-center font-semibold " >
                                                {obj.header}
                                            </h3>
                                            <div className=" text-left leading-[24px] text-[15px] mobile:text-[16px] text-light_grey " >
                                                <div className=' w-full items-start ' id='content' dangerouslySetInnerHTML={{ __html: obj.content }} />
                                            </div>

                                        </li>
                                    )
                                })
                            }
                            
                        </ul>
                    </>
                :
                    <div>Yükleniyor...</div>
            }
        </section>
    )
}

export default Trip