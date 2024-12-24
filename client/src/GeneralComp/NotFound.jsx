import NOTFOUND from './../Asset/Animation - 1.gif'

const NotFound = () => {
    return (
        <div className=" flex flex-col justify-center items-center text-center h-[100dvh] w-screen" >
            Ooops!
            <br/>
            <br/>
            Page Not found
            <figure className=' w-fit h-fit' >
                <img className=' w-full h-full object-contain' src={NOTFOUND} />
            </figure>
        </div>
    )
}

export default NotFound;