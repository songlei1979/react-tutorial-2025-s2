import React, {useState} from 'react';

function Conditiion(props) {
    const [name, setName] = useState("Lei")

    function changeName(){
        setName(name==="Lei"? "Simon": "Lei");
    }

    return (
        <div>
            <h2>{name}</h2>
            <button onClick={changeName}>Change Name</button>
        </div>
    );
}

export default Conditiion;