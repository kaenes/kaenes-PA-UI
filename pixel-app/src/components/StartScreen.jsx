import React from 'react';
import ButtonHolder from '../assets/background/button--holder--pink.svg';
import '../css/start-screen.css';
// background
import BackgroundGrid from "../components/BackgroundGrid";
import BackgroundFrame from '../components/BackgroundFrame';
// headings
import Heading from '../components/Heading';
import RulesTitle from '../assets/texts/ZASADY.svg';
import CatalogueTitle from '../assets/texts/KATALOG.svg';
import Level1Title from '../assets/texts/POZIOM_1.svg';
import ModeTitle from '../assets/texts/TRYBY.svg';
import StartTitle from '../assets/texts/START.svg';
// button
import MainButton from '../assets/buttons/button--green--feet.svg';

const StartScreen = () => {
    return(
        <>
         <div className="parentDiv start-screen">
                <BackgroundFrame />
                <BackgroundGrid />
                <Heading title={StartTitle} />
               <img src={ButtonHolder} className="button-holder" />
               <img src={MainButton} className="main-button" />
            </div>

        </>
    );
};


export default StartScreen;