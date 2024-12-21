import { useEffect, useState } from "react"
import { login } from "../../Redux/actions/authAction"
import { useDispatch, useSelector } from "react-redux"
import { redirect, useNavigate } from "react-router-dom"

const Login = () => {
    const { isAuthenticated } = useSelector(state => state.auth);
    const navigate = useNavigate()
    const [formData, setFormData] = useState({})
    const dispatch = useDispatch()

    console.log("hhhhhhhh")

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login(formData))
    }

    const handleChange = (e) => {
        setFormData((prev) => {
            return {...prev, [e.target.name]: e.target.value}
        })
    }

    useEffect(() => {
        if (isAuthenticated){
            navigate('/admin/dashboard')
        }
    }, [])

    return(
        <div className=" dark:text-lightGrey grid place-items-stretch h-full w-full p-5">
            <div className=" flex flex-col justify-center gap-[3rem] w-full" >
                <h1 className=" text-center font-semibold text-[30px] " > 
                    Login
                </h1>
                <form onSubmit={handleSubmit} className=" flex flex-col gap-4 w-full h-fit px-[1rem] py-[3rem] rounded-lg overflow-hidden bg-lightGrey dark:bg-black dark:ring-2 ring-lightGrey " >
                    <div className=' flex flex-col gap-2  '>
                        <label className="" htmlFor='header' children={"Email"} />
                        <input 
                            className=' dark:text-black dark:bg-lightGrey pl-2 p-1 bg-gray-300 focus:ring-1 focus:ring-black rounded-md '
                            onChange={handleChange}
                            type='text'
                            name='email'
                        />
                    </div>
                    <div className=' flex flex-col gap-2 '>
                        <label htmlFor='content' children={"Password"} />
                        <input 
                            className=' dark:text-black dark:bg-lightGrey pl-2 p-1 bg-gray-300 focus:ring-1 focus:ring-black rounded-md '
                            onChange={handleChange}
                            type='password'
                            name='password' />
                    </div>
                    <button type="submit" className=" self-end w-fit py-2 px-4 bg-black dark:bg-lightGrey rounded-lg overflow-hidden text-lightGrey dark:text-black " >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login