import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
    const { isAuthenticated } = useSelector(state => state.auth);
    console.log("Was just here", isAuthenticated)

    if (!isAuthenticated) {
        return <Navigate to="/admin/auth" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;