import { ReactNavbar } from 'overlay-navbar';
import React from 'react';
import logo from "../../../assets/logo/logo-1.png";
import { FaUserAlt } from "react-icons/fa"
import { FiSearch } from "react-icons/fi";



const Header = () => {
    return (
        <ReactNavbar
            burgerColorHover="#eb4034"
            burgerColor="#fff"
            logo={logo}
            logoWidth="20vmax"
            navColor1="#212f3c"
            logoHoverSize="10px"
            logoHoverColor="#eb4034"
            link1Text="Home"
            link2Text="Blogs"
            link3Text="Contact"
            link4Text="About"
            link1Url="/"
            link2Url="/blogs"
            link3Url="/contact"
            link4Url="/about"
            link1Size="2vmax"
            // link1Color: "rgba(35, 35, 35,0.8)",
            link1Color="#FFFFFF"
            nav1justifyContent="flex-end"
            nav2justifyContent="flex-end"
            nav3justifyContent="flex-start"
            nav4justifyContent="flex-start"
            nav1alignItems="center"
            nav2alignItems="center"
            nav3alignItems="center"
            nav4alignItems="center"
            link1Family="Special Elite"
            link2Family="Special Elite"
            link3Family="Special Elite"
            link4Family="Special Elite"
        
            link1ColorHover="#eb4034"
            link1Margin="1vmax"
            searchIconUrl="/search"
            profileIconUrl="/login"
            profileIconColor="white"
            searchIconColor="white"
            cartIconColor="white"
            profileIconColorHover="#eb4034"
            searchIconColorHover="#eb4034"
            searchIconMargin="1vmax"
            searchIcon={true}
            SearchIconElement={FiSearch}
            profileIconMargin="0.5vmax"
            profileIcon={true}
            ProfileIconElement={FaUserAlt}


        />
    );
};

export default Header;