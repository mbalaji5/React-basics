import React from 'react';
export class UsingExpressionInClass extends React.Component{
 

 FindtheUserState()
{
    
        return (<div>Hi <strong>{this.props.name}!</strong> are in {this.props.isLogedIn? 'Home':'Login'} page ! good to see you:) <br />
         {!this.props.isLogedIn && <label> You  have to login</label>}
            {this.props.isLogedIn && <label> You are successfully loged in</label>}
            </div>)
    
}
render()
{   
 return this.FindtheUserState();   
}
}
