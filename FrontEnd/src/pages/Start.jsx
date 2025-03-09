import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div style={{textAlign:'center', overflow:'hidden',padding:'5px',borderRadius:'10px',margin:'auto'}}>
        <img style={{width:'350px', height:'350px',borderRadius:'25px'}} src="Picture.jpg" alt="" />
        
        <div className='mt-5'>
            
            <Link to='/user-login' style={{textDecoration:'none',border:'none', fontSize:"25px"}}>Get Started</Link>
        </div>
    </div>
  )
}

export default Start