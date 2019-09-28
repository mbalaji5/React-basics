import React from 'react';
import './landing.css';

function Landing(props){
    return (
        <div className='container'>
            <div className='header'>
                <h1>Welcome to React TUT</h1>
            </div>
            <div  className='inner-container'>
                <span>Good Morning {props.name}</span>
                <br/>
                <span>In this section will talk about the Components in angular </span>
            </div>
            <div className="footer">
                <strong>Thanks for visiting my site</strong>
            </div>
        </div>
    )
}
export default Landing;
