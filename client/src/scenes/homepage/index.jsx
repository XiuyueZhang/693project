import React from 'react';
import Header from '../../components/header/header';
import ClassList from '../../components/class/ClassList';
import Footer from '../../components/Footer/footer';

function Home(props) {
    return (
        <div>
            <Header />
            <ClassList />
            <Footer />
        </div>
    );
}

export default Home;