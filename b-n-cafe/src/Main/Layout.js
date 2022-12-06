import { Outlet, Link } from "react-router-dom";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
// import BottomNav from './Pages/bottomNav';

const Layout = () => {
    return (
        <>
        <Navbar />
            <nav>
                <ul>
                    <li>
                        <Link to="/">Menu</Link>
                    </li>
                    <li>
                        <Link to="/SeasonMenu">SeasonMenu</Link>
                    </li>
                    <li>
                        <Link to="/Drink">Drink</Link>
                    </li>
                    <li>
                        <Link to="/Order">Order</Link>
                    </li>
                    <li>
                        <Link to="/End">End</Link>
                    </li>
                    <li>
                        <Link to="/Login">Login</Link>
                    </li>
                    <li>
                        <Link to="/Accounts">Accounts</Link>
                    </li>
                    <li>
                        <Link to="/Inventory">Inventory</Link>
                    </li>
                    <li>
                        <Link to="/ManagerMenu">ManagerMenu</Link>
                    </li>
                    <li>
                        <Link to="/SalesHistory">SalesHistory</Link>
                    </li>
                    <li>
                        <Link to="/Staff">Staff</Link>
                    </li>
                    <li>
                        <Link to="/Map">Map</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
            <Footer />
        </>
    )
};

export default Layout;