import React from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from  './function/landing/landing'
import Clock from './function/clock/clock';
import { Classclock } from './class/clock';
import Buttonclick from './function/event/clickEvent';
import { ButtonClickFromClass } from './class/buttonclick';
import UsingExpression from './function/usingExpression';
import { UsingExpressionInClass } from './class/usingExpressInClass';
import { NumberList, GetListItem } from './function/renderinglist';
import GetTheListItem from './function/renderinglist';
import { ReactForms } from './class/reactForms';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


const element=<h1> Welcome to Balaji TUT</h1>
function Welcome(props){
  return (<Landing name={props.name}></Landing>);
}
function App()
{
  const numbers=[1,2,3,4,5,6]
  return (<div>
    {/* <Classclock></Classclock> <br /> 
    <Buttonclick> </Buttonclick><br></br> 
    <ButtonClickFromClass></ButtonClickFromClass> 
    <div><label>Expression using Function</label></div>
    <UsingExpression name={'Balaji'} isLogedIn={true}></UsingExpression>
    <UsingExpression name={'Siva'} isLogedIn={false}></UsingExpression>

    <div><label>Expression using class</label></div>
    <UsingExpressionInClass name={'Kabi'} isLogedIn={true}></UsingExpressionInClass>
    <UsingExpressionInClass name={'Barani'} isLogedIn={false}></UsingExpressionInClass>

    <div>Rendering Multiple Component</div>
    <ul><GetTheListItem numbers={numbers}></GetTheListItem></ul>

    <NumberList numbers={numbers}></NumberList>

    <div>
      
      <GetListItem  numbers={numbers}> </GetListItem>
    </div> */}

    <div>Welcome to React form control</div>
    <ReactForms></ReactForms>
    
    </div>)
 // return (<div><Welcome name="Balaji"></Welcome><br></br><Welcome name="sathish"></Welcome></div>);
}
export default App;
