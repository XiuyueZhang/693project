import React from 'react';
import Header from '../../components/header';
import ClassList from '../../components/class/ClassList';

function Home(props) {
    return (
        <div>
            <Header />
            <ClassList />
        </div>
    );
}

export default Home;