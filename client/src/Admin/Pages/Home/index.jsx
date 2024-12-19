import { useDispatch } from "react-redux"
import { logout } from "../../../Redux/actions/authAction"

const Home = () => {
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
    }
    return(
      <div className="  p-2 dark:bg-teal-500" >
       Dashboard
       <button className=" p-2 ring-2 ring-black rounded-lg ml-3" onClick={handleLogout} >
            Logout
       </button>
      </div>
    )
}

export default Home