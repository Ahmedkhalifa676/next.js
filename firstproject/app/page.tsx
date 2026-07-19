import React from 'react'

export default function page() {
  return (
    <div className='bg-white w-full h-dvh'>
      <header className='w-full flex gap-3 items-center justify-center p-3'>
      <a href=''><button className='btn btn-primary w-[8rem]'>Home</button></a>
      <a href='/about'><button className='btn btn-primary w-[8rem]'>About</button></a>
      <a href='/products'><button className='btn btn-primary w-[8rem]'>Products</button></a>
      <a href='/settings'><button className='btn btn-primary w-[8rem]'>Settings</button></a>
      <a href='/profile'><button className='btn btn-primary w-[8rem]'>Profile</button></a>
      </header>
    </div>
  )
}
