import { ReactComponent as PoweredByNET } from './../../Asset/poweredbynet.svg';


const Caption = () => {
    return (
        <caption className=" flex justify-center items-center w-full h-[58px] bg-opacity-80 bg-[#706F6F4F] px-[10px] ">
            <small className=" max-[450px]:text-[12px] pr-1 border-r-2 text-[15px] leading-[16px] text-caption_text border-white h-[21px] ">© 2024 All Rights Reserved</small>
            <PoweredByNET className=" w-[226px] h-[21px] pl-1 " />
        </caption>
    );
}
export default Caption;