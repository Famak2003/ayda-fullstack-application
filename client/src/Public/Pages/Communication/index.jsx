import { useDispatch } from "react-redux"
import DoubleHeader from "../../components/DoubleHeader"
import Location from "../Home/Location"
import { contactUsMail } from "../../../Redux/actions/contactUsAction"
import { useState } from "react"

const Communication = () => {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(contactUsMail(formData))
    }

    const handleChange = (e) => {
        setFormData((prev) => {
            return {...prev, [e.target.name]: e.target.value}
        })
    }


    return (
        <section className=" flex flex-col justify-center items-center h-fit w-full " >
            <div className=" flex flex-col justify-center items-center h-fit py-[70px] sm:py-[90px] lg:h-[830px] " >
                <div className="flex flex-col gap-[15px] sm:gap-[30px] justify-center items-center w-full sm:max-w-[1200px] px-[10px] sm:px-0 ">
                    <DoubleHeader header1={"Bizimle iletişime geçebilirsiniz"} header2={"Aşağıdaki formu doldurarak"} />
                    <form onSubmit={handleSubmit} className=" flex flex-col gap-[30px] text-light_grey justify-center items-center w-full sm:w-[545px] " >
                        <div className=" flex flex-col gap-[7px] items-center w-full ">
                            <label className=" text-primary_black text-[13px] md:text-[14px] font-bold " htmlFor="name" children={"Ad - Soyad"} aria-required />
                            <input required name={"name"} onChange={handleChange} className=" bg-primary_light_grey text-[13px] md:text-[14px] font-semibold border-0 ring-0 w-full px-[15px] h-[30px] md:h-[45px] mobile:h-[60px]  rounded-md " id="name" type="text" placeholder="Lütfen adınızı yazın..." />
                        </div>
                        <div className=" obj` flex flex-col gap-[7px] items-center w-full ">
                            <label className=" text-primary_black text-[13px] md:text-[14px] font-bold " htmlFor="email" children={"E-Posta"} aria-required />
                            <input required name={"email"} onChange={handleChange} className=" bg-primary_light_grey text-[13px] md:text-[14px] font-semibold border-0 ring-0 w-full px-[15px] h-[30px] md:h-[45px] mobile:h-[60px]  rounded-md " id="email" type="email" placeholder="Lütfen email adresinizi yazın..." />
                        </div>
                        <div className=" flex flex-col gap-[7px] items-center w-full ">
                            <label className=" text-primary_black text-[13px] md:text-[14px] font-bold " htmlFor="subject" children={"Konu"} aria-required />
                            <input required name={"subject"} onChange={handleChange} className=" bg-primary_light_grey text-[13px] md:text-[14px] font-semibold border-0 ring-0 w-full px-[15px] h-[30px] md:h-[45px] mobile:h-[60px]  rounded-md " id="subject" type="text" placeholder="Lütfen konu seçin..." />
                        </div>
                        <div className=" flex flex-col gap-[7px] items-center w-full ">
                            <label className=" text-primary_black text-[13px] md:text-[14px] font-bold " htmlFor="message" children={"Mesajınız"} aria-required />
                            <textarea required name={"message"} onChange={handleChange} className="bg-primary_light_grey text-[13px] md:text-[14px] font-semibold border-0 ring-0 w-full px-[15px] h-[80px] min-h-[70px] max-h-[150px] rounded-md " id="message" placeholder="Lütfen mesaajınızı yazın..." />
                        </div>

                        <button type="submit" className=' cursor-pointer w-[119px] h-[60px] ring-2 ring-secondary_pink mt-[1.5rem] rounded-[8px] bg-secondary_pink shadow-custom8 flex justify-center items-center text-white font-semibold  ' >
                            Göndermek
                        </button>
                        
                       
                    </form>
                </div>
            </div>
            <Location/>
        </section>
    )
}

export default Communication