// import React from 'react'
import React, {useState} from 'react'

export default function Navform(props) {

const onclickchange = (event)=>{
  event.preventDefault(); 
  let newText = text.toUpperCase();
  setText(newText);
  props.showAlert("success","uppercase mode enabled");
 
 
}
const onclicklochange = (event)=>{
  event.preventDefault(); 
  let newText = text.toLowerCase();
  setText(newText);
  props.showAlert("success","Lowercase mode enabled");

}
const onchange = (event)=>{
  console.log("onchange");
  setText(event.target.value);
 
}
  const [text, setText] = useState("");
const cleartext = ()=>{
setText("");
props.showAlert("success","Clear text mode enabled");
}

const copytext = ()=>{

    navigator.clipboard.writeText(text);

      props.showAlert("success","copy text mode enabled");


 
}

const downloadText = () => {
  const element = document.createElement("a");
  const file = new Blob([text], { type: "text/plain" }); // You can change type if needed
  element.href = URL.createObjectURL(file);
  element.download = "myTextFile.txt"; // Change filename if desired
  document.body.appendChild(element); // Required for Firefox
  element.click();
  document.body.removeChild(element); // Clean up
};

const headingClass = `text-${props.mode === 'dark' ? 'white' : 'dark'}`;

  return (
    <form id="nav-form">
      <h1 className={headingClass}>Enter anything</h1>
    <div className="mb-3">
     <textarea className="form-control" value={text} onChange={onchange} id="mybox" rows="8"></textarea>
    </div>
 
    <div className={`mb-3 form-check ${headingClass}`}>
      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
      <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
    </div>
    <div className='button-section'>
    <button type="submit"  onClick={onclickchange} className="btn btn-success">convert to Uppercase</button>
    <button type="submit"  onClick={onclicklochange} className="btn btn-success">convert to lowercase</button>
   

    <button 
  type="button" 
  className='btn btn-warning mx-2' 
  onClick={downloadText}
>
  Download Text
</button>
<button type='submit' className='btn btn-primary' onClick = {cleartext} >Clear text</button>
 <button type='submit' onClick={copytext} className="btn btn-primary">Copy text</button>
    </div>
    <h4 className={`mx-2 ${headingClass}`}> |  {text.length} characters  | and |  {text.trim() === "" ? 0 : text.trim().split(" ").length} words  | </h4>
    </form>
  )}
  // Navform.propTypes = { title: PropTypes.string, password: PropTypes.string}


