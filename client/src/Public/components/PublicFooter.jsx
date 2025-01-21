import MAP from './../../Asset/icons8-map-50.png'
import PHONE from './../../Asset/icons8-call-50.png'
import CERTIFIED from './../../Asset/certified-image.png'
import CHAIN from './../../Asset/icons8-chain-48.png'
import Caption from './Caption';

function PublicFooter() {
    return <footer className=" flex flex-col justify-center items-center gap-[50px] h-fit pt-[40px] w-full bg-footer_bg ">
        <ul className=" flex flex-wrap justify-center gap-[30px] items-center h-full w-full px-5 max-w-[1150px] ">
            <li className="flex flex-col justify-center items-center w-full mobile:min-w-[260px] lmobile:w-[30%] xl:w-[343px] h-fit mobile:h-[330px] py-6 px-2 lmobile:p-0 lmobile:h-[247px] rounded-md bg-white ">
                <div className="  icon ">                    
                    <svg className=' ' fill='#fff' height={'100%'} width={'100%'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M384 476.1L192 421.2l0-385.3L384 90.8l0 385.3zm32-1.2l0-386.5L543.1 37.5c15.8-6.3 32.9 5.3 32.9 22.3l0 334.8c0 9.8-6 18.6-15.1 22.3L416 474.8zM15.1 95.1L160 37.2l0 386.5L32.9 474.5C17.1 480.8 0 469.2 0 452.2L0 117.4c0-9.8 6-18.6 15.1-22.3z"/></svg>
                </div>
                <h2 className=" text-[22px] font-bold ">
                    Adresimiz
                </h2>
                <div className=" flex flex-col lmobile:flex-row justify-center items-center gap-2 ">
                    <figure className=" w-[91px] h-[95px] ">
                        <img className=" w-full h-full object-cover " src={CERTIFIED} alt="certifications" />
                    </figure>
                    <address className=" w-[50%] overflow-clip ">
                        Şehit Erdoğan Yıldız Cd. No:5 Kızılay, Lefkoşa Kuzey Kıbrıs (KKTC)
                    </address>
                </div>

            </li>
            <li className="flex flex-col justify-center items-center w-full mobile:min-w-[260px] lmobile:w-[30%] xl:w-[343px] h-fit mobile:h-[330px] p-3 lmobile:h-[247px] rounded-md bg-white ">
                <div className=" icon ">
                    <i class="fa fa-phone fs22" aria-hidden="true" style={{'fontSize': "20px", "color": "#fff"}}></i>
                </div>
                <h2 className=" text-[22px] font-bold ">
                    İletişim
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
            <li className="relative flex flex-col justify-center items-center w-full mobile:min-w-[260px] lmobile:w-[30%] xl:w-[343px] h-fit mobile:h-[330px] p-3 lmobile:h-[247px] rounded-md bg-white ">
                <div className=" icon ">
                    <i class="fa fa-link" aria-hidden="true" style={{'fontSize': "20px", "color": "#fff"}}></i>
                </div>
                <h2 className=" text-[22px] font-bold ">
                    Hızlı Erişim
                </h2>
                <div className=" flex flex-col justify-center items-center gap-1 text-[16px] font-semibold text-secondary_pink ">
                    <a className=' duration-300 hover:text-blue_head hover:border-secondary_pink p-2 ' href='/' >Anasayfa</a>
                    <a className=' duration-300 hover:text-blue_head hover:border-secondary_pink p-2 ' href='#' >Tedaviler</a>
                    <a className=' duration-300 hover:text-blue_head hover:border-secondary_pink p-2 ' href='/seyahat' >Seyahat</a>
                </div>
                <p className=' absolute translate-y-[-20000000000%]' >akande</p>
            </li>
        </ul>
        <Caption/>
    </footer>;
}

export default PublicFooter