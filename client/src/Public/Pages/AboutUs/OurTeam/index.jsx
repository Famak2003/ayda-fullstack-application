import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getOurTeamContent } from "../../../../Redux/actions/ourTeamAction"

const OurTeam = () => {
    const data = useSelector(state => state.ourTeam.data)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getOurTeamContent())
    }, [])
    return (
        <section className=" max-w-[1200px] flex flex-col lmd:flex-row justify-center items-center lmd:items-start py-[15px] sm:py-[30px] px-[15px] sm:px-[30px] tab:px-[30px]" >
            {
                 data ? 
                    <div className=" flex w-full justify-center items-start" >
                        {
                            data.map((obj, idx) => {
                                return (
                                    <div key={idx} className=" flex flex-col gap-4 justify-center items-center w-full lmd:w-[45%] tab:w-full p-[15px] xxl:p-[19px] " >
                                        <figure className=" h-fit w-fit max-h-[353px] max-w-[265px] " >
                                            <img className=" h-full w-full object-cover " src={obj.image} alt="article image" />
                                        </figure>
                                        <h3 className=" text-light_pink text-[17.5px] text-center font-semibold w-full lg:w-[408px] " >
                                            {obj.header}
                                        </h3>
                                        <div className=" text-center leading-[24px] text-[16px] text-light_grey w-full " >
                                            <div id="content" className=' w-full items-start ' dangerouslySetInnerHTML={{ __html: obj.content }} />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
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

export default OurTeam