import { Outlet } from "react-router-dom"

const Public = () => {
    return(
        <div>
            Hello Public
            <Outlet/>
        </div>
    )
}

export default Public;