import React from 'react';

import "./footer.css";
import { Facebook, Instagram, LinkedIn,Twitter } from '@mui/icons-material';

const Footer = () => {
    return (
        <footer>
            <div className='wrapper'>
                <div className="footer-container">
                    <h1> transfer your idea into innovative solution </h1>
                    <div className="footer-content">
                   
                            <Facebook  className='footer-icon'/>
                            <Instagram  className='footer-icon'/>
                            <Twitter   className='footer-icon'/>
                            <LinkedIn  className='footer-icon'/>
                        

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;