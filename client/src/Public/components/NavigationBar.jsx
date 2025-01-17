import useDectectScroll from "../../hooks/useDectectScroll"
import LOGO from './../../Asset/ayda-logo.png'
import SEARCH from './../../Asset/icons8-search-50 (1).png'
import PHONE from './../../Asset/icons8-call-50.png'
import HAMBURGER from './../../Asset/icons8-hamburger-64.png'
import CANCEL from './../../Asset/icons8-close-60.png'
import { Link } from "react-router-dom"
import { useRef, useState } from "react"
import { useOutsideClick } from "../../hooks/useOutsideClick"

const aboutUsData = [
    {
        name: "Why Us",
        link: "nedenbiz"
    },
    {
        name: "Our Team",
        link: "takimimiz"
    },
    {
        name: "Our Prices",
        link: "fiyatlarimiz"
    },
    {
        name: "Our Success Rates",
        link: "basarioranlari"
    },
]

const treatmentsData = [
    {
        name: "In Vitro Fertilization (IVF) -ICSI",
        link: "tupbebekivf"
    },
    {
        name: "Egg Donation",
        link: "yumurtadonasyonu"
    },
    {
        name: "Sperm Donation",
        link: "spermdonasyonu"
    },
    {
        name: "Embryo Donation",
        link: "embriyodonasyonu"
    },
    {
        name: "Egg Freezing",
        link: "yumurtadondurma"
    },
    {
        name: "Ovarian and Endomentrial PRP",
        link: "ovarianprp"
    },
    {
        name: "Acupuncture",
        link: "akupunktur"
    },
]


const NavigationBar = ({setOpenSearch, openSearch}) => {
    const navRef = useRef(null)
    const monitorScroll = useDectectScroll(100) // changes navigation bg color when user scroll 100px
    const [isNavOpen, setIsNavOpen] = useState(false)
    const handleOutsideClose = () => {
        setIsNavOpen(false)
    }
    useOutsideClick(navRef, () => {
        handleOutsideClose(); // Close the modal when a click occurs outside
    });

    return (
        <nav className={`  z-[99999] fixed top-0 flex flex-col tab:flex-row justify-between h-fit tab:h-[90px] py-[5px] tab:py-0 w-full px-[30px] ${monitorScroll ? "bg-white border-b-4 border-secondary_pink" : " bg-white bg-opacity-45"} `}>
            <a href="/" className=" flex justify-center items-center max-w-[126px] h-full  ">
                <img className=" max-w-[126px] max-h-[65px] object-cover transition-all duration-500 hover:contrast-[2] " src={LOGO} alt=" ayda logo " />
            </a>
            <div ref={navRef} className=" relative flex items-center h-full w-full tab:w-fit p-[10px] " >
                <ul className={` flex gap-4 items-center flex-col tab:flex-row flex-grow tab:flex-none w-full tab:w-fit transition-height ease-in-out duration-300 tab:duration-0 text-[16px] overflow-y-scroll tab:overflow-y-visible bg-primary_light_grey rounded-md bg-opacity-95 tab:bg-none tab:bg-opacity-0 font-bold px-1 ${isNavOpen ? ' h-80 p-5 ' : ' h-0 tab:h-full '}`}>
                    <li className=" relative group h-[100%] flex items-center ">
                        <a href="#" className=" groupMenuLinks ">
                            About us
                        </a>
                        <ul className={` z-[400] w-[200px] absolute top-[50px] group-hover:flex hidden flex-col gap-2 bg-light ${monitorScroll ? " shadow-custom_pink1" : "shadow-custom1"} `}>
                            {aboutUsData.map((obj, idx) => {
                                return (
                                    <Link key={idx} className=" menuText" to={`${obj.link}`}>
                                        {obj.name}
                                    </Link>
                                )
                            })}
                        </ul>
                    </li>
                    <li className=" relative group h-[100%] flex items-center">
                        <a href="#" className=" groupMenuLinks ">
                            Treatments
                        </a>
                        <ul className={` z-[400] w-[200px] absolute top-[50px] group-hover:flex hidden flex-col gap-2 bg-light shadow-custom1 ${monitorScroll ? " shadow-custom_pink1" : "shadow-custom1"} `}>
                            {treatmentsData.map((obj, idx) => {
                                return (
                                    <Link key={idx} className="menuText" to={`${obj.link}`}>
                                        {obj.name}
                                    </Link>
                                )
                            })}
                        </ul>
                    </li>
                    <li className=" menuLinks ">
                        <Link className="dark:text-white" to={'seyahat'} >
                            Trip
                        </Link>
                    </li>
                    <li className=" menuLinks ">
                        <Link className="dark:text-white" to={'sss'}>
                            FAQ
                        </Link>
                    </li>
                    <li className=" menuLinks ">
                        <Link className="dark:text-white" to={'iletisim'} >
                            Communication
                        </Link>
                    </li>
                    <div onClick={() => setOpenSearch(!openSearch)} className=" flex justify-center items-center w-[102px] h-[18px] ">
                        <figure className=" flex justify-center items-center w-[54px] h-[19px] border-x-2 border-white ">
                            <img className=" h-full object-cover " src={SEARCH} alt="search" />
                        </figure>
                    </div>
                    <a className=" group flex items-center justify-center w-[197px] h-[53px] gap-2 bg-white bg-opacity-50 rounded-md " href="tel://+905488252821">
                        <p className="dark:text-white duration-300 group-hover:text-secondary_pink">
                            +905488252821
                        </p>
                        <div className=" icon !group-hover:bg-blue_head ">
                        
                            <i class="fa fa-phone fs22" aria-hidden="true" style={{'fontSize': "20px", "color": "#fff"}}></i>

                            {/* <svg fill='#fff' height={'100%'} width={'100%'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg> */}
                        </div>
                    </a>
                </ul> {/* className={ max-[950px]:flex-col max-[950px]:flex-grow w-screen max-[950px]:w-full transition-height ease-in-out overflow-y-scroll max-[950px]:hidden ${isNavOpen ? ' h-80 p-5' : 'max-[950px]:h-0'}} */}
                <button 
                    className=" absolute top-[-40px] right-[20px] tab:hidden ease-in-out duration-500 rounded-md bg-primary_black flex justify-center items-center w-[34px] h-[34px]"
                    onClick={() => {
                        setIsNavOpen(!isNavOpen)
                    }}
                >
                    <figure className=" w-[17px] h-[20px] " >
                        <img className=" w-full h-full object-cover " src={ isNavOpen ? CANCEL : HAMBURGER } alt="menu" style={{animation: "play-once 2s"}} />
                    </figure>
                </button>
            </div>
        </nav>
    )
}

export default NavigationBar