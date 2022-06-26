import React, {Component} from 'react';
import SquareTile from "../assets/background/square-tile--background.svg";
import '../css/background-grid.css';


class BackgroundGrid extends Component {
    render() {
        const TILE_SIZE = 75;
        const STEPS = [];
        for(let i=1; i<=72; i++) {
            STEPS.push(<img src={SquareTile}  />);
        }

        return(
        <div className="background--grid">
            {STEPS}
         
        </div>
     );
    }
}

export default BackgroundGrid;