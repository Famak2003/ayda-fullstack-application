import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { logout } from "../../Redux/actions/authAction";
import Cookies from 'js-cookie';
import SideBar from "./components/SideBar";
import { useRef, useState } from "react";
import { useOutsideClick } from "../../hooks/useOutsideClick";


const Dashboard = () => {
    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector(state => state.auth);
    const [showSidebar, setShowSidebar] = useState(false)
    const sidebarRef = useRef(null)
    console.log("Was just here", isAuthenticated)
    const getTokenFromCookie = () => Cookies.get('token');
    const token = getTokenFromCookie();

    const handleCloseSidebar = () => {
      console.log("activated")
      setShowSidebar(false)
    }

    console.log(showSidebar)

    useOutsideClick(sidebarRef, handleCloseSidebar)

    console.log("AUTHNTICATED ??", isAuthenticated)   

    if (!isAuthenticated) {
      return <Navigate to={'/admin/auth'} replace />
    }

    return (
        <div className=" p-2 h-fit w-[100vw] ring-4  ">
          
            <button 
              className={` group z-[9999] inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ${showSidebar ? "translate-x-64" : ""} `}
              onClick={() => setShowSidebar(!showSidebar)}
            >
              {/* <span className=" group-hover:hidden !text-primary_black">Open sidebar</span> */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
              </svg>
            </button>
          <div className=" flex md:grid md:grid-cols-[25%_75%] lg:grid-cols-[20%_80%] gap-0 min-h-[100dvh] w-full" >

            <SideBar ref={sidebarRef} showSideBar={showSidebar} />

            
            <div className=" flex flex-col gap-3 p-4 h-full dark:bg-dark">
              <div className=" p-4 w-full rounded-lg dark:bg-dark dark:border-gray-700 h-fit shadow-custom1 dark:shadow-custom_pink1 ">
                <Outlet />
              </div>
            </div>

          </div>


        </div>
    );
};

export default Dashboard;
