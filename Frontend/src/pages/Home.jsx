import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className=' bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1564694202205-d83ff046f096?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRyYWZmaWMlMjBsaWdodHN8ZW58MHx8MHx8fDA%3D)] h-screen pt-5 flex justify-between flex-col w-full'>
        <img className='w-16 ml-8 c-white' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <div className='bg-white py-4 px-4'>
            <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
            <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home