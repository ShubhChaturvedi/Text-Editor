import React from 'react'
import { useState } from 'react'

export default function TextArea(props) {
    const [text, setText] = useState("")

    const onChange = (event)=>{
        setText(event.target.value);
    }

    const onClickUp = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("The string is mainupulated to upperCase" , "success")
    }

    const onClickLo = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("The string is mainupulated to lowerCase" , "success")
    }

    const onClickClear = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("The string is deleted" , "danger")
    }
    

  return (
    <>
    
<div className="my-3 container">
  <h2>Write your text below for formatting</h2>
  <textarea className="form-control" value={text} onChange={onChange} id="exampleFormControlTextarea1" rows="8"></textarea>
  <button className="btn btn-primary my-3 mx-2" onClick={onClickUp}>Convert to uppercase</button>
  <button className="btn btn-primary my-3 mx-2" onClick={onClickLo}>Convert to lowercase</button>
  <button className="btn btn-primary my-3 mx-2" onClick={onClickClear}>Clear</button>
  
</div>

<div className="container">
    <h2>Your text summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} minutes to read</p>
    <h2>Preview</h2>
    <p>{text.length>0 ? text : "Enter the text in textarea for mainuputaion"}</p>
</div>
    </>
  )
}
