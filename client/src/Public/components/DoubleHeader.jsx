function DoubleHeader({header1, header2, align = "center", flip = false}) {
    return <div className={` w-full flex flex-col ${align === "center" ? "justify-center items-center" : " items-end"} `}>
        <h1 className={` text-secondary_pink text-center text-[16px] leading-[20px] ${ flip ? "order-2" : "order-1"}`}>{header1}</h1>
        <h2 className={` text-[26px] mobile:text-[36px] text-center font-bold ${ flip ? "order-1" : "order-2"}`}>{header2}</h2>
    </div>
}

export default DoubleHeader