import { useDispatch, useSelector } from "react-redux"
import { resetPassword, verifyEmail, verifyToken } from "../../Redux/actions/authAction"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const ResetPassword = () => {
    const isEmailVerified = useSelector(state => state.auth.isEmailVerified)
    const isOTPVerified = useSelector(state => state.auth.isOTPVerified)
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({})
    const [ step, setStep ] = useState(1)

    const handleSubmit = (e, field) => {
        e.preventDefault()
        switch (field) {
            case "email":
                dispatch(verifyEmail(formData))
                
                break;
            case "otp":
                console.log(formData)
                const otpData = { 
                    otp: formData?.otp, 
                    email: isEmailVerified?.email
                }
                dispatch(verifyToken(otpData))
                
                break;
            case "forgotPassword":
                console.log(formData)
                const resetData = {
                    newPassword: formData?.newPassword,
                    email: isEmailVerified?.email
                }
                dispatch(resetPassword(resetData))
                
                break;
            default:
                break;
        }
    }
    
    const handleChange = (e) => {
        setFormData((prev) => {
            return {...prev, [e.target.name]: e.target.value}
        })
    }

    console.log(formData)

    useEffect(() => {
        if(isEmailVerified){
            setStep(2)
        }
        if(isOTPVerified) {
            setStep(3)
        }
    }, [isEmailVerified, isOTPVerified])
    
    return(
        <div className=" dark:text-primary_black grid place-items-stretch h-[100dvh] w-full p-5">
            {
                step === 1 && (<div className=" flex flex-col justify-center gap-[3rem] w-full" >
                    <h1 className=" text-center font-semibold text-[30px] dark:text-white " > 
                        Verify Email
                    </h1>
                    <form onSubmit={(e) => handleSubmit(e, 'email')} className=" flex flex-col gap-4 w-full h-fit px-[1rem] py-[3rem] rounded-lg overflow-hidden bg-primary_light_grey dark:bg-blue_head shadow-custom4 dark:shadow-custom_white1 dark:bg-opacity-50 " >
                        <div className=' flex flex-col gap-2  '>
                            <label className="" htmlFor='email' children={"Email"} />
                            <input
                                placeholder="Enter here..."
                                required 
                                className=' dark:bg-primary_light_grey pl-2 p-1 bg-gray-300 border-none !shadow-custom5 focus:ring-1 focus:ring-black rounded-md '
                                onChange={handleChange}
                                type='text'
                                name='email'
                            />
                        </div>
                        <div className=" flex justify-between " >
                            <p>
                                ... Input your email to recieve an OTP ...
                            </p>
                            
                            <button type="submit" className=" w-fit py-1 px-12 bg-primary_black text-[15px] text-white shadow-custom7 dark:bg-primary_light_grey rounded-3xl overflow-hidden dark:text-primary_black " >
                                Send
                            </button>

                        </div>
                    </form>
                    <Link to={'/admin/auth'} className=" hover:scale-105 hover:bg-black duration-300 transition-all text-[14px] px-6 py-1 rounded-xl bg-primary_light_grey w-fit " >
                        Back
                    </Link>
                </div>)
            }

            {
                step === 2 && (
<div className=" flex flex-col justify-center gap-[3rem] w-full" >
                                <h1 className=" text-center font-semibold text-[30px] dark:text-white " > 
                                    Verify OTP
                                </h1>
                                <form onSubmit={(e) => handleSubmit(e, 'otp')} className=" flex flex-col gap-4 w-full h-fit px-[1rem] py-[3rem] rounded-lg overflow-hidden bg-primary_light_grey dark:bg-blue_head shadow-custom4 dark:shadow-custom_white1 dark:bg-opacity-50 " >
                                    <div className=' flex flex-col gap-2  '>
                                        <label className="" htmlFor='otp' children={"OTP"} />
                                        <input
                                            placeholder="Enter here..."
                                            required 
                                            className=' dark:bg-primary_light_grey pl-2 p-1 bg-gray-300 border-none !shadow-custom5 focus:ring-1 focus:ring-black rounded-md '
                                            onChange={handleChange}
                                            type='text'
                                            name='otp'
                                            max="999999"
                                            maxLength={6}
                                        />
                                    </div>
                                    <div className=" flex justify-between " >
                                        <p>
                                            ... Input
                                                required your OTP to reset password ...
                                        </p>
                                        
                                        <button type="submit" className=" w-fit py-1 px-12 bg-primary_black text-[15px] text-white shadow-custom7 dark:bg-primary_light_grey rounded-3xl overflow-hidden dark:text-primary_black " >
                                            Send
                                        </button>
                
                                    </div>
                                </form>
                            </div>
                )
            }

            {
                step === 3 && (
                    <div className=" dark:text-primary_black grid place-items-stretch h-[100dvh] w-full p-5">
                            <div className=" flex flex-col justify-center gap-[3rem] w-full" >
                                <h1 className=" text-center font-semibold text-[30px] dark:text-white " > 
                                    Reset Password
                                </h1>
                                <form onSubmit={(e) => handleSubmit(e, 'forgotPassword')} className=" flex flex-col gap-4 w-full h-fit px-[1rem] py-[3rem] rounded-lg overflow-hidden bg-primary_light_grey dark:bg-blue_head shadow-custom4 dark:shadow-custom_white1 dark:bg-opacity-50 " >
                                   
                                    <div className=' flex flex-col gap-2 '>
                                        <label htmlFor='newPassword' children={"New Password"} />
                                        <input
                                            placeholder="Enter here..."
                                            required 
                                            className=' dark:bg-primary_light_grey pl-2 p-1 bg-gray-300 border-none !shadow-custom5 focus:ring-1 focus:ring-black rounded-md '
                                            onChange={handleChange}
                                            type='password'
                                            name='newPassword' />
                                    </div>
                                    <div className=" flex justify-end " >
                                        <button type="submit" className=" w-fit py-1 px-12 bg-primary_black text-[15px] text-white shadow-custom7 dark:bg-primary_light_grey rounded-3xl overflow-hidden dark:text-primary_black " >
                                            Send
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                )
            }
        </div>
    )
}

export default ResetPassword