import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {

    return (
        <div>
            <nav className="bg-gray-800 text-yellow-500 p-4">
                <div className="flex items-center justify-between">
                    {/* Icon, Search Bar, and Location Section (8/12 width) */}
                    <div className=" flex  mx-4 ">
                        <div className="">
                            <span className="text-white text-2xl h-48 w-48">Icon</span>
                        </div>
                        <div className="navbar-end w-1/5 border-r border-gray-400 mx-2 px-6">

                        </div>
                        {/* Search BAr */}
                        <div className="relative flex items-center searchBar px-2 gap-8">
                            <div className=" ">
                                {/* Search Icon */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-yellow-500"

                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M13.742 12.344a8.5 8.5 0 111.415-1.415l3.85 3.85a1 1 0 11-1.415 1.415l-3.85-3.85zM2 8.5a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            {/* Search Text Input */}
                           <div className="top-1/2 transform -translate-y-0.5 ">
                           <p className=" w-96  rounded-xl">
                              search here
                            </p>
                           </div>
                            {/* Search Button */}
                            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-yellow-300 px-4 py-3 rounded-xl text-gray-800">
                                Search
                            </button>
                        </div>


                        <div className="w-4/12">
                            <input
                                type="text"
                                placeholder="Location"
                                className="w-full p-2 rounded-md mx-2"
                            />
                        </div>
                    </div>

                    {/* Space (2/12 width) */}
                    <div className="w-2/12"></div>

                    {/* Language Dropdown Section (2/12 width) */}
                    <div className="w-2/12 text-white">
                        <p>language</p>
                    </div>

                    {/* Space (2/12 width) */}
                    <div className="w-2/12"></div>

                    {/* Login Section (2/12 width) */}
                    <div className="w-2/12 text-white">
                        <span>Login</span>
                    </div>
                </div>
            </nav>




        </div>
    );
};

export default Navbar;