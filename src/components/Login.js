import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
      <Header/>
      <div className='absolute '>
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_large.jpg'alt='bgimage'></img> 
      </div>

      <form className='absolute w-3/12 p-12 bg-black mx-auto my-36 right-0 left-0 text-white rounded-lg bg-opacity-80'>
      <h1 className='font-bold text-3xl p-3'>Sign In</h1>
        <input type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-600 '></input>
        <input type='password' placeholder='Password' className='p-4 my-4  w-full bg-gray-600'></input>
        <button className='p-4 my-6 bg-red-700  w-full rounded-lg'>Sign In</button>
      </form>
      </div>
  )
}

export default Login
