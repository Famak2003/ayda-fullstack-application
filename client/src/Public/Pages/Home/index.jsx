import { useEffect } from "react"
import Greetings from "./Greetings"
import Hero from "./Hero"
import Location from "./Location"
import Methods from "./Methods"
import { useDispatch } from "react-redux"
import { getHome } from "../../../Redux/actions/homeAction"

const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getHome())
    }, [])

    return (
        <section className=" flex flex-col justify-center items-center w-full gap-6 ">
            <Hero/>
            <Greetings/>
            <Methods/>
            <Location/>
        </section>
    )
}

export default Home