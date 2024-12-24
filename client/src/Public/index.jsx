import { Outlet, useLocation } from "react-router-dom"
import PublicFooter from "./components/PublicFooter";
import NavigationBar from "./components/NavigationBar";
import Caption from "./components/Caption";
import BODYHEADERIMG from './../Asset/image7.jpg'


const Public = () => {
    const location = useLocation()
    const pathname = location.pathname
    console.log(pathname === "/")
    return(
        <div className=" flex flex-col h-fit relative ">
            <NavigationBar/>
            {
                pathname === "/" ?
                     "" 
                    : 
                    <figure className=" h-[220px] w-screen " >
                        <img className=" w-full h-full object-cover " src={BODYHEADERIMG} alt="header image" />                       
                    </figure>
            }
            
            <Outlet/>
            <PublicFooter/>
            <Caption/>
        </div>
    )

    
}

export default Public;