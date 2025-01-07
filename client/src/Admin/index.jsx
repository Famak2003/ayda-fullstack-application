import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom"


const Admin = () => {
    const { isAuthenticated } = useSelector(state => state.auth)
    const location = useLocation()
    
    if (!isAuthenticated){
        return <Navigate to="/admin/auth" state={{ from: location }} replace />
    }
    

    return(
        <Outlet/>
    )
}

export default Admin;