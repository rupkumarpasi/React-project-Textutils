import React from 'react'
import { Link } from 'react-router'


export default function Navbar(props) {
  const headingClass = `text-${props.mode === 'dark' ? 'white' : 'dark'}`;
  return (
    <nav className="navbar bg-body-tertiary">
    <div className={`container-fluid bg-${props.mode}`} >
      <div className="nav-section">
        <Link to="/" className={`nav-link ${headingClass}`} >{props.home}</Link>
        <Link to="/about" className={`nav-link ${headingClass}`}>{props.about}</Link>
        <Link to="/contact" className={`nav-link ${headingClass}`}>{props.contact}</Link>
           </div>
      <form className="d-flex" >
        <div className={`form-check form-switch mx-4 my-2 text-${props.mode === 'light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" onClick={props.toggleMode}/>
  <label className="form-check-label" htmlFor="switchCheckDefault" style={{fontSize:'3vmin'}}>Change Mode</label>
</div>
      </form>
    </div>
  </nav>
  )
}
