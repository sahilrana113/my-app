import React,{useState} from 'react'

export default function Testform(props) {
    const toUpper=()=>{
        //console.log("Uppercase was clicked"+text);
        // setText("done");
        let newtext= text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to Uppercase", "success");
    }

    const handleonclick=(event)=>{
setText(event.target.value);
    }

    const tolower=()=>{
        let newtext=text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to Lowercase", "success");
    }
    const [text, setText] = useState('');
    //setText("enter here");


  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
<div className="mb-3">
  <label for="myBox" className="form-label"></label>
  <textarea className="form-control" value={text} onChange={handleonclick} 
  style={{backgroundColor: props.mode==='dark'?'grey' : 'white', color:props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}}  id="myBox" rows="8"  ></textarea>
</div>


<button className="my-primary-button" onClick={toUpper}> Convert </button>
<button className="my-primary-button" onClick={tolower}> Convert </button>
    </div>


<div className="container"  style={{color: props.mode==='dark'?'white':'black'}}>
<h1>
    Your text summary
</h1>

Your text has {text.split(" ").length} words and {text.length} characters

<h1>
    Preview
</h1>
{text}

</div>
    </>
  )
}
