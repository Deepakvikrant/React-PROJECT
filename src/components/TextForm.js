import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = ()=>{
    //console.log("HandleUpcase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleLoClick = ()=>{
    //console.log("HandleUpcase was clicked " + text);
    let newText = text.toLowerCase();
    setText(newText)
  }

  const handleOnChange = (event)=>{
    //console.log("HandleOnChange was clicked");
    setText(event.target.value)
  }
  const [text,setText] = useState('')
  //text = "New Text" ; //wrong way to chnage state of hook function
  //setText('new text'); //correct way to chnage state of hook function
  return (
    <>

    <div>
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className='btn btn-primary my-3 mx-2' onClick={handleUpClick}>Convert To Upercase</button>
      <button className='btn btn-primary my-3 mx-2' onClick={handleLoClick}>Convert To Lowercase</button>
    </div>

    <div className='my-3'>
      <h2>Your Text Summery</h2>
      <p>{text.split(" ").length-1} word and {text.length} Character</p>
      <p>{0.008 * text.split(" ").length}  Minutes to Read</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  )
}
