import { Outlet, Link } from "react-router-dom";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ManagerNavBar from "../Pages_Staff/ManagerNavBar";
// import BottomNav from './Pages/bottomNav';

const Layout = () => {
    return (
        <>
        <ManagerNavBar />
        <Navbar />
        {/* <ManagerNavBar /> */}
            <nav>
                <ul>
                    {/* <li>
                        <Link to="/">Menu</Link>
                    </li> */}
                </ul>
            </nav>
        <Outlet />
        <Footer />
        </>
    )
};

export default Layout;