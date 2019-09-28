import React from 'react';
import { tsPropertySignature } from '@babel/types';

function UsingExpression(props)
{
    return (

        <div>
            
            Hi <strong>{props.name}!</strong> are in {props.isLogedIn? 'Home':'Login'} page ! good to see you:) <br />
            {!props.isLogedIn && <label> You  have to login</label>}
            {props.isLogedIn && <label> You are successfully loged in</label>}
            
        </div>
    )
}

export default UsingExpression;