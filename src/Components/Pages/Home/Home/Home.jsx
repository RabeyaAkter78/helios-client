import LeftSideHome from "../LeftSideHome/LeftSideHome";
import MainHome from "../MainHome/MainHome";

const Home = () => {
    //   const [posts, setPosts] = useState([]);
    //   useEffect(() => {
    //     fetch(`${import.meta.env.VITE_URL}/allposts`)
    //       .then((res) => res.json())
    //       .then((data) => {
    //         setPosts(data);
    //       });
    //   }, []);

    return (
        <>
            <div className="">
                <div className="grid grid-cols-1 md:grid-cols-12 pt-20">
                    <div className="lg:col-span-3 hidden lg:block ">
                        <LeftSideHome />
                    </div>

                    <div className="grid-cols-12 md:col-span-9">
                        <MainHome></MainHome>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
