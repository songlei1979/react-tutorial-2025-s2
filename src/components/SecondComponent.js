import React, {Fragment} from 'react';
import Helloworld from "./Helloworld";
import InputBox from "./InputBox";

function SecondComponent(props) {
    function clickMe(){
        alert("Click me in Second Component")
    }


    return (
        <Fragment>
            <InputBox/>
            <h1>My Second Component</h1>
        <p>This is my second component</p>
            <button onClick={clickMe}>click me</button>
            <Helloworld name={"Gerard"} age={70}/>
        </Fragment>

    );
}

export default SecondComponent;