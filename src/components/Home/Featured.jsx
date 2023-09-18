import React from 'react';
import "./Featured.css"

import coding from "../../assets/recent post/coding.jpg"
import fitness from "../../assets/recent post/fitness.jpg"
import gym from "../../assets/recent post/gym.jpg"
import music from "../../assets/recent post/music.jpg"
import story from "../../assets/recent post/story.jpg"
import study from "../../assets/recent post/study.jpg"

const Featured = () => {

    const postItem = [
        {
            id: 1,
            title: "Digital Design That Will Help You Start Your Business",
            img: coding,
            date: "19 April , 2023"

        },
        {
            id: 2,
            title: "Digital Design That Will Help You Start Your Business",
            img: fitness,
            date: "19 April , 2023"

        },
        {
            id: 3,
            title: "Digital Design That Will Help You Start Your Business",
            img: gym,
            date: "19 April , 2023"

        },
        {
            id: 4,
            title: "Digital Design That Will Help You Start Your Business",
            img: music,
            date: "19 April , 2023"

        },
        {
            id: 5,
            title: "Digital Design That Will Help You Start Your Business",
            img: story,
            date: "19 April , 2023"

        },
        {
            id: 6,
            title: "Digital Design That Will Help You Start Your Business",
            img: study,
            date: "19 April , 2023"

        },
    ]

    return (
        <div className='wrapper'>
            <div className="feature">
                <h1> Featured Articles </h1>
                <p> Discover the most outstanding articles in all topics
                    <div className="post--container">
                        {
                            postItem &&
                            postItem?.map((item) => (
                                <div className="card--container" key={item.id}>
                                    <figure>
                                        <img src={item.img} alt="Post_img"  className='cardImg'/>
                                    </figure>
                                    <div className='post-content'>
                                        <h1> {item.title} </h1>
                                        <p> {item.date} </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </p>
            </div>
        </div>
    );
};

export default Featured;