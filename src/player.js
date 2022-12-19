import * as React from 'react';
import react,{useState} from 'react'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import {AiOutlineHome} from 'react-icons/ai'
import { Link } from 'react-router-dom'; 

const Player = ({id,getId,players,handlePlayer,batting,info}) => {

  console.log(batting);
  
  return (
    <div>
        <Toolbar />
        <Typography>
        <div className='batting-container'>  
        <div className="search-container"> 
    <input type="text" value={players} onChange={handlePlayer} className="player-input"  placeholder='Enter Full Name Of Player..'/>
       <Button variant='contained' size='small' onClick={getId} className="batting-btn" >Sumbit</Button>
       <Link to="/"><AiOutlineHome className='me'/></Link>
       </div>
       
          {info?<div className='info-container'>
           <div className='p-image'> <img src={info.image} alt="image" /></div>
           <div className='rows'><div className='row-header'>Name:</div>
           <div>{info.name}</div> </div>  

           <div className='rows'><div className='row-header'>Role:</div>
           <div> {info.role}</div></div>

           <div className='rows'>
           <div className='row-header'>Height:</div>
            {info.height?<div> {info.height}</div>:`-`}</div>

            <div className='rows'><div className='row-header'>Place:</div>
            <div> {info.birthPlace}</div></div>

            <div className='rows'><div className='row-header'>Team:</div>
            <div> {info.intlTeam}</div></div>

            <div className='rows'><div className='row-header'>DOB:</div>
            <div> {info.DoB}</div></div>
            <div className='special'>
            <div className="rows">
              <div className='row-header'>Rank:</div>
              <div className='rank-bat'>
              <div className='row-header'>Test</div>
              <div className='row-header'>Odi</div>
            <div className='row-header'>T20</div>
            <div >{((info.rankings.bat)[0]).testRank}</div>
            <div>{((info.rankings.bat)[0]).odiRank}</div>
            <div>{((info.rankings.bat)[0]).t20Rank}</div>
            </div>
            
            </div>
            </div>
            
          </div>:[]}
        
       <TableContainer component={Paper} className="table-container">
      <Table sx={{ minWidth: 350 }} aria-label="simple table">
        <TableHead >
          <TableRow>
            <TableCell >
  {batting? <div className='top-head'>
    {batting.headers.map((items)=>{
        return(
          <>
          <article className='head' >
            {items}
            </article>
          </>
        )
      })}   
      </div>:[]}
</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>




      {batting? <div>
      {batting.values.map((items)=>{
        return(
          <>
          <article className='batting-values'>
            {items.values.map((item)=>{
              return(
                <TableCell>
                <article className='ivalues' >
                  {item}
                </article>
                </TableCell>
              )
            })}
            </article>
          </>
        )
      })} 

  </div>:`` } 
  </TableBody>
      </Table>
    </TableContainer>
   
      
    </div>
    
    
        </Typography>
        
      
      </div>
  )
}

export default Player;
