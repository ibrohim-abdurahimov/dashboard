import React, { useState } from 'react'
import { useStore } from '../../zustand'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import './Log.css'

const Log = () => {
  const login = useStore(state => state.login)
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const handleLogin = (e) => {
    e.preventDefault()
    setLoading(true)
    const formData = new FormData(e.target)
    const user = Object.fromEntries(formData)
    axios
      .post("https://dummyjson.com/auth/login", user)
      .then((res) => {
        console.log(res)
        toast.success("Welcom")
        login(res.data.accessToken)
        navigate('/dashboard')
      })
      .catch(err => {
        toast.error("Username or Password is incorrect")
      })
      .finally(() => setLoading(false))
  }
  return (
    <div className='body grid grid-cols-2 h-screen'>
      <div className='bg-login bg-no-repeat bg-center bg-cover text-white flex flex-col items-center justify-center gap-4'>
        <p className='text-xl  leading-5 tracking-wide	'>INSPIRED BY THE FUTURE:</p>
        <h2 className='title'>THE VISION UI DASHBOARD</h2>
      </div>
      <div className='flex flex-col justify-center p-[55px]'>
        <h2 className='text-center text-3xl font-bold'>Welcome!</h2>
        <p className='mt-3 text-center leading-6	'>
          Use these awesome forms to login or create new account in your project for free.
        </p>
        <form className='form mt-[55px] py-11 pl-12 pr-14 border' onSubmit={handleLogin} action="">
          <p>Username: emilys</p>
          <input required type="text" name='username' placeholder='Your username'/>
          <p className='mt-6'>Password: emilyspass</p>
          <input required type="text" name='password' placeholder='Your password'/>
          <button disabled={loading}>{loading ? "Loading..." : "Log in"}</button>
        </form>
        <Toaster position='top-right' reverseOrder={false} />
      </div>
    </div>
  )
}

export default Log