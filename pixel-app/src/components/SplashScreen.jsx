import React, {Component} from 'react';
import Logo from '../assets/PA-logo.svg';
import ButtonGreen from "../assets/buttons/button--green--feet.svg";
import ButtonRed from "../assets/buttons/button--red--feet.svg";

import BackgroundGrid from "../components/BackgroundGrid";
import BackgroundFrame from '../components/BackgroundFrame';



class SplashScreen extends Component {
    render() {
        
        return(
            <div className="splash-screen">
                <BackgroundFrame />
                <BackgroundGrid />
                <img src={Logo} className="logo" />
                <img src={ButtonGreen} className="button green" />
                <img src={ButtonRed} className="button red" />
            </div>
        );
    }
}

export default SplashScreen;