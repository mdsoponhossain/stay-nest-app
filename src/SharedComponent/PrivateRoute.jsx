import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";



const PrivateRoute = ({ children }) => {
    const { loading, user } = useContext(AuthContext);
    const location = useLocation();
    console.log(location)
    if (loading) {
        return <div className="grid justify-center items-center h-96">
            <span className=" loading loading-spinner loading-lg"></span>
        </div>
    }
    if (user) {
        return children;
    }

   return <Navigate to='/login' state={location.pathname}></Navigate>
};

export default PrivateRoute;