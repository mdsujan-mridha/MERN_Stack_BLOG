import React from 'react';
import "./utils.css";

import coding from "../../assets/recent post/coding.jpg"
import fitness from "../../assets/recent post/fitness.jpg"
import gym from "../../assets/recent post/gym.jpg"
import story from "../../assets/recent post/story.jpg"


const Utils = () => {

    const postItem = [
        {
            id: 1,
            title: "Creating is a privilege but it’s also a gift",
            img: coding,
            time: "15 mins read",
            date: "12 April,2023"
        },
        {
            id: 2,
            title: "Being unique is better than being perfect",
            img: gym,
            time: "15 mins read",
            date: "12 April,2023"
        },
        {
            id: 3,
            title: "Creating is a privilege but it’s also a gift",
            img: fitness,
            time: "10 mins read",
            date: "12 April,2023"
        },
        {
            id: 4,
            title: "Your voice, your mind, your story, your vision",
            img: story,
            time: "15 mins read",
            date: "12 April,2023"
        },
    ]


    const followItem = [
        {
            id: 1,

            img: coding,

        },
        {
            id: 2,

            img: gym,

        },
        {
            id: 3,

            img: fitness,

        },
        {
            id: 4,

            img: story,

        },
        {
            id: 5,

            img: coding,

        },
        {
            id: 6,

            img: gym,

        },
        {
            id: 7,

            img: fitness,

        },
        {
            id: 8,

            img: story,

        },
        {
            id: 9,

            img: coding,

        },
        {
            id: 10,

            img: gym,

        },
        {
            id: 11,

            img: fitness,

        },
        {
            id: 12,

            img: story,

        },
    ]
    return (
        <div className='wrapper utils--container'>

            <div className="utils">
                <div className="popular--post">
                    <h2>Popular Posts
                    </h2>
                    <hr className='style-hr' />

                    <div className="section-area">
                        <div className="popular__post--content">
                            {
                                postItem.map((item) => (
                                    <div className="card-area">

                                        <img src={item.img} alt="post_img" className='itemImg' />

                                        <div className="card-body">
                                            <h3> {item.title} </h3>
                                            <div>
                                                <p>{item.time}</p>
                                                <li> {item.date} </li>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="popular--comment">
                    <h2>Last Comment
                    </h2>
                    <hr className='style-hr' />

                    <div className="section-area">
                        <div className="popular__post--content">
                            {
                                postItem.map((item) => (
                                    <div className="card-area">

                                        <img src={item.img} alt="post_img" className='itemImg' />

                                        <div className="card-body">
                                            <h3> {item.title} </h3>
                                            <div>
                                                <p>{item.time}</p>
                                                <li> {item.date} </li>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="follow">
                    <h2>Follow me instagram
                    </h2>
                    <hr className='style-hr' />
                    <div className="follow-me">
                        <div className="follow-container">
                            {
                                followItem &&
                                followItem.map((item) => (
                                    <div className="follow-content">
                                        <img src={item?.img} alt="follow-me" className='follow-me-image' />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Utils;