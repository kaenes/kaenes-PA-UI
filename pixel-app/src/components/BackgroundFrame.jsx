import React, {Component} from 'react';
import EffectsLightLeft from "../assets/background/effects--light.svg";
import EffectsLightRight from "../assets/background/effects--light--right.svg";
import Frame from '../assets/background/background-frame--full.svg';

class BackgroundFrame extends Component {
    render(){
        return(
                <div>
                    <img src={Frame} className="effects--frame" />
                    <img src={EffectsLightLeft}  className="effects--light left" />
                <img src={EffectsLightRight}  className="effects--light right" />
                </div>

        );
    }
}

export default BackgroundFrame;