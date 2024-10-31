import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setCredentials } from '../redux/slices/productSlice';

const Login = () => {
    
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    console.log("login component rendered")
    const handleCredentials=(e)=>{
        e.preventDefault()
        alert('loggined succesfully!')
        if(!email||!name){
            console.log('please enter the both email,name')
            return
        }
        dispatch(setCredentials({name,email}));
        navigate('/home');
    }
  return (
    <div className='container w-100  vh-100 d-flex justify-content-center align-items-center'>
        <form onSubmit={handleCredentials} className='w-50 '>
            {/* Email input */}
            <p className='text-secondary text-center'><span className='fw-semibold'>Note :</span> give any credentials no problem</p>
            <div  className="form-outline mb-4">
                <input type="text" id="form2Example" className="form-control" onChange={(e)=>setName(e.target.value)} />
                <label className="form-label" htmlFor="form2Example">
                Name
                </label>
            </div>
            <div  className="form-outline mb-4">
                <input type="email" id="form2Example1" className="form-control" onChange={(e)=>setEmail(e.target.value)}/>
                <label className="form-label" htmlFor="form2Example1">
                Email address
                </label>
            </div>
            {/* Password input */}
            <div className="form-outline mb-4">
                <input type="password" id="form2Example2" className="form-control" />
                <label className="form-label" htmlFor="form2Example2">
                Password
                </label>
            </div>
            {/* 2 column grid layout for inline styling */}
            {/* Submit button */}
           <button
                type="submit"

                className="btn btn-primary btn-block mb-4"
            >
                signin
            </button>
            {/* Register buttons */}
        </form>

    </div>
  )
}

export default Login;