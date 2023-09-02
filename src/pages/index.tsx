import Form from '@/components/Form'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title:"Cadastro"
}

const Home = () => {
  return (
    <main>
      <Form />
    </main>
  )
}

export default Home