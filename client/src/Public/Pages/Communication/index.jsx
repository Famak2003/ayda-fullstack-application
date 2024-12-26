import DoubleHeader from "../../components/DoubleHeader"
import Location from "../Home/Location"

const Communication = () => {
    return (
        <>
            <div className=" flex flex-col justify-center items-center h-[830px] " >
                <div className="flex flex-col justify-center items-center max-w-[1200px] ">
                    <DoubleHeader header1={"BY FILLING OUT THE FORM BELOW"} header2={"You Can Contact Us"} />
                    <form className=" flex flex-col gap-[30px] text-light_grey justify-center items-center w-screen sm:w-[545px] px-4 sm:px-0 " >
                        <div className=" flex flex-col items-center w-full ">
                            <label className=" text-primary_black text-[14px] font-bold " htmlFor="name" children={"Name - Surname"} aria-required />
                            <input className=" bg-primary_light_grey border-0 ring-0 w-full px-[15px] h-[45px] mobile:h-[60px]  rounded-md " name="name" id="name" type="text" />
                        </div>
                        <div className=" flex flex-col items-center w-full ">
                            <label className=" text-primary_black text-[14px] font-bold " htmlFor="email" children={"E-mail"} aria-required />
                            <input className=" bg-primary_light_grey border-0 ring-0 w-full px-[15px] h-[45px] mobile:h-[60px]  rounded-md " name="email" id="email" type="email" />
                        </div>
                        <div className=" flex flex-col items-center w-full ">
                            <label className=" text-primary_black text-[14px] font-bold " htmlFor="subject" children={"Subject"} aria-required />
                            <input className=" bg-primary_light_grey border-0 ring-0 w-full px-[15px] h-[45px] mobile:h-[60px]  rounded-md " name="subject" id="subject" type="text" />
                        </div>
                        <div className=" flex flex-col items-center w-full ">
                            <label className=" text-primary_black text-[14px] font-bold " htmlFor="message" children={"Your message"} aria-required />
                            <textarea className="bg-primary_light_grey border-0 ring-0 w-full px-[15px] h-[45px] mobile:h-[60px]  rounded-md " name="message" id="message" />
                        </div>
                    </form>
                </div>
            </div>
            <Location/>
        </>
    )
}

export default Communication