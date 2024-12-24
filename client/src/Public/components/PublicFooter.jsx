import MAP from './../../Asset/icons8-map-50.png'
import PHONE from './../../Asset/icons8-call-50.png'
import CERTIFIED from './../../Asset/certified-image.png'
import CHAIN from './../../Asset/icons8-chain-48.png'

function PublicFooter() {
    return <footer className=" h-fit py-[60px] bg-cyan ">
        <ul className=" flex flex-wrap justify-center gap-[30px] items-center h-full w-full px-5 ">
            <li className=" flex flex-col justify-center items-center max-[1150px]: min-w-[260px]  w-[25%] h-[247px] rounded-md bg-white ">
                <figure className=" h-[37px] w-[37px] bg-secondary_pink rounded-md ">
                    <img className=" h-full object-cover " src={MAP} alt="address" />
                </figure>
                <h2 className=" text-[22px] font-bold ">
                    Our address
                </h2>
                <div className=" flex justify-center items-center gap-2 ">
                    <figure className=" w-[91px] h-[95px] ">
                        <img className=" w-full h-full object-cover " src={CERTIFIED} alt="certifications" />
                    </figure>
                    <address className=" w-[50%] overflow-clip ">
                        Martyr Erdoğan Yıldız St. No:5 Kızılay, Nicosia Northern Cyprus (TRNC)
                    </address>
                </div>

            </li>
            <li className=" flex flex-col justify-center items-center max-[1150px]: min-w-[260px]  w-[25%] h-[247px] rounded-md bg-white ">
                <figure className=" h-[37px] w-[37px] bg-secondary_pink rounded-md ">
                    <img className=" h-full object-cover " src={PHONE} alt="address" />
                </figure>
                <h2 className=" text-[22px] font-bold ">
                    Our address
                </h2>
                <div className=" flex justify-center items-center gap-2 ">
                    <figure className=" w-[91px] h-[95px] ">
                        <img className=" w-full h-full object-cover " src={CERTIFIED} alt="certifications" />
                    </figure>
                    <address className=" w-[50%] overflow-clip ">
                        Martyr Erdoğan Yıldız St. No:5 Kızılay, Nicosia Northern Cyprus (TRNC)
                    </address>
                </div>

            </li>
            <li className=" flex flex-col justify-center items-center max-[1150px]: min-w-[260px]  w-[25%] h-[247px] rounded-md bg-white ">
                <figure className=" h-[37px] w-[37px] bg-secondary_pink rounded-md ">
                    <img className=" h-full object-cover " src={CHAIN} alt="address" />
                </figure>
                <h2 className=" text-[22px] font-bold ">
                    Our address
                </h2>
                <div className=" flex justify-center items-center gap-2 ">
                    <figure className=" w-[91px] h-[95px] ">
                        <img className=" w-full h-full object-cover " src={CERTIFIED} alt="certifications" />
                    </figure>
                    <address className=" w-[50%] overflow-clip ">
                        Martyr Erdoğan Yıldız St. No:5 Kızılay, Nicosia Northern Cyprus (TRNC)
                    </address>
                </div>

            </li>
        </ul>
    </footer>;
}

export default PublicFooter