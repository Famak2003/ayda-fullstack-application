import './faq.css'
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getFAQContent } from "../../../Redux/actions/faqAction"

const FAQ = () => {
    const data = useSelector(state => state.faq.data)
    const [isAccordionOpen, setIsAccordionOpen] = useState({id: "", state: false})
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getFAQContent())
    }, [])


    return (
        <section className=' max-w-[1200px] flex flex-col gap-6 py-[30px] sm:py-[70px] px-[15px] mobile:px-[30px] sm:px-[30px]' >
            {
                data ? 
                 <>
                    <h1 className=" text-light_pink text-[24.5px] text-center font-semibold " >
                        {data?.header}
                    </h1>
                    <div className=' flex flex-col gap-28 ' >
                        <ul className=' flex flex-col gap-4 ' >
                            {
                                data.body.map((obj, idx) => {
                                    return(
                                        <div className=' flex flex-col gap-2 cursor-pointer' >
                                            <div 
                                                className=' flex items-center gap-2 ' 
                                                onClick={() => {
                                                    setIsAccordionOpen( (prev) => {
                                                        return {
                                                            id: prev.id === obj.id ? "" : obj.id, 
                                                            state: isAccordionOpen?.state ? "" : true
                                                        }
                                                    }
                                                    )
                                                }}
                                            >
                                                <div className=' icon ' >
                                                    <i 
                                                        class="fa fa-arrow-down" 
                                                        aria-hidden="true" 
                                                        style={{
                                                                'fontSize': "20px",
                                                                'color': "#fff",
                                                                'rotate': ` ${isAccordionOpen.id === obj.id ? "180deg" : "0deg"}`,
                                                                'transition': "rotate 300ms ease"
                                                            }}
                                                    ></i>
                                                </div>
                                                <p className=' text-[16px] mobile:text-[18px] font-semibold ' >
                                                    {obj.header}
                                                </p>
                                            </div>
                                            <div className={` pl-5 rounded-md transition-height ease-in-out duration-300 py-2 space-y-2 overflow-y-scroll ${ isAccordionOpen.id === obj.id  ? " max-h-[500px]": " !max-h-0 !p-0 " } duration-300 `} >
                                                <div className=" text-left leading-[24px] text-[15px] mobile:text-[16px] text-light_grey " >
                                                    <div className=' w-full items-start ' id='content' dangerouslySetInnerHTML={{ __html: obj.content }} />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </ul>
                        {/* <ul className=' flex flex-col gap-8 ' >
                            {
                                data.body.map((obj, idx) => {
                                    return (
                                        <>
                                            <hr className=' w-full border-[1px] border-blue_head ' />

                                            <li id={`sss${obj.id}`} className='target flex flex-col gap-6 ' >
                                                <h3 className=" text-secondary_pink text-[17.5px] text-start font-semibold " >
                                                    {obj.header}
                                                </h3>
                                                <div className=" text-left leading-[24px] text-[15px] mobile:text-[16px] text-light_grey " >
                                                    <div className=' w-full items-start ' id='content' dangerouslySetInnerHTML={{ __html: obj.content }} />
                                                </div>

                                            </li>
                                        </>
                                    )
                                })
                            }
                            
                        </ul> */}
                    </div>            
                </>
                 :
                <div>Loading</div>
            }
           
        </section>
    )
}

export default FAQ