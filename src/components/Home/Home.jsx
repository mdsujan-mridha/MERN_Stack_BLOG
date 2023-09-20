import React from 'react';
import Hero from './Hero';
import PopularCategory from './PopularCategory';
import RecentPost from './RecentPost';
import Featured from './Featured';
import Utils from './Utils';


const Home = () => {
    return (
        <div>
            <Hero />
            <PopularCategory />
            <RecentPost />
            <Featured />
            <Utils />
        </div>
    );
};

export default Home;