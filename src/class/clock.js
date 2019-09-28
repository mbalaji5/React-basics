import React from 'react';

export class Classclock extends React.Component{
    constructor(props){
        super(props);        
        this.state = {date: new Date()};
    }
    componentDidMount(){
this.timerID=setInterval(() => {
    this.tick();
}, 1000);
    }
    tick()
    {
        this.setState({date:new Date()});
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    render(){
        return(<div><h1>
            Welcome Balaji and currently your are in {this.state.date.toLocaleTimeString()}</h1></div>)
    }
}