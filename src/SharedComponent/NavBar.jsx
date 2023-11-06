import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const NavBar = () => {
    const navItems = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/rooms'>Rooms</NavLink></li>
        <li><NavLink to='/myBookings'>My Bookings</NavLink></li>
    </>




    const { user, handleLogOut } = useContext(AuthContext);
    console.log(user)
    const handleUserLogOut = () => {
        handleLogOut()
            .then(() => {
                console.log('user successfully log Out')
            })
            .catch(() => {
                console.log('user log out failed')
            })
    }
    return (
        <div className="navbar bg-base-100 border-4">

            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-2xl font-bold text-[#09ad9b] ">StayNest.com</a>

            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>

            </div>

            <div className="navbar-end">
                <div className="mr-2">
                    {
                        user && <div className="block">
                            {
                                user?.photoURL && <img src={user?.photoURL} /> || <img className="rounded-3xl w-[50px] h-[50px]" src='https://i.ibb.co/K5Q1JQN/profile-1.jpg' />
                            }
                        </div>
                    }
                    <div>
                        {
                            user?.email && <span>{user?.email}</span>
                        }
                    </div>
                </div>

                {
                    user ? <><button onClick={handleUserLogOut} className="btn text-white btn-sm bg-[#0cc4b0] hover:bg-[#09ad9b]">Log Out</button></> : <><NavLink className="btn text-white btn-sm bg-[#0cc4b0] hover:bg-[#09ad9b]" to='/login'>Log In</NavLink></>
                }

            </div>

        </div>
    );
};

export default NavBar;