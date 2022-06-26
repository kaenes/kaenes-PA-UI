import React, {Component} from 'react';
import '../css/splash-screen.css';
//  logo
import Logo from '../components/Logo';
// Buttons
import ButtonGreen from "../assets/buttons/button--green--feet.svg";
import ButtonRed from "../assets/buttons/button--red--feet.svg";
// background
import BackgroundGrid from "../components/BackgroundGrid";
import BackgroundFrame from '../components/BackgroundFrame';

// headings
import Heading from '../components/Heading';
import RulesTitle from '../assets/texts/ZASADY.svg';
import CatalogueTitle from '../assets/texts/KATALOG.svg';
import Level1Title from '../assets/texts/POZIOM_1.svg';
import ModeTitle from '../assets/texts/TRYBY.svg';


class SplashScreen extends Component {
    render() {
        
        return(
            <div className="splash-screen">
                <BackgroundFrame />
                <BackgroundGrid />
                <Logo />
                <img src={ButtonGreen} className="button green" />
                <img src={ButtonRed} className="button red" />
                {/* <Heading title={ModeTitle} /> */}
            </div>
        );
    }
}

export default SplashScreen;