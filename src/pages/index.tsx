import Form from '@/components/Form'
import React from 'react'
import Head from 'next/head'

const Home = () => {
  return (
    <>
    <Head>
      <title>Dados cadastrais</title>
      <meta name="description" content="Ficha de cadastro para contratação" />
    </Head>
    <main>
      <Form />
    </main>
    </>
  )
}

export default Home