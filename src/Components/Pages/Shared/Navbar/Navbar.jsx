import "./Navbar.css"
import { FaSearch } from "react-icons/fa";
const Navbar = () => {

    return (
        <div>
            <nav className="navbar text-black p-4 flex">
                <div className="flex items-center justify-between">
                    {/* Icon, Search Bar, and Location Section (8/12 width) */}
                    <div className=" flex gap-4 mx-4 ">
                        <div className="">
                                <img className="h-[40px] w-[70px] rounded" src="https://global.discourse-cdn.com/business7/uploads/shapr3d/original/2X/e/e7bd5f9252ae42e60ec18c0b573a28e138e5574d.png" alt="Logo" />
                        </div>
                        <div className="navbar-end w-1/5 border-r border-gray-400 mx-2">

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

                        {/* Address Section */}
                        <div className="w-80">
                            <input
                                type="text"
                                placeholder="Location"
                                className="w-full p-3 h- rounded-md mx-2  bg-slate-200 border-none border-transparent focus:outline-none focus:border-none"
                            />
                        </div>
                    </div>
                </div>
                <div className="navbar-end gap-4">
                    <button className="btn btn-ghost ">Language</button>
                    <button className="btn btn-ghost ">
                        Login
                    </button>
                </div>
            </nav>




        </div>
    );
};

export default Navbar;