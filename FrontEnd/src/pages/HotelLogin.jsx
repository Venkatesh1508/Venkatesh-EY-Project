import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {useUser} from "../UserContext"

const HotelLogin = () => {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const {login} = useUser()
    const navigate = useNavigate()

    const submitHandler = async (e) => {
        e.preventDefault()

        try{
            const res = await axios.post('http://localhost:5000/hotel-login',{email,password})
            if (res.data && res.data.hotel) {
                login({
                    email:res.data.hotel.email,
                    role:'hotel'
                })
                navigate('/hotel-home')}
        }catch(error){
            alert('Invalid Username or Password')
        }
    }

    return (
        <div className='content-box' style={{padding: '20px', margin: '50px auto', width: '400px', backgroundColor: `rgba(80, 83, 85, 0.8)`,borderRadius: '15px', boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.2)', fontFamily: 'Arial, sans-serif', textAlign: 'center'}}>
            <div style={{backgroundColor: `rgba(50, 62, 49, 0.8)`, padding: '15px 0', borderRadius: '15px 15px 0 0', marginBottom: '20px'}}>
                <h1 style={{ color: 'white', margin: 0 }}>Restaurant Login</h1>
            </div>
            <div style={{padding: '20px', backgroundColor: `rgba(146, 168, 109, 0.9)`, borderRadius: '0 0 15px 15px'}}>
                <form onSubmit={(e) => { submitHandler(e) }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{marginBottom: '15px', width: '100%', display: 'flex', alignItems: 'center', padding: '10px', border: '1px solid #ccc', borderRadius: '8px' }}>
                        <i style={{borderRight: '1px solid #ccc', padding: '8px', fontSize: '18px' }} className="ri-mail-fill"></i>
                        <input style={{ border: 'none', outline: 'none', padding: '8px 10px', fontSize: '16px', flex: 1}} type="email" placeholder='sample@gmail.com' value={email} onChange={(e) => setemail(e.target.value)}/>
                    </div>

                    <div style={{marginBottom: '15px', width: '100%', display: 'flex',alignItems: 'center', padding: '10px',border: '1px solid #ccc', borderRadius: '8px'}}>
                        <i style={{borderRight: '1px solid #ccc', padding: '8px', fontSize: '18px'}} className="ri-lock-fill"></i>
                        <input style={{border: 'none', outline: 'none', padding: '8px 10px', fontSize: '16px', flex: 1}} type="password" placeholder='Password' value={password} onChange={(e) => setpassword(e.target.value)}/>
                    </div>

                    <p style={{marginTop: '10px', fontSize: '14px', color: 'white'}}>
                        New here? <Link to='/hotel-register' style={{ textDecoration: 'none', color: 'black' }}>Register your Restaurant</Link>
                    </p>

                    <button style={{ backgroundColor: '#46a037', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '8px',  cursor: 'pointer', fontSize: '16px', transition: 'background-color 0.3s ease', marginTop: '20px'}} type='submit'>
                        Submit
                    </button>
                </form>

                <div style={{marginTop: '20px', textAlign: 'center'}}>
                    <button style={{backgroundColor: '#f2f2f2', color: 'black', padding: '10px 20px', border: '1px solid #ccc', borderRadius: '8px', cursor: 'pointer', fontSize: '16px'}}>
                        <Link to='/user-login' style={{ textDecoration: 'none', color: 'black' }}>
                            Signin
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HotelLogin
