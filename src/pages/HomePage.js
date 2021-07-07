import React from 'react';
import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";
import Home from '../components/home/Home';

const HomePage = () => {
    return (
        <div className="container">
            <Header/>
            <Home/>
            <Footer/>
        </div>

    );
};

export default HomePage;
