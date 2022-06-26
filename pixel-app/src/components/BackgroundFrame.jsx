import React, {Component} from 'react';

import '../css/background.css';


// assets--background and effects
import EffectsLightLeft from "../assets/background/effects--light.svg";
import EffectsLightRight from "../assets/background/effects--light--right.svg";
import Frame from '../assets/background/background-frame--full.svg';

// assets--corners
import FrameCornerLT from '../assets/background/background-frame--corner--LT.svg';
import FrameCornerRT from '../assets/background/background-frame--corner--RT.svg';
import FrameCornerLB from '../assets/background/background-frame--corner--LB.svg';
import FrameCornerRB from '../assets/background/background-frame--corner--RB.svg';



class BackgroundFrame extends Component {
    render(){
        return(
                <div className="background">
                    <img src={Frame} className="effects--frame" />
                    <img src={EffectsLightLeft}  className="effects--light left" />
                    <img src={EffectsLightRight}  className="effects--light right" />
                    <img src={FrameCornerLT} className="frame-corner left-top" />
                    <img src={FrameCornerRT} className="frame-corner right-top" />
                    <img src={FrameCornerLB} className="frame-corner left-bottom" />
                    <img src={FrameCornerRB} className="frame-corner right-bottom" />
                </div>

        );
    }
}

export default BackgroundFrame;