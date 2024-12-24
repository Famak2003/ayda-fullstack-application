import MAP from './../../../Asset/aydamapgray.png'

const Location = () => {

    return (
        <div className=' w-full' >
            <figure className=" h-[600px] w-full " >
                <img className=" h-full w-full object-cover " src={MAP} alt="location on map" />
            </figure>
        </div>
    )
}

export default Location