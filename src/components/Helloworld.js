import React from 'react';

function Helloworld(props) {
    function clickMe(){
        alert("Click me in First Component")
    }

    return (
        <div>
            <h1>Hello world</h1>
            <p>This is my first component</p>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <button onClick={clickMe}>Click Me</button>
        </div>
    );
}

export default Helloworld;