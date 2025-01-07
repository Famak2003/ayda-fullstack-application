import './faq.css'
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getFAQContent } from "../../../Redux/actions/faqAction"
import ARROW from './../../../Asset/arrow-down-64.png'

const FAQ = () => {
    const data = useSelector(state => state.faq.data)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getFAQContent())
    }, [])
    console.log("Public FAQ Data ******", data)
    return (
        <section className='flex flex-col gap-6 py-[30px] sm:py-[70px] px-[15px] mobile:px-[30px] sm:px-[65.5px]' >
            {
                data ? 
                 <>
                    <h1 className=" text-light_pink text-[24.5px] text-center font-semibold " >
                        {data?.header}
                    </h1>
                    <div className=' flex flex-col gap-28 ' >
                        <ul className=' flex flex-col gap-7 ' >
                            {
                                data.body.map((obj, idx) => {
                                    return(
                                        <>
                                            <a className=' flex items-center gap-2 ' href={`#sss${obj.id}`} >
                                                <figure className=' flex justify-center items-center p-[7px] min-w-[40px] min-h-[40px] rounded-md bg-secondary_pink ' >
                                                    <img className='h-[30px] w-[30px] ' src={ARROW} alt="arrow down" />
                                                </figure>
                                                <p className=' text-[16px] mobile:text-[18px] font-semibold ' >
                                                    {obj.header}
                                                </p>
                                            </a>
                                        </>
                                    )
                                })
                            }
                        </ul>
                        <ul className=' flex flex-col gap-8 ' >
                            {
                                data.body.map((obj, idx) => {
                                    return (
                                        <>
                                            <hr className=' w-full border-[1px] border-blue_head ' />

                                            <li id={`sss${obj.id}`} className='target flex flex-col gap-6 ' >
                                                <h3 className=" text-secondary_pink text-[17.5px] text-start font-semibold " >
                                                    {obj.header}
                                                </h3>
                                                <div className=" text-left leading-[26px] text-[15px] mobile:text-[16px] text-light_grey " >
                                                    <div className=' w-full items-start ' id='content' dangerouslySetInnerHTML={{ __html: obj.content }} />
                                                </div>

                                            </li>
                                        </>
                                    )
                                })
                            }
                            
                        </ul>
                    </div>            
                </>
                 :
                <div>Loading</div>
            }
           
        </section>
    )
}

export default FAQ