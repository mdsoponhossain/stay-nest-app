import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { IoMoonOutline } from "react-icons/io5";
import { PiSun } from "react-icons/pi";


const NavBar = () => {
    const { user, handleLogOut, handleThemeSwitch } = useContext(AuthContext);
    const [toggle, setToggle] = useState(true);





    const navItems = <>

        <button className=" block md:hidden ml-10" onClick={() => handleThemeSwitch()}>
            <span onClick={() => setToggle(!toggle)}>
                {
                    toggle === true ? <IoMoonOutline className="text-3xl"></IoMoonOutline> : <PiSun className="text-3xl"></PiSun>
                }
            </span>
        </button>
        <li><NavLink className='ml-5 text-black dark:text-white font-semibold text-md' to='/'>Home</NavLink></li>
        <li><NavLink className='ml-5 text-black dark:text-white font-semibold text-md' to='/rooms'>Rooms</NavLink></li>
        {
            user && <li><NavLink className='ml-5 text-black dark:text-white font-semibold text-md' to='/my-Bookings'>My Bookings</NavLink></li>
        }
          {
            user && <li><NavLink className='ml-5 font-semibold text-black dark:text-white text-md' to='/my-registations'>Registered</NavLink></li>
        }
        

        <li><NavLink className='ml-5 font-semibold text-black dark:text-white text-md' to='/gallery'>Gallery</NavLink></li>

        <li><NavLink className='ml-5 font-semibold text-black dark:text-white text-md' to='/about-us'>About Us</NavLink></li>

        
    </>







    // console.log(user)
    const handleUserLogOut = () => {
        const email = user.email
        const userInfo = { email }
        handleLogOut()
            .then(() => {
                Swal.fire({
                    title: "Good job!",
                    text: "Your Logout is successfully done",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500
                });
                axios.post('https://hotel-management-app-server.vercel.app/clear-token', userInfo, { withCredentials: true })
                    .then(() => {
                    })
            })
            .catch(() => {
            })
    }
    return (
        <div className="dark:bg-black bg-white dark:text-white shadow-lg  ">
            <div className=" fixed z-50 w-full dark:bg-black bg-white opacity-90">
                <div className="navbar text-black bg-white opacity-95 dark:bg-black dark:text-slate-400  max-w-7xl mx-auto ">

                    <div className="navbar-start ">
                        <div className="dropdown  ">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 dark:text-white  text-black w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu-sm  dropdown-content dark:bg-slate-700 dark:text-white mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {navItems}
                            </ul>
                        </div>
                        <span className="normal-case text-2xl font-bold text-[#09ad9b] ">StayNest</span>



                    </div>

                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu-horizontal px-1">
                            {navItems}
                        </ul>

                    </div>

                    <div className="navbar-end">

                        <button className=" hidden md:block ml-10 pr-32" onClick={() => handleThemeSwitch()}>
                            <span onClick={() => setToggle(!toggle)}>
                                {
                                    toggle === true ? <IoMoonOutline className="text-2xl"></IoMoonOutline> : <PiSun className="text-3xl"></PiSun>
                                }
                            </span>
                        </button>


                        <div className="  mr-2">


                        </div>


                        {
                            user ? <div className="dropdown  dropdown-end">
                                <div tabIndex={0} role="button" className=" hover:cursor-pointer rounded-full dark:bg-slate-700 m-1">{
                                    user?.photoURL && <img className="w-12 h-12 rounded-3xl" src={user?.photoURL} /> || <img className="rounded-3xl w-[50px] h-[50px]" src='https://i.ibb.co/K5Q1JQN/profile-1.jpg' />
                                }</div>
                                <ul tabIndex={0} className="dropdown-content dark:text-white dark:bg-slate-700  z-[10] menu p-2 shadow bg-base-100 rounded-box w-60">
                                    {user?.displayName && <li className="dark:text-white font-semibold text-[#079988] text-lg">{user?.displayName}</li>}
                                    {user?.email && <li className="dark:text-white font-semibold  text-[#079988] text-md">{user?.email?.slice(0, 20)}...</li>}
                                    <li onClick={handleUserLogOut} className="button-primary py-1 text-center">Logout</li>
                                </ul>
                            </div> : <ul style={{ textDecoration: 'none' }}>
                                <li ><NavLink className='ml-5 font-semibold text-lg' to='/login'>Login</NavLink></li>
                            </ul>
                        }

                    </div>

                </div>
            </div>
        </div >
    );
};

export default NavBar;