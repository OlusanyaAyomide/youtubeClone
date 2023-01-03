import React,{useState} from 'react'
import {signIn} from "next-auth/react"

export default function () {
    const [formField,setformField] = useState({email:"",name:"",password:"",password2:""})
    const [islogin,setislogin] = useState(true)

    const handleChange=(event)=>{event.preventDefault()
        setislogin((prev=>!prev))}
    const handleFormChange=(event)=>{setformField((prev=>{
        return{...prev,[event.target.name]:event.target.value}}))}
    const handleProcess = async (event)=>{
        event.preventDefault()
        if (islogin){
            const response = await signIn("credentials",{redirect:false,
                email:formField.email,password:formField.password})
            console.log(response)
        }
        else{
            const res = await fetch("/api/auth/signup",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({email:formField.email,passwords:formField.password,username:formField.name})
            })
            const status = res.status
            const data = await res.json()
            console.log(data,status)
        }
  
    }
  return (
    <div className='p-2 flex h-[80vh] items-center'>
        <form className='mx-auto w-full px-2 md:w-8/12 lg:w-6/12 py-4 bg-[#5f1272] rounded-md'>
            <h1 className="text-center font-bold text-xl text-white pb-2">{islogin?"Login":"Sign Up"}</h1>
            <div>
                <label htmlFor="email" className='form-label'>Your Email</label>
                <input type="email" name="email" id ="email" value={formField.email} onChange={handleFormChange} className='form-input'/>
            </div>
            {!islogin && <div>
                <label htmlFor="username" className='form-label'>Username</label>
                <input type="text" value={formField.name} onChange={handleFormChange} id ="username" name="name" className='form-input'/>
            </div>  }  
            <div>
                <label htmlFor="password1" className='form-label'>Password</label>
                <input type="password" name ="password" value={formField.password} onChange={handleFormChange} id ="password1" className='form-input'/>
            </div>    
            {!islogin && <div>
                <label htmlFor="password2" className='form-label'>Confirm Password</label>
                <input type="password" name ="password2" value={formField.password2} onChange={handleFormChange} id ="password2" className='form-input'/>
            </div> }
            <button className='bg-[#da12ec] font-semibold px-4 py-1 rounded-sm md:text-[#f0e2f0] block mx-auto mt-4 mb-2' onClick={handleProcess}>{islogin?"Log In":"Create Account"}</button>  
            <button className='text-[#f0e2f0] block mx-auto' onClick={handleChange}>{!islogin?"Login With Existing Account":"Sign Up"}</button> 
        </form>
    </div>
  )
}
