import React from 'react'

interface Ioption{
    value?: string
    plano?:string
    valorPlano?:string
}

const Option = ({value,plano,valorPlano}:Ioption) => {
  return (
    <option className='flex justify-between text-sky-500 w-full' value={value}>
        {plano}
        {valorPlano}
    </option>
  )
}

export default Option