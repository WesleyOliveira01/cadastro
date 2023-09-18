import React from 'react'
import Logo from './Logo'
const Header = () => {
  return (
    <header className='bg-defaultColor p-4 text-slate-100'>
      <div className="flex justify-center items-center">
        <Logo />
        <h1 className='text-center font-bold text-3xl'>Fiber Banda Larga</h1>
      </div>
    </header>
  )
}

export default Header