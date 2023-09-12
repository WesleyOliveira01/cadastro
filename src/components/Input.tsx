import React, { InputHTMLAttributes } from 'react'

interface Iinput extends InputHTMLAttributes<HTMLInputElement>{
    titulo:string,
    name:string,
    w?:string
}

const Input = ({titulo,name, w ="w-full", ...rest}:Iinput) => {
  return (
    <div className={`${w}`}>
        <label className='block font-semibold text-sky-500 my-2' htmlFor={name}>{titulo}</label>
        <input className='rounded-md outline-none bg-slate-200 p-3 placeholder:text-slate-400 w-full' {...rest} id={name} name={name} /> 
    </div>
  )
}

export default Input