import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/Footer/footer';
import { Outlet } from 'react-router-dom';

function Home(props) {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Home;