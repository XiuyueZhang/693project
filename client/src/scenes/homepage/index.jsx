import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/header/header';
import Footer from '../../components/Footer/footer';
import { Link } from 'react-router-dom';

function Home(props) {
    return (
        <div>
            <Header />
            <ul>
                <li>
                    <Link to="/admin">Go to Admin</Link>
                </li>
            </ul>
            <Outlet />
            <Footer />
        </div>
    );
}

export default Home;