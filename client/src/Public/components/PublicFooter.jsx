import MAP from './../../Asset/icons8-map-50.png'
import PHONE from './../../Asset/icons8-call-50.png'
import CERTIFIED from './../../Asset/certified-image.png'
import CHAIN from './../../Asset/icons8-chain-48.png'
import Caption from './Caption';

function PublicFooter() {
    return <footer className=" flex flex-col justify-center items-center gap-[50px] h-fit pt-[40px] bg-cyan ">
        <ul className=" flex flex-wrap justify-center gap-[30px] items-center h-full w-full px-5 max-w-[1150px] ">
            <li className=" flex flex-col justify-center items-center max-[1150px]:min-w-[260px] w-[30%] xl:w-[343px]  h-[247px] rounded-md bg-white ">
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
            <li className=" flex flex-col justify-center items-center max-[1150px]:min-w-[260px] w-[30%] xl:w-[343px]  h-[247px] rounded-md bg-white ">
                <figure className=" h-[37px] w-[37px] bg-secondary_pink rounded-md ">
                    <img className=" h-full object-cover " src={PHONE} alt="address" />
                </figure>
                <h2 className=" text-[22px] font-bold ">
                    Communication
                </h2>
                <div className=" flex flex-col justify-center items-center gap-2 ">
                    <p className='text-[16px] leading-[28px]' >
                        Phone: <span className=' text-secondary_pink font-semibold text-[16px] '>+90 5458 825 28 21</span> 
                    </p>
                    <p className='text-[16px] leading-[28px]' >
                        E-mail:  <span className=' text-secondary_pink font-semibold text-[16px] ' >info@aydaivf.com</span>
                    </p>
                </div>

            </li>
            <li className=" flex flex-col justify-center items-center max-[1150px]:min-w-[260px] w-[30%] xl:w-[343px]  h-[247px] rounded-md bg-white ">
                <figure className=" h-[37px] w-[37px] bg-secondary_pink rounded-md ">
                    <img className=" h-full object-cover " src={CHAIN} alt="address" />
                </figure>
                <h2 className=" text-[22px] font-bold ">
                    Quick Access
                </h2>
                <div className=" flex flex-col justify-center items-center gap-5 text-[16px] font-semibold text-secondary_pink ">
                    <p>Home Page</p>
                    <p>Treatments</p>
                    <p>Trip</p>
                </div>

            </li>
        </ul>
        <Caption/>
    </footer>;
}

export default PublicFooter