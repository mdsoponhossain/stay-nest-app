import { Outlet } from "react-router-dom";
import NavBar from "../SharedComponent/NavBar";


const Layout = () => {
    return (
        <>
            <NavBar></NavBar>
            <Outlet></Outlet>
            
        </>
    );
};

export default Layout;