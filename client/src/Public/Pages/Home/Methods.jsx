import CHECK from './../../../Asset/icons8-check-48.png'
import DoubleHeader from '../../components/DoubleHeader'

const Methods = () => {

    const listData = [
        "In vitro fertilization (IVF)-ICSI",
        "Egg Donation",
        "Sperm Donation",
        "Embryo Donation",
        "Ovarian & Endometrial PRP",
        "Embryo Genetic Screening (NGS, Single Gene)",
        "Sex Selection (PGD)",
        "Egg Freezing",
        "Surrogacy",
        "Embryo Genetic Screening (PGD)",
    ]

    return (
        <div className=" flex flex-col gap-4 justify-center items-center h-fit " >
            <DoubleHeader header1={"MOST FREQUENTLY PREFERRED"} header2={"Our Treatment Methods"} />
            <p className=" text-center text-light_grey max-w-[1150px] leading-[28px] font-normal " >
                Before you visit Ayda IVF Team, be sure to take a look at our treatment methods that we have prepared especially for you, carefully considering every detail, so that you can have more detailed information about your treatment. Here, you will have the opportunity to examine your suitable treatment more closely and get detailed information.
                <br/>
                <br/>
                After reviewing our treatments, please remember that we are just a phone call away for any questions you may have. We look forward to meeting you and providing you with professional assistance so that you can have a healthy baby.
            </p>
            <ul className=" grid max-[550px]:grid-cols-1 grid-cols-2 gap-2 gap-y-4 " >
                {
                    listData.map((value, idx) => {
                        return <li className=' flex gap-2 justify-center items-center text-[15px] text-light_grey font-semibold max-w-[324px] ' key={idx} >
                            <figure className=' h-[15px] w-[15px] ' > <img className=' h-full w-full object-cover ' src={CHECK} alt="check-img"/> </figure>
                            <p className='' >
                                {value}
                            </p>
                        </li>
                    })
                }
            </ul>
            <button className=' w-[161px] h-[56px] mt-[1.5rem] rounded-[32px] bg-light_pink ring-1 ring-secondary_pink flex justify-center items-center text-white font-semibold  ' >
                Contact Us
            </button>

        </div>
    )
}

export default Methods