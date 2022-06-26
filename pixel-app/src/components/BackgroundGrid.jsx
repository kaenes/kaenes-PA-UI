import React, {Component} from 'react';
import SquareTile from "../assets/background/square-tile--background.svg";


class BackgroundGrid extends Component {
    render() {

        const STEPS = [];
        for(let i=1; i<=45; i++) {
            STEPS.push(<img src={SquareTile} />);
        }

        return(
        <div className="background--grid">
         {STEPS}
        </div>
     );
    }
}

export default BackgroundGrid;