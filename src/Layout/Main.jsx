import { Outlet } from 'react-router-dom';
import HomeNav from '../Components/Pages/Shared/Navbar/HomeNav/HomeNav';

const Main = () => {
    return (
        <div>
            <HomeNav></HomeNav>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;