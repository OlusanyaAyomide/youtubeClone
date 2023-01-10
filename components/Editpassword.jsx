import React,{useState,useContext} from 'react'

export default function Editpassword({session}) {
  console.log(session)
    const [formField,setformField] = useState({password:"",password2:""})
    const handleFormChange=(event)=>{setformField((prev=>{
    return{...prev,[event.target.name]:event.target.value}}))}
    const handleProcess = async (event)=>{
      event.preventDefault()
        const res = await fetch()
    }
  return (
    <div className='p-2'>
        <h1 className='text-center my-20 font-bold text-black text-2xl'>Welcome {session?session.user.email.username:"Anonymous User"}</h1>
        <form className='mx-auto w-full mt-10 px-2 md:w-8/12 lg:w-6/12 py-4 bg-[#5f1272] rounded-md'>
        <div>
            <label htmlFor="password" className='form-label'>Old Password</label>
            <input type="password" name="password" id ="password" value={formField.password} onChange={handleFormChange} className='form-input'/>
        </div>
        <div>
            <label htmlFor="password2" className='form-label'>New Password</label>
            <input type="password" name="password2" id ="password2" value={formField.password2} onChange={handleFormChange} className='form-input'/>
        </div>
        <button className='bg-[#da12ec] font-semibold px-4 py-1 rounded-sm md:text-[#f0e2f0] block mx-auto mt-4 mb-2' onClick={handleProcess}>Submit</button> 
        </form>
    </div>
  )
}
