import React from 'react';

function Loop(props) {
    let programming_languages = ["Java",
    "Python", "C#", "ASP.Net", "Go"]

    return (
        <div>
            {
                programming_languages.map(
                name=>{
                    return <p key={name}>{name}</p>
                }
            ) 
            }
        </div>
    );
}

export default Loop;