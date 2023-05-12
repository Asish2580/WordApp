import React, { useState } from 'react'

export default function TextForm(props) {
  
    const handleUpClick = () =>{
        console.log("Upper case was clicked");
        let newText =text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = () =>{
      let newText =text.toLowerCase();
      setText(newText);
  }
  const clearText = () =>{
    let newText="";
    setText(newText);
}
    const handleOnchange = (event) =>{
        setText(event.target.value);
    }
    const [text,setText]=useState("");
  return (
    <>
    <div className="container">
      
<div className="mb-3" style={{color:props.mode==='light'?'#02112c':'white'}} >
    <h1> {props.heading }</h1>
  <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor:props.mode==='light'?'white':'gray', color:props.mode==='light'?'#02112c':'white'}} id="exampleFormControlTextarea1" rows="8" >
    
  </textarea>
</div>
    <button className='btn btn-primary mx-1' onClick={handleUpClick}>convert to uppercase</button>
    <button className='btn btn-primary mx-1 my-1' onClick={handleLowClick}>convert to lowercase</button>
    <button className='btn btn-primary mx-1 my-1' onClick={clearText}>clear</button>
    </div>
    <div className="container" style={{color:props.mode==='light'?'#02112c':'white'}}>
      <p>{text.split(" ").length-1} word and { text.length} character</p>
      <h2>Preview</h2>
      <p>{text.length > 0?text:"Enter Text to preview"}</p>
    </div>
    </>
  )
}
