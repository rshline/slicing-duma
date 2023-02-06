import type { NextPage } from 'next'
import Head from 'next/head'
import FloatingIcon from '../components/FloatingIcon'
import Footer from '../components/Footer'
import CategoryBanner from '../components/HomePage/CategoryBanner'
import DoubleBanner from '../components/HomePage/DoubleBanner'
import InstagramPost from '../components/HomePage/InstagramPost'
import MainBanner from '../components/HomePage/MainBanner'
import PaydayBanner from '../components/HomePage/PaydayBanner'
import ProductPicks from '../components/HomePage/ProductPicks'
import Services from '../components/HomePage/Services'
import Navbar from '../components/Navbar'


const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Head>
        <title>Duma Official - Duma Official</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PaydayBanner />
      <FloatingIcon />
      <Navbar isHome={true} />
      <MainBanner />
      <CategoryBanner />
      <DoubleBanner />
      <ProductPicks />
      <Services />
      <InstagramPost />
      <Footer />
    </div>
  )
}

export default Home
