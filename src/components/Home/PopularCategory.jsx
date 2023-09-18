import React from 'react';

import "./popularCategory.css"
import lifeStyle from "../../assets/category/life.png";
import coding from "../../assets/category/pc_2291988.png";
import travel from "../../assets/category/passport.png";
import education from "../../assets/category/reading-book.png";

const PopularCategory = () => {

    const categoryMenu = [
        {
            id: 1,
            title: 'Life Style',
            img: lifeStyle,

        },
        {
            id: 2,
            title: 'Programming',
            img: coding,

        },
        {
            id: 3,
            title: 'Travel',
            img: travel,

        },
        {
            id: 4,
            title: 'Education',
            img: education,

        },
    ]

    return (
        <div className='wrapper'>
            <div className="container">
                <h1> Popular Category </h1>
                <div className='category'>
                    {
                        categoryMenu &&
                        categoryMenu?.map((item) => (
                            <div className='category-card' key={item?.id}>
                                <figure>
                                    <img src={item?.img} alt="Category_img" className='categoryImg' />
                                </figure>
                                <div className='category_title'>
                                    <h1> {item?.title} </h1>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    );
};

export default PopularCategory;