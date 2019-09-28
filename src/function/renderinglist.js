import React from 'react';

function GetTheListItem(props){
    
const listItme= props.numbers.map((number,index)=><li key={index}>{number*2}</li>)
    return <ul>{listItme}</ul>;
}
export default GetTheListItem;
export function NumberList(probs)
{
    return <GetTheListItem numbers={probs.numbers}></GetTheListItem>;
}


function ListItem(probs)
{
return <li>{probs.value}</li>;
}

export function GetListItem(probs)
{

    const listItems = probs.numbers.map((number) =><ListItem key={number.toString()} value={number} />);
    return <ul>{listItems}</ul>;
   
   //const items=probs.numbers.map(text=> <ListItem value={text} key={text.toString()}/>);
   //return items;
}
//export NumberList;