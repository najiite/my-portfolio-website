import Head from 'next/head'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'

export default function Home() {
  return (
    <>
      <Head>
        <title>Okeh Onajite</title>
        <meta name="description" content="Hello, I'm Najiite, and I'm a web developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-[#000106]'>
        <Hero />
        <Navbar />
        <Skills />
        <Projects />
      </div>
    </>
  )
}
