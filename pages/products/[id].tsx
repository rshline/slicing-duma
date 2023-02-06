import type { NextPage } from 'next'
import { setConfig } from 'next/config'
import Head from 'next/head'
import FloatingIcon from '../../components/FloatingIcon'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Photo from '../../components/ProductDetail/Photo'
import ProductInfo from '../../components/ProductDetail/ProductInfo'
import RecentlyViewed from '../../components/ProductDetail/RecentlyViewed'
import SimilarItem from '../../components/ProductDetail/SimilarItem'
import { products } from '../../DummyData'

const Products: NextPage<IProduct> = ({product}: IProduct) => {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Head>
        <title>{product.name} - Duma Official</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar isHome={false} />
      <FloatingIcon />
      <div className='grid grid-cols-1 lg:grid-cols-2 mt-10 pt-10'>
        <Photo img={product.img} />
        <ProductInfo product={product} />        
      </div>

      <SimilarItem />
      <RecentlyViewed />
      <Footer />
    </div>
  )
}

export default Products

export const getStaticProps =async ({params}: any) => {
    const getProduct = products.filter(p => p.id.toString() === params.id)
    return {
        props: {
            product: getProduct[0]
        }
    }
}

export const getStaticPaths =async () => {
    const paths = products.map(product => ({
        params: {id: product.id.toString()}
    }))
    return { paths, fallback: false}
}
