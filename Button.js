import React, {useState} from 'react';
import './Button.css';

const Button = props => {
  
  const[valid,isText]=useState(true)
  const [value,isValue]=useState(props.value)
  
  const enteredtexthandler=()=>
  { 
    if(props.value.length===0)
    {
      isText(false);
    }
  }
  if(props.value!==value)
  {
    isText(true);
    isValue(props.value);
    return;
  }

 
return (
    <button type={props.type} className={`button ${!valid ? 'blur':''}`} onClick={enteredtexthandler}>
      {props.children}
    </button>
  );
};

export default Button;
