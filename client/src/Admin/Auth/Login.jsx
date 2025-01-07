import { useEffect, useState } from "react"
import { login } from "../../Redux/actions/authAction"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate, useSearchParams } from "react-router-dom"

const Login = () => {
    const { isAuthenticated } = useSelector(state => state.auth);
    const navigate = useNavigate()
    const location = useLocation();
    const [formData, setFormData] = useState({})
    const dispatch = useDispatch()
    const [searchParams] = useSearchParams();

    // Get the redirect path from location state or set default
    const redirectTo = location.state?.from?.pathname || '/admin/dashboard';

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login(formData))
    }

    const handleChange = (e) => {
        setFormData((prev) => {
            return {...prev, [e.target.name]: e.target.value}
        })
    }

    useEffect(() => { // returns user back to admin dashboard if they are logged in
        if (isAuthenticated){
            navigate(redirectTo, { replace: true })
        }
    }, [isAuthenticated, navigate, redirectTo])

    return(
        <div className=" dark:text-light_grey grid place-items-stretch h-[100dvh] w-full p-5">
            <div className=" flex flex-col justify-center gap-[3rem] w-full" >
                <h1 className=" text-center font-semibold text-[30px] " > 
                    Login
                </h1>
                <form onSubmit={handleSubmit} className=" flex flex-col gap-4 w-full h-fit px-[1rem] py-[3rem] rounded-lg overflow-hidden bg-primary_light_grey dark:bg-black dark:ring-2 ring-light_grey " >
                    <div className=' flex flex-col gap-2  '>
                        <label className="" htmlFor='email' children={"Email"} />
                        <input 
                            className=' dark:text-black dark:bg-primary_light_grey pl-2 p-1 bg-gray-300 focus:ring-1 focus:ring-black rounded-md '
                            onChange={handleChange}
                            type='text'
                            name='email'
                        />
                    </div>
                    <div className=' flex flex-col gap-2 '>
                        <label htmlFor='password' children={"Password"} />
                        <input 
                            className=' dark:text-black dark:bg-primary_light_grey pl-2 p-1 bg-gray-300 focus:ring-1 focus:ring-black rounded-md '
                            onChange={handleChange}
                            type='password'
                            name='password' />
                    </div>
                    <button type="submit" className=" self-end w-fit py-2 px-4 bg-black dark:bg-primary_light_grey rounded-lg overflow-hidden text-light_grey dark:text-black " >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login