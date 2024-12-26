import { useSelector } from 'react-redux'
import MAP from './../../../Asset/aydamapgray.png'

const Location = () => {
    const location = useSelector(state => state?.home?.content?.location)

    return (
        <div className=' w-full' >
            <figure className=" h-[400px] md:h-[600px] w-full " >
                <img className=" h-full w-full object-cover " src={MAP} alt="location on map" />
            </figure>
        </div>
    )
}

export default Location