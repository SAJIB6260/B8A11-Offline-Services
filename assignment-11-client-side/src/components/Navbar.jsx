import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";


const Navbar = () => {


    const { user, logOut } = useContext(AuthContext);

    return (
        <div id="navbar" className="static z-40 top-0 right-0 left-0 ">
            <div className="navbar bg-slate-700  h-20 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost p-2 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu-sm dropdown-content mt-[14px] z-[2] rounded-box p-2 shadow bg-slate-700 w-[500%] border border-[#009FD9]">
                            <li>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? "font-bold mr-5 text-[#009FD9]"
                                            : " font-bold mr-5 text-white hover:text-[#009FD9] duration-150"
                                    }
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? "font-bold  mr-5 text-[#009FD9]"
                                            : "font-bold mr-5 text-white hover:text-[#009FD9] duration-150  "
                                    }
                                    to="/allService"
                                >
                                    All Services
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <Link to="/"><img src="https://i.ibb.co/SypmLYQ/white-logo.png" className=" lg:w-1\3 p-1 h-[50px] hidden lg:flex" alt="" /></Link>
                </div>
                <div className="navbar-center">
                    <ul className="text-black menu-horizontal px-1 hidden lg:flex">
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? " border-b-[3px] border-[#009FD9] font-bold mr-5 pb-1 text-[#009FD9]"
                                        : " font-bold mr-5 text-white hover:text-[#009FD9] hover:border-b-[3px] hover:border-[#009FD9] hover:pb-1 duration-150"
                                }
                                to="/"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? "border-b-[3px] border-[#009FD9] font-bold pb-1 mr-5 text-[#009FD9]"
                                        : "font-bold mr-5 text-white hover:text-[#009FD9] hover:border-b-[3px] duration-150 hover:border-[#009FD9] hover:pb-1"
                                }
                                to="/allService"
                            >
                                All Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? "border-b-[3px] border-[#009FD9] font-bold pb-1 mr-5 text-[#009FD9]"
                                        : "font-bold mr-5 text-white hover:text-[#009FD9] hover:border-b-[3px] duration-150 hover:border-[#009FD9] hover:pb-1"
                                }
                                to="/ContactUs"
                            >
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                    <Link to="/"><img src="https://i.ibb.co/SypmLYQ/white-logo.png" className="lg:w-1\3 p-2 md:p-0 h-[50px] lg:hidden" alt="" /></Link>
                </div>
                <div className="navbar-end">
                    {
                        user?.email ? (
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user?.photoURL} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-[14px] z-[2] p-2 shadow  menu-sm dropdown-content  md:w-[600%] rounded-box border bg-slate-700 border-[#009FD9]">
                                    <li>
                                        <p className="font-bold text-lg w-full mr-5 text-[#009FD9] ">
                                            {user?.displayName}
                                        </p>
                                    </li>
                                    <li>
                                        <p className="font-bold text-base w-full mr-5 text-blue-300">
                                            {user?.email}
                                        </p>
                                    </li>
                                    <hr />
                                    <li>
                                        <NavLink
                                            className={({ isActive }) =>
                                                isActive
                                                    ? "font-bold text-base mr-5 text-[#009FD9]"
                                                    : "text-white font-semibold mr-5 hover:text-[#009FD9]"
                                            }
                                            to="/addServices"
                                        >
                                            Add Services
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            className={({ isActive }) =>
                                                isActive
                                                    ? "font-bold text-base mr-5 text-[#009FD9]"
                                                    : "text-white font-semibold mr-5 hover:text-[#009FD9]"
                                            }
                                            to={`/myServices/provider/${user?.email}`}
                                        >
                                            My Services
                                        </NavLink>
                                    </li>
                                    <li>
                                        <h1 className="text-white font-semibold mr-5 hover:text-[#009FD9]">
                                            <details>
                                                <summary>My Schedules</summary>
                                                <ul>
                                                    <li>
                                                        <NavLink
                                                            className={({ isActive }) =>
                                                                isActive
                                                                    ? "font-bold text-base mr-5 text-[#009FD9]"
                                                                    : "text-whitefont-semibold mr-5 hover:text-[#009FD9]"
                                                            }
                                                            to="/myBookings"
                                                        >
                                                            My Bookings
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink
                                                            className={({ isActive }) =>
                                                                isActive
                                                                    ? "font-bold text-base mr-5 text-[#009FD9]"
                                                                    : "text-white font-semibold mr-5 hover:text-[#009FD9]"
                                                            }
                                                            to="/myPendingWorks"
                                                        >
                                                            My Pending works
                                                        </NavLink>
                                                    </li>
                                                </ul>
                                            </details>
                                        </h1>
                                    </li>
                                    <li><button onClick={logOut} className="w-full bg-[#009FD9] mt-2 font-bold text-white text-lg mr-5">Logout</button></li>
                                </ul>
                            </div>
                        )
                            :
                            (
                                <p>
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? " border-b-2 border-[#009FD9] font-bold mr-5 pb-1 text-[#009FD9]"
                                                : " font-bold mr-5 hover:text-[#009FD9] hover:border-b-2 hover:border-[#009FD9] text-white hover:pb-1 duration-150"
                                        }
                                        to="/login"
                                    >
                                        LogIn
                                    </NavLink>
                                </p>
                            )
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;