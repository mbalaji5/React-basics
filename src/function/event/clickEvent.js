import React from 'react';
function Buttonclick(){
function handleClickEvent(){
alert("Hey I am from function event");
}

    return (<button onClick={handleClickEvent}> Click Me</button>)
}

export default Buttonclick;