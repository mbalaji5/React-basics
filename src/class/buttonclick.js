import React from 'react';

export class ButtonClickFromClass extends React.Component{
    constructor(props){
        super(props);
    this.handleClickEvent =this.handleClickEvent.bind();
    }
    handleClickEvent()
    {
        alert("Hey ! i am event from class");
    }
    render(){
        return (<button onClick={this.handleClickEvent}>I am from class Event</button>)
    }
}