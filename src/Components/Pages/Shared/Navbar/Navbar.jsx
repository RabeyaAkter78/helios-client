import "./Navbar.css"
import { FaSearch } from "react-icons/fa";
const Navbar = () => {

    return (
        <div>
            <nav className=" text-black p-4">
                <div className="flex items-center justify-between">
                    {/* Icon, Search Bar, and Location Section (8/12 width) */}
                    <div className=" flex  mx-4 ">
                        <div className="">
                            <span className=" text-2xl h-48 w-48">Icon</span>
                        </div>
                        <div className="navbar-end w-1/5 border-r border-gray-400 mx-2 px-6">

                        </div>
                        {/* Search BAr */}
                        <div className="relative flex items-center searchBar px-2 gap-8">
                            <div className=" ">
                                {/* Icon Of Search */}
                                <FaSearch></FaSearch>
                            </div>
                            {/* Search Text */}
                            <div className="top-1/2 transform -translate-y-0.5 ">
                                <input
                                    type="text"
                                    placeholder="Search for resturants,food or product."
                                    className="w-96 rounded-xl text-xl font-semibold text-gray-400  border-none border-transparent focus:outline-none focus:border-none"
                                />
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
                    <div className="w-2/12 ">
                        <p>language</p>
                    </div>

                    {/* Space (2/12 width) */}
                    <div className="w-2/12"></div>

                    {/* Login Section (2/12 width) */}
                    <div className="w-2/12 ">
                        <span>Login</span>
                    </div>
                </div>
            </nav>




        </div>
    );
};

export default Navbar;