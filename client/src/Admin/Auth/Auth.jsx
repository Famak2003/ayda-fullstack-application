import { Outlet } from "react-router-dom"
import AUTHIMG from './../../Asset/loginpage-image.png'


const Auth = () => {
    return (
        <div className=" h-fit dark:bg-deep_black_red dark:text-white" >
            <div className=" grid grid-cols-1 lg:grid-cols-2 h-[97dvh]">
                <section className=" order-2 lg:order-1 overflow-hidden rounded-lg h-full bg-opacity-0 ">
                    <img className=" h-full w-full object-cover " src={AUTHIMG} alt="auth-img"/>
                </section>
                <section className=" order-1 lg:order-2 overflow-hidden rounded-lg h-full w-full ">
                    <Outlet/>
                </section>
            </div>
        </div>
    )
}

export default Auth