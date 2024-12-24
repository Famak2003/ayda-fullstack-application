import useDectectScroll from "../../hooks/useDectectScroll"
import LOGO from './../../Asset/ayda-logo.png'
import SEARCH from './../../Asset/icons8-search-50 (1).png'
import PHONE from './../../Asset/icons8-call-50.png'
import { Link } from "react-router-dom"

const aboutUsData = [
    {
        name: "Why Us",
        link: "whyus"
    },
    {
        name: "Our Team",
        link: "ourteam"
    },
    {
        name: "Our Prices",
        link: "ourprices"
    },
    {
        name: "Our Success Rates",
        link: "oursuccessrate"
    },
]

const treatmentsData = [
    {
        name: "In Vitro Fertilization (IVF) -ICSI",
        link: "ivf"
    },
    {
        name: "Egg Donation",
        link: "eggdonation"
    },
    {
        name: "Sperm Donation",
        link: "spermdonation"
    },
    {
        name: "Embryo Donation",
        link: "embryodonation"
    },
    {
        name: "Egg Freezing",
        link: "eggfreezing"
    },
    {
        name: "Ovarian and Endomentrial PRP",
        link: "ovarianprp"
    },
    {
        name: "Acupuncture",
        link: "acupuncture"
    },
]


const NavigationBar = () => {
    const monitorScroll = useDectectScroll(100) // changes navigation bg color when user scroll 100px

    return (
        <nav className={` z-[9999999] w-full fixed top-0 ${monitorScroll ? "bg-white border-b-4 border-secondary_pink" : " bg-white bg-opacity-45"} flex justify-between max-h-[75px] px-[15px] `}>
            <a href="/" className=" max-w-[126px] max-h-[65px]  ">
                <img className=" h-full w-full object-cover " src={LOGO} alt=" ayda logo " />
            </a>
            <ul className=" flex items-center text-[16px] font-bold h-full w-fit gap-4 p-[10px]">
                <li className=" relative group ">
                    <a href="#" className=" groupMenuLinks  ">
                        About us
                    </a>
                    <ul className=" w-[200px] absolute top-[30px] group-hover:flex hidden flex-col gap-2 bg-gray shadow-custom1  ">
                        {aboutUsData.map((obj, idx) => {
                            return (
                                <li key={idx} className=" px-[12px] py-[16px] hover:bg-gray "> 
                                    <Link to={`${obj.link}`}>
                                        {obj.name}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </li>
                <li className=" relative group">
                    <a href="#" className=" groupMenuLinks ">
                        Treatments
                    </a>
                    <ul className=" w-[200px] absolute top-[30px] group-hover:flex hidden flex-col gap-2 bg-gray shadow-custom1  ">
                        {treatmentsData.map((obj, idx) => {
                            return (
                                <li key={idx} className=" px-[12px] py-[16px] hover:bg-gray "> 
                                    <Link to={`${obj.link}`}>
                                        {obj.name}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </li>
                <li className=" menuLinks ">
                    <Link to={'trip'} >
                        Trip
                    </Link>
                </li>
                <li className=" menuLinks ">
                    <Link to={'FAQ'}>
                        FAQ
                    </Link>
                </li>
                <li className=" menuLinks ">
                    <Link to={'communication'} >
                        Communication
                    </Link>
                </li>
                <div className=" flex justify-center items-center w-[102px] h-[18px] ">
                    <figure className=" flex justify-center items-center w-[54px] h-[19px] border-x-2 border-white ">
                        <img className=" h-full object-cover " src={SEARCH} alt="search" />
                    </figure>
                </div>
                <a className=" flex items-center justify-center w-[197px] h-[53px] gap-2 bg-white bg-opacity-50 rounded-md " href="tel://+905488252821">
                    <p>
                        +905488252821
                    </p>
                    <figure className=" w-[34px] h-[37px] bg-secondary_pink rounded-md ">
                        <img className=" h-full w-full object-cover " src={PHONE} alt=" phone " />
                    </figure>
                </a>
            </ul>
        </nav>
    )
}

export default NavigationBar