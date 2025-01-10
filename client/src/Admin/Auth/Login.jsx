import { useEffect, useLayoutEffect, useState } from "react"
import { login } from "../../Redux/actions/authAction"
import { useDispatch, useSelector } from "react-redux"
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom"

const Login = () => {
    const { isAuthenticated } = useSelector(state => state.auth);
    const navigate = useNavigate()
    const location = useLocation();
    const [formData, setFormData] = useState({})
    const dispatch = useDispatch()
    const [searchParams] = useSearchParams();

    // Get the redirect path from location state or set default
    const redirectTo = location.state?.from?.pathname || '/';

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login(formData))
    }

    const handleChange = (e) => {
        setFormData((prev) => {
            return {...prev, [e.target.name]: e.target.value}
        })
    }

    useLayoutEffect(() => { // returns user back to admin dashboard if they are logged in
        if (isAuthenticated){
            navigate(redirectTo, { replace: true })
        }
    }, [isAuthenticated, navigate, redirectTo])

    return(
        <div className=" dark:text-primary_black grid place-items-stretch h-[100dvh] w-full p-5">
            <div className=" flex flex-col justify-center gap-[3rem] w-full" >
                <h1 className=" text-center font-semibold text-[30px] dark:text-white " > 
                    Login
                </h1>
                <form onSubmit={handleSubmit} className=" flex flex-col gap-4 w-full h-fit px-[1rem] py-[3rem] rounded-lg overflow-hidden bg-primary_light_grey dark:bg-blue_head shadow-custom4 dark:shadow-custom_white1 dark:bg-opacity-50 " >
                    <div className=' flex flex-col gap-2  '>
                        <label className="" htmlFor='email' children={"Email"} />
                        <input 
                            className=' dark:bg-primary_light_grey pl-2 p-1 bg-gray-300 border-none !shadow-custom5 focus:ring-1 focus:ring-black rounded-md '
                            onChange={handleChange}
                            type='text'
                            name='email'
                        />
                    </div>
                    <div className=' flex flex-col gap-2 '>
                        <label htmlFor='password' children={"Password"} />
                        <input 
                            className=' dark:bg-primary_light_grey pl-2 p-1 bg-gray-300 border-none !shadow-custom5 focus:ring-1 focus:ring-black rounded-md '
                            onChange={handleChange}
                            type='password'
                            name='password' />
                    </div>
                    <div className=" flex justify-between " >
                        <Link to={"/admin/auth/resetPassword"} className=" text-blue hover:underline " >Forgort password?</Link>
                        <button type="submit" className=" w-fit py-1 px-12 bg-primary_black text-[15px] text-white shadow-custom7 dark:bg-primary_light_grey rounded-3xl overflow-hidden dark:text-primary_black " >
                            Login
                        </button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login