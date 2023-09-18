import React from 'react';
import Hero from './Hero';
import PopularCategory from './PopularCategory';
import RecentPost from './RecentPost';
import Featured from './Featured';

const Home = () => {
    return (
        <div>
            <Hero />
            <PopularCategory />
            <RecentPost />
            <Featured />
        </div>
    );
};

export default Home;