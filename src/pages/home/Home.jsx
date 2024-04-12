import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'
import HeroSection from '../../components/heroSection/HeroSection'
import Growth from '../../components/growth/Growth'
import FAQ from '../../components/FAQ/FAQ'

function Home() {
  return (
    <Layout>
      <HeroSection/>
      <Growth/>
      <FAQ/>
    </Layout>
  )
}

export default Home