import React from 'react';

import "./recentPost.css";

import coding from "../../assets/recent post/coding.jpg"
import fitness from "../../assets/recent post/fitness.jpg"
import gym from "../../assets/recent post/gym.jpg"
import music from "../../assets/recent post/music.jpg"
import story from "../../assets/recent post/story.jpg"
import study from "../../assets/recent post/study.jpg"
import { CalendarMonth, LockClock } from '@mui/icons-material';

const RecentPost = () => {

    const posts = [
        {
            id: 1,
            title: "16 Unheard Ways To Achieve Greater Walker",
            metaData: "Embrace remote work success with these invaluable tips and tricks for freelancers seeking productivity and work-life balance in their home offices",
            date: "25 April 2023",
            time: "6:01 am",
            img: coding
        },
        {
            id: 2,
            title: "16 Unheard Ways To Achieve Greater Walker",
            metaData: "Embrace remote work success with these invaluable tips and tricks for freelancers seeking productivity and work-life balance in their home offices",
            date: "25 April 2023",
            time: "6:01 am",
            img: fitness
        },
        {
            id: 3,
            title: "16 Unheard Ways To Achieve Greater Walker",
            metaData: "Embrace remote work success with these invaluable tips and tricks for freelancers seeking productivity and work-life balance in their home offices",
            date: "25 April 2023",
            time: "6:01 am",
            img: music
        },
        {
            id: 4,
            title: "16 Unheard Ways To Achieve Greater Walker",
            metaData: "Embrace remote work success with these invaluable tips and tricks for freelancers seeking productivity and work-life balance in their home offices",
            date: "25 April 2023",
            time: "6:01 am",
            img: gym
        },
        {
            id: 5,
            title: "16 Unheard Ways To Achieve Greater Walker",
            metaData: "Embrace remote work success with these invaluable tips and tricks for freelancers seeking productivity and work-life balance in their home offices",
            date: "25 April 2023",
            time: "6:01 am",
            img: story
        },
        {
            id: 6,
            title: "16 Unheard Ways To Achieve Greater Walker",
            metaData: "Embrace remote work success with these invaluable tips and tricks for freelancers seeking productivity and work-life balance in their home offices",
            date: "25 April 2023",
            time: "6:01 am",
            img: study
        },
    ]

    return (
        <div className='wrapper'>
            <div className="recentPost">
                <h1> Recent posts </h1>
                <p>Don't miss the latest trends</p>
            </div>
            <div className='post'>
                {
                    posts &&
                    posts.map((item) => (
                        <div key={item.id} className='postCard'>
                            <figure>
                                <img src={item.img} alt="Post_Image" className='postImg' />
                            </figure>
                            <div>
                                <h3 className='postTitle'> {item.title} </h3>
                                <p className='postDescription'> {item.metaData} </p>
                                <p className='postInfo'>
                                    <span className='postInfoSpan'><CalendarMonth /> <span> {item.date} </span></span>
                                    <span  className='postInfoSpan'><LockClock /> <span>  {item.time} </span></span>
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default RecentPost;