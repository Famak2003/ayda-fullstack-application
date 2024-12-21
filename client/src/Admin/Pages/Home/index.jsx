import { useDispatch } from "react-redux"
import { logout } from "../../../Redux/actions/authAction"
import Hero from "./Hero"

const Home = () => {
    const dispatch = useDispatch()
  
    return(
      <div className="  p-2 dark:bg-teal-500" >
        Home Dashboard
        <Hero/>
      </div>
    )
}

export default Home