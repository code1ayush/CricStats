import react,{useState} from 'react';
import App from './App.css'
import homee from './homee.css'
import {Link}  from 'react-router-dom'
import Button from "@mui/material/Button"
import {CgProfile}  from  "react-icons/cg";
import {FiPhoneCall} from "react-icons/fi"
import {BsLayoutTextSidebarReverse,BsBarChartLine}  from  "react-icons/bs";
const Home = ({submit2,submitrank,liveScore}) => {

  return (
    <>
    <main>
      <div className="container">
       <div className='grid-container'>
         <div className="grid-item">
         <h1 className='main-heading'>CricStats</h1>
         <div className='under'></div>
           <div className="stats">
    <Link to="/Profile" className='profile'><Button varient="text" onClick={liveScore} className='btn'><CgProfile style={{marginRight:"1.3rem"}}/> Matches </Button></Link>
       <Link to="/Player" className='profile'><Button varient="text"  className='btn'><CgProfile style={{marginRight:"1.3rem"}}/> Players </Button></Link>
   <Link to="/Record" className='record'><Button variant='text' onClick={submit2} className='btn'><BsLayoutTextSidebarReverse style={{marginRight:"1rem"}}/>Records</Button></Link>
   <Link to="/Ranking" className='ranking'><Button variant='text' onClick={submitrank} className='btn'> <BsBarChartLine style={{marginRight:"1rem"}}/>Rankings</Button></Link>
   <Link to="/Contact" className='ranking'><Button variant='text' className='btn'><FiPhoneCall style={{marginRight:"1rem"}}/>Contact</Button></Link>

  
   </div>
          </div>
        <div className="grid-item">
          <img className='home-image' src="https://images.unsplash.com/photo-1629285483773-6b5cde2171d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNyaWNrZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="home-img" />
        </div>
       </div>
       </div>
    </main>
    </>
  )
}

export default Home