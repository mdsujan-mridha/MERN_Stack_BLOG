import React from 'react';
import "./hero.css"
import profile from "../../assets/cover/sujan.jpg"
import { Archive, Comment, PortableWifiOff, PostAdd } from '@mui/icons-material';
const Hero = () => {
    return (
        <div className='hero-section'>
            <div className='hero-container'>
                <h1>Discover and Share Inspiring Stories - Your Home for Creativity and Knowledge. </h1>

            </div>
            <div className='hero-bottom'>
                <div className='hero-profile'>
                    <img src={profile} alt="" className='profile-img' />
                </div>
                <div className='hero__bottom-content '>
                    <div className='hero__bottom__content-1-1'>
                        <div className='icon-div-1 '>
                            <PostAdd fontSize='50' />
                        </div>
                        <p className='count'> 300+
                            <span className='title'> Blogs </span>
                        </p>
                    </div>

                    <div className='hero__bottom__content-1-2'>
                        <div className='icon-div-2'>
                            <PortableWifiOff fontSize='50' />
                        </div>
                        <p className='count'> 300+
                            <span className='title'> Users </span>
                        </p>
                    </div>

                    <div className='hero__bottom__content-1-3'>
                        <div className='icon-div-3'>
                            <Comment fontSize='50' />
                        </div>
                        <p className='count'> 300+
                            <span className='title'> Comments </span>
                        </p>

                    </div>
                    <div className='hero__bottom__content-1-4'>
                        <div className='icon-div-4'>
                            <Archive fontSize='50'/>
                        </div>
                        <p className='count'> 10+
                            <span className='title'> Archive </span>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Hero;