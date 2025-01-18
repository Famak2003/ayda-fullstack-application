function DoubleHeader({header1, header2, align = "center", flip = false, small = false}) {
    return <div className={` w-full flex flex-col ${align === "center" ? "justify-center items-center" : " items-end"} `}>
        <h1 className={` text-secondary_pink text-center  ${small ? " text-[12px] mobile:text-[16px]" : "text-[16px]"} leading-[20px] ${ flip ? "order-2" : "order-1"}`}>{header1}</h1>
        <h2 className={` ${small ? " text-[16px] mobile:text-[24px]" : " text-[26px]  mobile:text-[36px]"} text-center font-bold ${ flip ? "order-1" : "order-2"}`}>{header2}</h2>
    </div>
}

export default DoubleHeader