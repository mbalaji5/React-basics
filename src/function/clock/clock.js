import React from 'react'


function Clock()
{
    return <Tick date={new Date()}></Tick>  
}

function Tick(props)
{
    return (<h1>Current Time is <strong>{props.date.toLocaleTimeString()}</strong></h1>);
}

export default Clock;