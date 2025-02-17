import { ReactComponent as PoweredByNET } from './../../Asset/poweredbynet.svg';


const Caption = () => {
    const year = new Date().getFullYear()
    return (
        <caption className=" flex flex-col mobile:flex-row justify-center items-center w-full h-[58px] bg-opacity-[0.31] bg-[#212529] px-[10px] ">
            <small className=" text-caption_text text-[12px] pr-1 mobile:border-r-2 mobile:text-[15px] leading-[16px] border-white h-[21px] ">{`© ${year} All Rights Reserved`}</small>
            <PoweredByNET className=" w-full mobile:w-[226px] h-[21px] pl-1 " />
        </caption>
    );
}
export default Caption;