import { ReactComponent as PoweredByNET } from './../../Asset/poweredbynet.svg';


const Caption = () => {
    return <caption className=" flex justify-center items-center h-[58px] bg-opacity-25 bg-cyan ">
        <small className=" pr-1 border-r-2 border-white h-[21px] ">© 2024 All Rights Reserved</small>
        <PoweredByNET className=" w-[226px] h-[21px] " />
    </caption>;
}
export default Caption;