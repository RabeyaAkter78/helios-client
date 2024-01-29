import { FaSearch } from "react-icons/fa";
import "./HomeNav.css"
const HomeNav = () => {
    return (
        <div className="navbar bg-slate-50 z-10 fixed">
            <div className="navbar-start">
                <div className="border-r border-gray-500 px-6">
                    <img className="h-[40px] w-[60px] rounded" src="https://global.discourse-cdn.com/business7/uploads/shapr3d/original/2X/e/e7bd5f9252ae42e60ec18c0b573a28e138e5574d.png" alt="Logo" />
                </div>
                <div className="w-48">
                    <input
                        type="text"
                        className="w-full p-3 h- rounded-md mx-2  bg-white border-none border-transparent focus:outline-none focus:border-none"
                    />
                </div>
            </div>

            <div className="navbar-center ">
                <div className="relative flex items-center searchBar px-2 ">
                    <div className=" ">
                        {/* Icon Of Search */}
                        <FaSearch></FaSearch>
                    </div>
                    {/* Search Text */}
                    <div className=" top-1/2 transform -translate-y-0.5 ">
                        <input
                            type="text"
                            placeholder=""
                            className="h-11 w-72 rounded-xl text-xl font-semibold text-gray-400  border-none border-transparent focus:outline-none focus:border-none bg-transparent"
                        />
                    </div>


                </div>
                <div className="w-80">
                    <input
                        type="text"
                        placeholder="Location"
                        className="w-full p-3 h- rounded-md mx-2  bg-slate-200 border-none border-transparent focus:outline-none focus:border-none"
                    />
                </div>
            </div>
            <div className="navbar-end">

                <button className="btn btn-ghost ">
                    Login
                </button>
            </div>

        </div>

    );
};

export default HomeNav;