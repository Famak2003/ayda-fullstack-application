import { Link, Outlet } from "react-router-dom"
import AUTHIMG from './../../Asset/loginpage-image.png'
import LOGO from './../../Asset/ayda-logo.png'


const Auth = () => {
    return (
        <div className=" min-h-[100dvh] w-screen dark:bg-deep_black_red dark:text-primary_black" >
            <div className=" flex flex-col gap-4 justify-center items-center w-full h-full px-3">
                <Link to={"/"} className=" overflow-hidden rounded-lg w-[160px] h-[160px] mobile:w-[192px] mobile:h-[192px] bg-opacity-0 ">
                    <img className=" h-full w-full object-contain " src={LOGO} alt="ayda logo"/>
                </Link>
                <section className=" overflow-hid rounded-lg h-fit w-full sm:w-[585px] ">
                    <Outlet/>
                </section>
            </div>
        </div>
    )
}

export default Auth