import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import SideBar from "./components/SideBar";
import { useEffect, useRef, useState } from "react";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import USER from './../../Asset/icons8-user-48.png'
import Profile from "./Profile";
import { getProfile } from "../../Redux/actions/authAction";


const Dashboard = () => {
    const dispatch = useDispatch()
    const { isAuthenticated, permission, userInfo } = useSelector(state => state.auth);
    const [showSidebar, setShowSidebar] = useState(false)
    const [isProfileVisible, setIsProfileVisible] = useState(false)
    const location = useLocation()
    const sidebarRef = useRef(null)
    const [darkmode, setDarkmode] = useState(
        localStorage.getItem('dark-mode') === "true"
    )


    useEffect(() => {
            dispatch(getProfile({id: userInfo.userID}))
        }, [])

    console.log("PERMISSIOON === > ?", permission)

    const handleCloseSidebar = () => {
        setShowSidebar(false)
    }

    useOutsideClick(sidebarRef, handleCloseSidebar)

    // darkmode
    useEffect(() =>{
        const root = window.document.documentElement
        if (darkmode){
            root.classList.add('dark')
        }else{
            root.classList.remove('dark')
        }
    
        //save dark-mode preference
        localStorage.setItem("dark-mode", darkmode);
    }, [darkmode])


    if (!isAuthenticated){
        return <Navigate to="/admin/auth" state={{ from: location }} replace />
    }

    return (
        <div className=" relative p-2 h-fit w-[100vw] ">
            <div className="z-[999] absolute flex gap-2 justify-center items-center duration-300 right-[20px] top-[10px] rounded-md bg-primary_light_grey dark:bg-black p-1 " >
                <button className=' z-[9999] hover:animate-pulse duration-300 flex rounded-xl text-[10px] dark:ring-white px-1 ' 
                    onClick={() => { 
                    setDarkmode(!darkmode)
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon text-gray-600 text-xl">
                        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                    </svg>
                </button>
                <button onClick={() => setIsProfileVisible(true)} className=" overflow-hidden rounded-full ring-1 ring-primary_black " >
                    {
                        userInfo?.avatar ? 
                            <figure className="h-[32px] w-[32px]" >
                                <img className=" w-full h-full object-cover " src={ userInfo?.avatar } alt="user" />
                            </figure>
                        :
                        <figure className=" p-1 w-[32px] h-[32px]" >
                            <img className=" w-full h-full object-contain " src={ USER } alt="user" />
                        </figure>
                    }
                </button>
            </div>
            <button 
                className={` absolute top-0 group z-[9999] inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg lmd:hidden hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 duration-300 ease-linear transition-transform ${showSidebar ? "translate-x-[220px] rotate-180" : "rotate-0"} `}
                onClick={() => setShowSidebar(!showSidebar)}
            >
                <svg className="w-6 h-6 rotate-180 transition-transform duration-300 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>
            <div className=" flex lmd:grid md:grid-cols-[209px_1fr] gap-0 min-h-[100dvh] w-full" >
                <Profile isProfileVisible={isProfileVisible} setIsProfileVisible={setIsProfileVisible} />
                <div className=" relative ">
                    <SideBar setShowSidebar={setShowSidebar} showSideBar={showSidebar} />
                </div>

                
                <div className=" flex flex-col gap-3 p-4 h-full dark:bg-dark w-full">
                    <div className=" p-4 w-full rounded-lg dark:bg-dark dark:border-gray-700 h-fit shadow-custom1 ">
                    <Outlet />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;
