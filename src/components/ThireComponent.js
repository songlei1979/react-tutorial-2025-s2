import React from 'react';

function ThireComponent(props) {
    function clickMe(){
        alert("Click me in Third Component")
    }


    return (
        <div>
            <h1>My Third Component</h1>
            <button onClick={clickMe}>Click Me</button>
        </div>
    );
}

export default ThireComponent;