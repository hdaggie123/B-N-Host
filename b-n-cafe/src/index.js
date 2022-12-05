//Here I want a simple index page
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SeasonMenu from './Pages_Customer/SeasonMenu';
import Menu from './Pages_Customer/Menu';
import Drink from './Pages_Customer/Drinks';
import Order from './Pages_Customer/Order';
import End from './Pages_Customer/End';
import Layout from './Main/Layout';

import Login from './Main/Login';

import Accounts from './Pages_Staff/Accounts';
import Inventory from './Pages_Staff/Inventory';
import ManagerMenu from './Pages_Staff/ManagerMenu';
import SalesHistory from './Pages_Staff/SalesHistory';
import Staff from './Pages_Staff/Staff';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Menu />} />
                    <Route path="SeasonMenu" element={<SeasonMenu />} />
                    <Route path="Drink" element={<Drink />} />
                    <Route path="Order" element={<Order />} />
                    <Route path="End" element={<End />} />
                    
                    <Route path="Login" element={<Login />} />
                    <Route path="Accounts" element={<Accounts />} />
                    <Route path="Inventory" element={<Inventory />} />
                    <Route path="Manager_Menu" element={<ManagerMenu />} />
                    <Route path="Sales_history" element={<SalesHistory />} />
                    <Route path="Staff" element={<Staff />} />
                    <Route path="Staff" element={<Staff />} />
                </Route>
            </Routes>
        </Router>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);