import { useSelector } from 'react-redux'
import MAP from './../../../Asset/aydamapgray.png'

const Location = () => {
    const location = useSelector(state => state?.home?.content?.location)

    return (
        <div className='w-full aspect-square mobile:aspect-video' >
            
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1630.1151718275357!2d33.35801273913504!3d35.20073098492126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de1728705f20d1%3A0x901d3f3b58b733ec!2sAyda%20IVF%20Center!5e0!3m2!1str!2s!4v1736501691126!5m2!1str!2s" width="100%" height="100%" style={{border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            
            {/* <figure className=" h-[400px] md:h-[600px] w-full " >
                <img className=" h-full w-full object-cover " src={MAP} alt="location on map" />
            </figure> */}
        </div>
    )
}

export default Location