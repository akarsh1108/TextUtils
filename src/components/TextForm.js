import React,{useState} from "react";

 

export default function Form(props) {
    const handleUpClick=()=>{
        //console.log("UpperCase was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!","success");
    }
    const handleLoClick=()=>{
        //console.log("LowerCase was clicked"+text);
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!","success");
    }
    const handleClear=()=>{
        //console.log("UpperCase was clicked"+text);
        let newText='';
        setText(newText)
        props.showAlert("Text Cleared!","success");
    }
    const handleOnChange=(event)=>{
        //console.log("On change");
        setText(event.target.value);
    }

    const handleCopy = ()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!","success");
    }

    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        
        props.showAlert("Extra Spaces removed","success");
    }
 // Declare a new state variable, which we'll call "count"
 const [text, setText] = useState('');
  return (
      <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743' }}>
    <h1>{props.heading}</h1>
      <div className="mb-3">
        
        <textarea
          className="form-control"
          value ={text}
          onChange={handleOnChange}
          style={{backgroundColor: props.mode==='dark'?'grey':'white' , color: props.mode==='dark'?'white':'#042743'}}
          
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-dark mx-2" onClick={handleUpClick}>Covert to Uppercase</button>
      <button className="btn btn-dark mx-2" onClick={handleLoClick}>Covert to Lowercase</button>
      <button className="btn btn-dark mx-2" onClick={handleClear}>Clear Text</button>
      <button className="btn btn-dark mx-2" onClick={handleCopy}>Copy</button>
      <button className="btn btn-dark" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743' }}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} word,{text.length} characters</p>
        <p>{0.008* text.split(" ").length} Average minutes to read the whole</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter someting in text box above to preview it"}</p>
    </div>
    </>
  );
}
