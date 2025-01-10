import { Outlet, useLocation } from "react-router-dom"
import PublicFooter from "./components/PublicFooter";
import NavigationBar from "./components/NavigationBar";
import BODYHEADERIMG from './../Asset/image7.jpg'
import CANCEL from './../Asset/icons8-x-50.png'
import SEARCH from './../Asset/icons8-search-50 (1).png'
import { useState } from "react";


const Public = () => {
    const [openSearch, setOpenSearch] = useState(false)
    const location = useLocation()
    const pathname = location.pathname
    console.log(pathname === "/")
    return(
        <div className=" flex flex-col justify-between min-h-[100dvh] h-fit relative ">
            <NavigationBar setOpenSearch={setOpenSearch} openSearch={openSearch} />
            {
                pathname === "/" ?
                     "" 
                    : 
                    <figure className=" h-[220px] w-screen " >
                        <img className=" w-full h-full object-cover " src={BODYHEADERIMG} alt="header image" />                       
                    </figure>
            }
            <div className={` px-[20px] fixed text-white ${openSearch ? "top-0" : "top-[-100%]"} z-[999999999] flex flex-col gap-5 justify-center items-center h-[100dvh] w-screen bg-opacity-55 bg-primary_black `}>
                <figure onClick={() => setOpenSearch(false)} className=" absolute top-[20px] right-[20px] h-[30px] w-[30px] overflow-hidden rounded-lg" >
                    <img className=" object-contain w-full h-full " src={CANCEL} alt={"Close modal"} />
                </figure>
                <h1 className=" font-bold text-[20px] sm:text-[36px] " > 
                    Search Here
                </h1>
                <div className=" flex justify-center items-center gap-[5px] bg-white h-[32px] w-full mobile:w-[375px] rounded-md overflow-hidden " >
                    <img src={SEARCH} className=" object-contain h-[20px] w-[40px] " />
                    <input className=" text-primary_black text-[14px] sm:text-[15px] h-full w-full  " type="search" placeholder="Article Search..." />
                </div>
            </div>
            <Outlet/>
            <PublicFooter/>
            {/* <Caption/> */}
        </div>
    )

    
}

export default Public;