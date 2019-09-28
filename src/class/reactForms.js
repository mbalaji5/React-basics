import React from 'react';

export class ReactForms extends React.Component{
    constructor(props){
super(props);
this.state={name:'',textareaValue:'Welcome to my react form control section'};
this.handleOnchange=this.handleOnchange.bind(this);
this.Onsubmit=this.Onsubmit.bind(this);
    }
    Onsubmit(){
        alert("i am from submit" +this.state.name);
    }
    handleOnchange(event){
        this.setState({name:event.target.value});
        event.preventDefault();
    }
    render(){
        return (
        <form onSubmit={this.Onsubmit}>
            <label>Enter your name </label>
            <input type="text" value={this.state.name} onChange={this.handleOnchange} name="userName"></input>            
            <textarea value={this.state.textareaValue}></textarea>
        </form>)
    }
}