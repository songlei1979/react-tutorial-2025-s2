import React, {useState} from 'react';

function Form(props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function usernameHandler(e){
        setUsername(e.target.value)
    }

    function passwordHandler(e){
        setPassword(e.target.value)
    }

    function login(){
        alert("username: " + username +
            " password: " + password);
        setPassword("");
        setUsername("");
    }

    return (
        <div>
            <p>Username: <input onChange={usernameHandler}/></p>
            <p>{username}</p>
            <p>Password: <input onChange={passwordHandler}/></p>
            <p>{password}</p>
            <button onClick={login}>Login</button>
        </div>
    );
}

export default Form;