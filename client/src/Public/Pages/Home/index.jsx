import Greetings from "./Greetings"
import Hero from "./Hero"
import Location from "./Location"
import Methods from "./Methods"

const Home = () => {

    return (
        <div className=" flex flex-col justify-center items-center w-full gap-6 ">
            <Hero/>
            <Greetings/>
            <Methods/>
            <Location/>
        </div>
    )
}

export default Home