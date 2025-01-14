import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, NavLink } from "react-router-dom"
import { logout } from "../../../Redux/actions/authAction"
import LOGO from './../../../Asset/ayda-logo.png'
import { updateAboutusDropdown, updateTreatmentDropdown } from "../../../Redux/actions/dashboardAction"
import { useOutsideClick } from "../../../hooks/useOutsideClick"

const SideBar = ({setShowSidebar, showSideBar}) => {
    const dispatch = useDispatch()
    const sidebarRef = useRef(null)
    const aboutUsDropDown = useSelector(state => state.dashboard.aboutUsDropDown)
    const treatmentDropDown = useSelector(state => state.dashboard.treatmentDropDown)
    // const [aboutUsDropDown, setAboutusDropDown] = useState(false)
    // const [treatmentDropDown, setTreatmentDropDown] = useState(false)
    const [isSuperAdmin, setIsSuperAdmin] = useState(true)
    const closeSidebar = () => {
        setShowSidebar(false)
    }
    useOutsideClick(sidebarRef, closeSidebar)
    const handleLogout = () => {
            dispatch(logout());
        };
    return(
        <aside ref={sidebarRef} className={` fixed lmd:relative px-2 lmd:px-0 w-fit lmd:w-full min-h-screen h-fit shadow-custom4 transition-transform -translate-x-full z-[99999] ${showSideBar ? "translate-x-0" : " translate-x-[-200%] lmd:translate-x-0 "} lmd:translate-x-0 bg-black bg-opacity-30 backdrop-blur-md `}>
              <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 ">
                  <ul className="space-y-2 font-medium w-full ">
                    <li className=" flex justify-center dark:bg-white dark:rounded-2xl " >
                        <a href="/admin/dashboard" className=" block max-w-[126px] max-h-[65px] w-full  ">
                            <img className=" h-full w-full object-cover " src={LOGO} alt=" ayda logo " />
                        </a>
                    </li>
                    <li>
                        <NavLink 
                            to="/admin/dashboard"
                            end
                            className={({isActive}) => ` ${isActive ? "bg-light_pink text-white shadow-custom2 " : ""}  flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}>
                          <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                              <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                              <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                          </svg>
                          <span className="ms-3">Dashboard</span>
                        </NavLink>
                    </li>
                    <li >
                        <button 
                          type="button" 
                          className=" flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" 
                          onClick={() => {
                              dispatch(updateAboutusDropdown(!aboutUsDropDown))
                              dispatch(updateTreatmentDropdown(false))
                            }
                          }
                        >
                              <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">About Us</span>
                              <svg className={`w-3 h-3 ${!aboutUsDropDown ? "" : "rotate-[180deg]"} transition-transform duration-300 `} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                              </svg>
                        </button>
                        <ul id="dropdown-example" className={` transition-height ease-in-out duration-300 py-2 space-y-2 overflow-y-scroll ${!aboutUsDropDown ?  " !h-0 !p-0 " : " h-[200px]"} duration-300 `}>
                              <li>
                                <NavLink to="nedenbiz" className={({isActive}) => ` ${isActive ? "bg-light_pink text-white shadow-custom2 " : ""}  flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700`}>Why Us</NavLink>
                              </li>
                              <li>
                                <NavLink to="takimimiz" className={({isActive}) => ` ${isActive ? "bg-light_pink text-white shadow-custom2 " : ""}  flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700`}>Our Team</NavLink>
                              </li>
                              <li>
                                <NavLink to="fiyatlarimiz" className={({isActive}) => ` ${isActive ? "bg-light_pink text-white shadow-custom2 " : ""}  flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700`}>Our Prices</NavLink>
                              </li>
                              <li>
                                <NavLink  to="basarioranlari" className={({isActive}) => ` ${isActive ? "bg-light_pink text-white shadow-custom2 " : ""}  flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700`}>Our Success Rates</NavLink>
                              </li>
                        </ul>
                    </li>
                    <li >
                        <button 
                          type="button" 
                          className=" flex items-center w-full p-2 text-base text-gray-900 cursor-pointer transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                          aria-controls="dropdown-example"
                          data-collapse-toggle="dropdown-example"
                          onClick={() => {
                              dispatch(updateTreatmentDropdown(!treatmentDropDown))
                              dispatch(updateAboutusDropdown(false))
                            }
                          }
                        >
                              <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Treatments</span>
                              <svg className={`w-3 h-3 ${!treatmentDropDown ? "" : "rotate-[180deg]"} transition-transform duration-300 `} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                              </svg>
                        </button>
                        <ul id="dropdown-example" className={` py-2 space-y-2 overflow-y-scroll ${!treatmentDropDown ?  " !h-0 !p-0 " : " h-[345px]"} duration-300 `}>
                              <li>
                                <NavLink to="tupbebekivf" className={({isActive}) => ` ${isActive ? "bg-light_pink text-white shadow-custom2 " : ""}  flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700`}>
                                    IVF
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="yumurtadonasyonu" className={({isActive}) => ` ${isActive ? "bg-light_pink text-white shadow-custom2 " : ""}  flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700`}>
                                    Egg Donation 
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="spermdonasyonu" className={({isActive}) => ` ${isActive ? "bg-light_pink text-white shadow-custom2 " : ""}  flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700`}>
                                    Sperm Donation 
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="embriyodonasyonu" className={({isActive}) => ` ${isActive ? "bg-light_pink text-white shadow-custom2 " : ""}  flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700`}>
                                    Embryo Donation 
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="yumurtadondurma" className={({isActive}) => ` ${isActive ? "bg-light_pink text-white shadow-custom2 " : ""}  flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700`}>
                                    Egg Freezing
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="ovarianprp" className={({isActive}) => ` ${isActive ? "bg-light_pink text-white shadow-custom2 " : ""}  flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700`}>
                                    PRP
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="akupunktur" className={({isActive}) => ` ${isActive ? "bg-light_pink text-white shadow-custom2 " : ""}  flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700`}>
                                    Acupuncture
                                </NavLink>
                              </li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to="seyahat" className={({isActive}) => ` ${isActive ? "bg-light_pink text-white shadow-custom2 " : ""} flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}>
                          <span className="flex-1 ms-3 whitespace-nowrap">Trip</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="sss" className={({isActive}) => ` ${isActive ? "bg-light_pink text-white shadow-custom2 " : ""} flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}>
                          <span className="flex-1 ms-3 whitespace-nowrap">FAQ</span>
                        </NavLink>
                    </li>
                    {/* <li>
                        <NavLink to="iletisim" className={({isActive}) => ` ${isActive ? "bg-light_pink text-white shadow-custom2 " : ""} flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}>
                          <span className="flex-1 ms-3 whitespace-nowrap">Communication</span>
                        </NavLink>
                    </li> */}
                    {/* <li>
                        <NavLink to="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                          <span className="flex-1 ms-3 whitespace-nowrap">Others</span>
                        </NavLink>
                    </li> */}
                    {
                        isSuperAdmin ? 
                            <li>
                                <NavLink to="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <span className="flex-1 ms-3 whitespace-nowrap">Create Admin</span>
                                </NavLink>
                            </li>
                            : ""

                    }
                    <li>
                        <button onClick={handleLogout} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                          <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
                          </svg>
                          <span className="flex-1 ms-3 whitespace-nowrap">Log Out</span>
                        </button>
                    </li>
                  </ul>
              </div>
            </aside>
    )
}

export default SideBar