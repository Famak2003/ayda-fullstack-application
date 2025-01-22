import useDectectScroll from "../../hooks/useDectectScroll"
import LOGO from './../../Asset/ayda-logo.png'
import HAMBURGER from './../../Asset/icons8-hamburger-64.png'
import CANCEL from './../../Asset/icons8-close-60.png'
import { Link } from "react-router-dom"
import { useRef, useState } from "react"
import { useOutsideClick } from "../../hooks/useOutsideClick"

const aboutUsData = [
    {
        name: "Neden Biz ?",
        link: "nedenbiz"
    },
    {
        name: "Takımımız",
        link: "takimimiz"
    },
    {
        name: "Fiyatlarımız",
        link: "fiyatlarimiz"
    },
    {
        name: "Başarı Oranlarımız",
        link: "basarioranlari"
    },
]

const treatmentsData = [
    {
        name: "Tüp Bebek (IVF) - ICSI",
        link: "tupbebekivf"
    },
    {
        name: "Yumurta Donasyonu",
        link: "yumurtadonasyonu"
    },
    {
        name: "Sperm Donasyonu",
        link: "spermdonasyonu"
    },
    {
        name: "Embriyo Donasyonu",
        link: "embriyodonasyonu"
    },
    {
        name: "Yumurta Dondurma",
        link: "yumurtadondurma"
    },
    {
        name: "Ovarian ve Endometrial PRP",
        link: "ovarianprp"
    },
    {
        name: "Akupunktur",
        link: "akupunktur"
    },
]


const NavigationBar = ({setOpenSearch, openSearch}) => {
    const navRef = useRef(null)
    const aboutUsRef = useRef(null)
    const treatmentRef = useRef(null)
    const monitorScroll = useDectectScroll(100) // changes navigation bg color when user scroll 100px
    const [isNavOpen, setIsNavOpen] = useState(false)
    const [isAboutus, setIsAboutus] = useState(false)
    const [isTreatmentOpen, setIsTreatmentOpen] = useState(false)

    const handlCloseAboutUs = () => {
        setIsAboutus(false)
    }

    const handlCloseTreatment =() => {
        setIsTreatmentOpen(false)
    }
    
    const handleOutsideClose = () => {
        setIsNavOpen(false)
    }
    useOutsideClick(navRef, () => {
        handleOutsideClose(); // Close the modal when a click occurs outside
    });

    useOutsideClick(aboutUsRef, () => {
        handlCloseAboutUs(); // Close the modal when a click occurs outside
    });

    useOutsideClick(treatmentRef, () => {
        handlCloseTreatment(); // Close the modal when a click occurs outside
    });

    return (
        <nav className={`  z-[999] fixed top-0 flex flex-col tab:flex-row justify-between h-fit tab:h-[90px] py-[5px] tab:py-0 w-full px-[5px] mobile:px-[20px] sm:px-[30px] ${monitorScroll ? "bg-white border-b-4 border-secondary_pink" : " bg-white bg-opacity-45"} `}>
            <a href="/" className=" flex justify-center items-center max-w-[126px] h-full  ">
                <img className=" max-w-[126px] max-h-[65px] object-cover transition-all duration-500 hover:contrast-[2] " src={LOGO} alt=" ayda logo " />
            </a>
            <div ref={navRef} className=" relative flex items-center h-full w-full tab:w-fit p-[10px] " >
                <ul className={` flex gap-4 items-center flex-col tab:flex-row flex-grow tab:flex-none w-full tab:w-fit transition-height ease-in-out duration-300 tab:duration-0 text-[16px] overflow-y-scroll tab:overflow-y-visible bg-primary_light_grey rounded-md bg-opacity-95 tab:bg-none tab:bg-opacity-0 font-bold px-1 ${isNavOpen ? ' h-80 p-5 ' : ' h-0 tab:h-full '}`}>
                    <li ref={aboutUsRef} className=" relative group h-[100%] flex flex-col tab:flex-row items-center ">
                        <a 
                            href="#" 
                            className=" groupMenuLinks "
                            onClick={() => setIsAboutus(!isAboutus)}
                        >
                            Hakkımızda
                        </a>
                        <ul className={` z-[400] w-[200px] transition-height ease-in-out duration-500 overflow-y-scroll rounded-md shadow-custom4 tab:hidden tab:rounded-none tab:absolute tab:top-[50px] ${isAboutus ? "max-h-[500px] tab:max-h-fit my-2 " : "max-h-0 my-0 tab:max-h-fit"} flex tab:group-hover:flex flex-col gap-2 bg-light ${monitorScroll ? " tab:shadow-custom_pink4" : "tab:shadow-custom1"} `}>
                            {aboutUsData.map((obj, idx) => {
                                return (
                                    <Link key={idx} className=" menuText " to={`${obj.link}`}>
                                        {obj.name}
                                    </Link>
                                )
                            })}
                        </ul>
                    </li>
                    <li ref={treatmentRef} className=" relative group h-[100%] flex flex-col tab:flex-row items-center ">
                        <a 
                            href="#" 
                            className=" groupMenuLinks "
                            onClick={() => setIsTreatmentOpen(!isTreatmentOpen)}
                        >
                            Tedaviler
                        </a>
                        <ul className={` z-[400] w-[200px] transition-height ease-in-out duration-500 overflow-y-scroll rounded-md shadow-custom4 tab:hidden tab:my-0 tab:rounded-none tab:absolute top-[50px] ${isTreatmentOpen ? "max-h-[500px] my-2 tab:max-h-fit " : " my-0 max-h-0 tab:max-h-fit"} flex tab:group-hover:flex  flex-col gap-2 bg-light ${monitorScroll ? " tab:shadow-custom_pink4" : "tab:shadow-custom1"} `}>
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
                            Seyahat
                        </Link>
                    </li>
                    <li className=" menuLinks ">
                        <Link className="dark:text-white" to={'sss'}>
                            SSS
                        </Link>
                    </li>
                    <li className=" menuLinks ">
                        <Link className="dark:text-white" to={'iletisim'} >
                            İletişim
                        </Link>
                    </li>
                    
                    <a className=" group flex items-center justify-center w-[197px] h-[53px] gap-2 bg-white bg-opacity-50 rounded-md " href="tel://+905488252821">
                        <p className="dark:text-white duration-300 group-hover:text-secondary_pink">
                            +905488252821
                        </p>
                        <div className=" icon !group-hover:bg-blue_head ">
                            <i class="fa fa-phone fs22" aria-hidden="true" style={{'fontSize': "20px", "color": "#fff"}}></i>
                        </div>
                    </a>
                </ul>
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