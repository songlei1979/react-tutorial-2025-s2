import React, {useState} from 'react';

function InputBox(props) {
    const [conversation, setConversation] = useState("Init")

    function changeConversation(e){
        setConversation(e.target.value);
    }

    return (
        <div>
            <h1>Conversation</h1>
            <p>{conversation}</p>
            <input value={conversation}
                   onChange={changeConversation}/>
        </div>
    );
}

export default InputBox;