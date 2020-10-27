import React from 'react';

const Greeting = (props) => {
    return(
        <div>
            <p>halo nama saya {props.name} umur saya: {props.age}</p>
            <h1>{props.children}</h1>
        </div>
    );
}

export default Greeting;