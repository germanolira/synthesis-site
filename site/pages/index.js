import Head from 'next/head'
import Image from 'next/image'
import Header from '../src/components/header/Header'
import Conteudo from '../src/components/conteudo/Conteudo'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Synthesis Dev</title>
        <meta name="description" content="Site Synthesis" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Conteudo />
      </main>

      <footer>
        
      </footer>
    </div>
  )
}
