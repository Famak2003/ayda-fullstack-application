import { useSelector } from "react-redux"
import DoubleHeader from "../../components/DoubleHeader"
import WELCOMEIMAGE from './../../../Asset/home-welcome-sec-img.png'
const Greetings = () => {
    const greetings = useSelector(state => state?.home?.content?.greetings)

    return (
        <div className=" flex justify-center items-center w-full bg-light px-[15px] py-[30px]" >
            {
                greetings ? 
                    <div className="grid max-[1150px]:grid-cols-1 grid-cols-2 max-w-[1180px] bg-opacity-50 px-[15px] " >
                        <div className=" flex justify-center items-center " >
                            <figure className=" w-4[04px] h-[558px] " >
                                <img className=" h-full w-full object-contain " src={WELCOMEIMAGE} alt=" welcome image" />
                            </figure>
                        </div>
                        <div className=" flex flex-col justify-center items-center ">
                            <DoubleHeader header1={greetings.header} header2={greetings.subHeader} />
                            <p className=" text-left max-w-[640px] leading-[26px] text-[16px] text-light_grey" >
                                {greetings.content}
                                {/* Our clinic, located in the center of Nicosia, the capital of Northern Cyprus, is part of Elite Hospital and has been working tirelessly for years to help you achieve pregnancy. We are here to help all individuals who apply to our clinic with the desire to have a child, to the extent that science allows, with many techniques and methods, and with our most modern, innovative and state-of-the-art infrastructure .
                                <br/>
                                <br/>
                                I first started my 8-year professional life in IVF in Wiesbaden, Germany. For me, continuing my profession within the framework of ethical rules has always been above all else since the day I first took IVF . I understood how sacred and meaningful my profession was from the first day I transferred my first patient and shared her joy of pregnancy.
                                <br/>
                                <br/>
                                It is a great responsibility for the person in front of you to trust you and choose you, and it requires dedication and work. You embark on a meaningful and important journey with the patient . You laugh and cry together. Your patient is stressed; you are the one who will provide the most beautiful and most accurate consolation. Your patient is anxious; you are the one who is by her side and understands her. Your patient has gone through all these processes and the pregnancy test day has come; you are the one who will share this great excitement with her. You will share her biggest and most important secret and hope . That is why it is very important to be sincere, truthful and honest with your patient .
                                <br/>
                                <br/>
                                At the end of the day, the beautiful results of mutual efforts, being able to give our patients eternal happiness by giving them children, the prayers and thanks they read to you every time they look at their children are priceless feelings. When a person shares all these feelings, they draw the right path for their patients to get pregnant and steps are taken to achieve success with mutual understanding and effort. Here lies the answer to the question my patients have been asking for years, 'How can you be so successful and positive?' We receive our energy from you and give it back to you.
                                <br/>
                                <br/>
                                I can't thank enough each and every individual who chooses us for believing and trusting us and walking together on this path . If you haven't met us yet and want to embark on the IVF journey, let's take this step together. Let's take you one step further to become a family. */}
                            </p>
                            <DoubleHeader header1={greetings.buttomHeader} header2={greetings.buttomSubHeader} align={"left"} flip={true} />
                        </div>
                    </div> :
                    <div>
                        Loading...
                    </div>
            }
        </div>
    )
}

export default Greetings