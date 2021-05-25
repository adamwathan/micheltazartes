import Head from 'next/head'
import Nav from '../components/Navbar'
import Landing from '../components/Landing'
import Testimony from '../components/Testimony'
import {testimony} from "../utils/testimony-data";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Michel Tazartes</title>
        <meta name="description" content="Cabinet du Docteur Michel Tazartes Paris" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <Nav />

      <Landing />
      
      <Testimony testimony={testimony}/>


    </div>
  )
}
