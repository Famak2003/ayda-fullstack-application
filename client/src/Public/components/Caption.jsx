import { ReactComponent as PoweredByNET } from './../../Asset/poweredbynet.svg';


const Caption = () => {
    return (
        <caption className=" flex justify-center items-center w-full h-[58px] bg-opacity-[0.31] bg-[#212529] px-[10px] ">
            <small className=" text-caption_text text-[12px] pr-1 border-r-2 mobile:text-[15px] leading-[16px] border-white h-[21px] ">© 2024 All Rights Reserved</small>
            <PoweredByNET className=" w-[226px] h-[21px] pl-1 " />
        </caption>
    );
}
export default Caption;