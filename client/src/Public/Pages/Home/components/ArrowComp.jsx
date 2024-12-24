function ArrowComp({img, right=false}) {
    return <figure className=' h-5 w-5 '> <img className={` w-full h-full object-contain ${ right ? "rotate-180" : ""}`} src={img} /> </figure>
}

export default ArrowComp