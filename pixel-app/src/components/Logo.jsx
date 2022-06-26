import React from 'react';
import Logotype from '../assets/PA-logo.svg';
import '../css/logo.css';

const Logo = () => {
    return(
        <>
        <img src={Logotype} className="logo" />
        </>
    );
}

export default Logo;