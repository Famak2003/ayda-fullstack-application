import { useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { Outlet } from "react-router-dom"
import { logout } from "../../Redux/actions/authAction"

const Dashboard = () => {
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
    }
    return(
      <div className="  p-2 dark:bg-teal-500" >
       Dashboard
       <button onClick={handleLogout} >
            Logout
       </button>
       <Outlet/>
      </div>
    )
}

export default Dashboard