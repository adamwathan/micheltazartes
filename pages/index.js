import Head from 'next/head'
import Nav from '../components/Navbar'
import Landing from '../components/Landing'
import Testimony from '../components/Testimony'
import {testimony} from "../utils/testimony-data";
import CustomHead from '../components/CustomHead';

export default function Home() {
  return (
    <div className="">
      <CustomHead title="Accueil Docteur Michel Tazartes" description="Bienvenue au cabinet du docteur Michel Tazartes" />
    
      <Nav />

      <Landing />
      
      <Testimony testimony={testimony}/>


    </div>
  )
}
