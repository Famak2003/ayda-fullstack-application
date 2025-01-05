import DoubleHeader from "../../components/DoubleHeader"
import Location from "../Home/Location"

const Communication = () => {
    return (
        <>
            <section className=" flex flex-col justify-center items-center h-fit py-[70px] sm:py-[90px] lg:h-[830px] " >
                <div className="flex flex-col gap-[15px] sm:gap-[30px] justify-center items-center w-full sm:max-w-[1200px] px-[10px] sm:px-0 ">
                    <DoubleHeader header1={"BY FILLING OUT THE FORM BELOW"} header2={"You Can Contact Us"} />
                    <form className=" flex flex-col gap-[30px] text-light_grey justify-center items-center w-full sm:w-[545px] " >
                        <div className=" flex flex-col gap-[7px] items-center w-full ">
                            <label className=" text-primary_black text-[14px] font-bold " htmlFor="name" children={"Name - Surname"} aria-required />
                            <input className=" bg-primary_light_grey font-semibold border-0 ring-0 w-full px-[15px] h-[45px] mobile:h-[60px]  rounded-md " name="name" id="name" type="text" placeholder="Please write your name..." />
                        </div>
                        <div className=" flex flex-col gap-[7px] items-center w-full ">
                            <label className=" text-primary_black text-[14px] font-bold " htmlFor="email" children={"E-mail"} aria-required />
                            <input className=" bg-primary_light_grey font-semibold border-0 ring-0 w-full px-[15px] h-[45px] mobile:h-[60px]  rounded-md " name="email" id="email" type="email" placeholder="Please enter your email address..." />
                        </div>
                        <div className=" flex flex-col gap-[7px] items-center w-full ">
                            <label className=" text-primary_black text-[14px] font-bold " htmlFor="subject" children={"Subject"} aria-required />
                            <input className=" bg-primary_light_grey font-semibold border-0 ring-0 w-full px-[15px] h-[45px] mobile:h-[60px]  rounded-md " name="subject" id="subject" type="text" placeholder="Please choose a topic..." />
                        </div>
                        <div className=" flex flex-col gap-[7px] items-center w-full ">
                            <label className=" text-primary_black text-[14px] font-bold " htmlFor="message" children={"Your message"} aria-required />
                            <textarea className="bg-primary_light_grey font-semibold border-0 ring-0 w-full px-[15px] h-[45px] mobile:h-[60px]  rounded-md " name="message" id="message" placeholder="Please write your message..." />
                        </div>
                    </form>
                </div>
            </section>
            <Location/>
        </>
    )
}

export default Communication