import React, {useState} from 'react';

export default function TextForm(props) {
    const [text,setText] = useState("");

    const handleOnChange = (event)=> {
        setText(event.target.value);
    }

    const handleUpClick = ()=> {
      let newText = text.toUpperCase();
      setText(newText);
      console.log("Upper case button clicked !!!");
  } 
  const handleLoClick = ()=> {
    let newText = text.toLowerCase();
    setText(newText);
    console.log("Lower case button clicked !!!");
  }
  const handleClearClick = ()=> {
    let newText = " ";
    setText(newText);
    console.log("Lower case button clicked !!!");
  }
  const handleTitleCaseClick = ()=> {
    let str = "";
    let array = text.split(" ");
    for (let index = 0; index < array.length; index++) {
      let word = array[index];
      let character = word.charAt(0);
      let changed = character.toUpperCase();
      let element = changed + word.substring(1,word.length);
      str += element + " ";
    }
    let newText = str;
    setText(newText);
    console.log("Lower case button clicked !!!");
  }
  

  const handleSentenceCaseClick = ()=> {
    let str = "";
    let array = text.split(".");
    
    for (let index = 0; index < array.length; index++) {
      let sentence = array[index];
      let character = sentence.charAt(0);
      console.log("character "+character);
      let changed = character.toUpperCase();
      let element = changed + sentence.substring(1,sentence.length);
      //console.log(element);
      str += element + ".";
      console.log(str);
    }
    let newText = str;
    setText(newText);
    console.log("Sentence Case button clicked !!!");
  }
  return (
    <>
    <div className='container' style = {{color : props.mode === 'dark'? 'white' : 'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                
                <textarea rows = "8" value={text} style = {{backgroundColor : props.mode === 'dark'? 'silver' : 'white' , 
                          color : props.mode === 'dark'? 'white' : 'black' }} 
                          className="form-control" id="myBox" onChange={handleOnChange}/>
            </div>
            <button type="submit" onClick={handleUpClick} className="btn btn-primary mx-3">Convert to Uppercase</button>
            <button type="submit" onClick={handleLoClick} className="btn btn-primary mx-3">Convert to Lowercase</button>
            <button type="submit" onClick={handleClearClick} className="btn btn-primary mx-3">Clear Text</button>
            <button type="submit" onClick={handleTitleCaseClick} className="btn btn-primary mx-3">Title Case</button>
            <button type="submit" onClick={handleSentenceCaseClick} className="btn btn-primary mx-3">Sentence Case</button>

    </div>
    <div className='container my-3'  style = {{color : props.mode === 'dark'? 'white' : 'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{text.split(" ").length * 0.008} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length >0 ? text : "Enter some text into the above text box to preview it here"}</p>
    </div>
    </>
  )
}
