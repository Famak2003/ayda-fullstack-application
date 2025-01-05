import { useDispatch } from "react-redux"
import { logout } from "../../../Redux/actions/authAction"
import Hero from "./Hero"
import CustomLine from "../components/CustomLine"
import Greetings from "./Greetings"
import QuickInfo from "./QuickInfo"
import { useEffect } from "react"
import { getAdminHomeContent } from "../../../Redux/actions/adminHomeAction"

const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAdminHomeContent())
    }, [])
  
    return(
      <div className=" flex flex-col gap-4  p-2 dark:bg-teal-500" >
        <h1 className=" font-extrabold text-[30px] ">
          Home Dashboard
        </h1>
        <Hero/>
        <CustomLine/>
        <Greetings/>
        <CustomLine/>
        <QuickInfo/>

      </div>
    )
}

export default Home