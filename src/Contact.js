import React from 'react'
import App from './App.css'
import {AiOutlineHome} from 'react-icons/ai'
import { Link } from 'react-router-dom'
const Contact = () => {
  return (
    <div className="record-containers">
      <div className="record-container2s">
         <h1 className='cont-heading'>Contact Us</h1>
         <input type="text" className='input' placeholder='Your Name Here' />
      <input type="email" className='input' placeholder='Email'/>
      <input type="text" className='input' placeholder='Subject'/>
       <textarea name="text" id="text" cols="30" rows="10" placeholder='Type your Message here' className='textarea'></textarea>
       <div className='btn-div'>
        <div><button className='sub-btn'>Submit</button></div>
      <div><Link to="/"><AiOutlineHome className='home-link' /></Link></div>
      </div>
    </div>
    </div>
  )
}

export default Contact;