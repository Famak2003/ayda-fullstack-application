import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { logout } from "../../../Redux/actions/authAction"
import LOGO from './../../../Asset/ayda-logo.png'

const SideBar = ({ref, showSideBar}) => {
    const dispatch = useDispatch()
    const [aboutUsDropDown, setAboutusDropDown] = useState(false)
    const [treatmentDropDown, setTreatmentDropDown] = useState(false)


    const handleLogout = () => {
            dispatch(logout());
        };
    return(
        <aside ref={ref} className={` fixed md:relative h-screen shadow-custom4 transition-transform -translate-x-full z-[99999] ${showSideBar ? "translate-x-0" : " translate-x-[-200%] md:translate-x-0 "} md:translate-x-0 bg-blend-color-burn `}>
              <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-dark_side">
                  <ul className="space-y-2 font-medium">
                    <a href="/admin/dashboard" className=" block max-w-[126px] max-h-[65px]  ">
                        <img className=" h-full w-full object-cover " src={LOGO} alt=" ayda logo " />
                    </a>
                    <li>
                        <Link to="/admin/dashboard" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                          <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                              <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                              <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                          </svg>
                          <span className="ms-3">Dashboard</span>
                        </Link>
                    </li>
                    <li >
                        <button 
                          type="button" 
                          className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" 
                          onClick={() => setAboutusDropDown(!aboutUsDropDown)}
                        >
                              <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">About Us</span>
                              <svg className={`w-3 h-3 ${!aboutUsDropDown ? "" : "rotate-[270deg]"} transition-transform duration-300 `} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                              </svg>
                        </button>
                        <ul id="dropdown-example" className={` py-2 space-y-2 ${!aboutUsDropDown ?  "opacity-0 max-h-0 overflow-hidden" : "opacity-100 max-h-screen"} transition-none duration-300 `}>
                              <li>
                                <Link to="nedenbiz" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Why Us</Link>
                              </li>
                              <li>
                                <Link to="takimimiz" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Our Team</Link>
                              </li>
                              <li>
                                <Link to="fiyatlarimiz" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Our Prices</Link>
                              </li>
                              <li>
                                <Link  to="basarioranlari" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Our Success Rates</Link>
                              </li>
                        </ul>
                    </li>
                    <li >
                        <button 
                          type="button" 
                          className="flex items-center w-full p-2 text-base text-gray-900 cursor-pointer transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                          aria-controls="dropdown-example"
                          data-collapse-toggle="dropdown-example"
                          onClick={() => setTreatmentDropDown(!treatmentDropDown)}
                        >
                              <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Treatments</span>
                              <svg className={`w-3 h-3 ${!treatmentDropDown ? "" : "rotate-[270deg]"} transition-transform duration-300 `} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                              </svg>
                        </button>
                        <ul id="dropdown-example" className={` py-2 space-y-2 ${!treatmentDropDown ?  "opacity-0 max-h-0 overflow-hidden" : "opacity-100 max-h-screen"} transition-none duration-300 `}>
                              <li>
                                <Link to="tupbebekivf" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">IVF</Link>
                              </li>
                              <li>
                                <Link to="spermdonasyonu" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Egg Donation</Link>
                              </li>
                              <li>
                                <Link to="embriyodonasyonu" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Sperm Donation</Link>
                              </li>
                              <li>
                                <Link to="yumurtadonasyonu" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Embryo Donation</Link>
                              </li>
                              <li>
                                <Link to="yumurtadondurma" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Egg Freezing</Link>
                              </li>
                              <li>
                                <Link to="ovarianprp" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">PRP</Link>
                              </li>
                              <li>
                                <Link to="akupunktur" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Acupuncture</Link>
                              </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="seyahat" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                          <span className="flex-1 ms-3 whitespace-nowrap">Trip</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="sss" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                          <span className="flex-1 ms-3 whitespace-nowrap">FAQ</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="iletisim" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                          <span className="flex-1 ms-3 whitespace-nowrap">Communication</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                          <span className="flex-1 ms-3 whitespace-nowrap">Others</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                          <span className="flex-1 ms-3 whitespace-nowrap">Create Admin</span>
                        </Link>
                    </li>
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