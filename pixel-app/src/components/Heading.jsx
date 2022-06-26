import React from 'react';
import '../css/heading.css';


const Heading = (props) => {
    console.log(props.title)
    return(
        <div className="heading">
        <img src={props.title} />
        </div>
    );
}

export default Heading;