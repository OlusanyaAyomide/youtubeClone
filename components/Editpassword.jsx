import React,{useState,useContext} from 'react'
import AuthContext from '../store/auth-context'


export default function Editpassword() {
  const Authctx = useContext(AuthContext)
    const [formField,setformField] = useState({password:"",password2:""})
    const handleFormChange=(event)=>{setformField((prev=>{
    return{...prev,[event.target.name]:event.target.value}}))}
  return (
    <div className='p-2'>
        <h1 className='text-center my-20 font-bold text-black text-2xl'>Welcome {Authctx.session?Authctx.session.username:"Anonymous User"}</h1>
        <form className='mx-auto w-full mt-10 px-2 md:w-8/12 lg:w-6/12 py-4 bg-[#5f1272] rounded-md'>
        <div>
            <label htmlFor="password" className='form-label'>Old Password</label>
            <input type="password" name="password" id ="password" value={formField.password} onChange={handleFormChange} className='form-input'/>
        </div>
        <div>
            <label htmlFor="password2" className='form-label'>New Password</label>
            <input type="password" name="password2" id ="password2" value={formField.password2} onChange={handleFormChange} className='form-input'/>
        </div>
        </form>
    </div>
  )
}
