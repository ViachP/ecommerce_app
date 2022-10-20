import React from 'react'

import { client } from '../lib/client'
import { HeroBanner } from '../components'

const Home = ({ products, bannerData }) => {
  return (
    <>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>

    <div>
      <h2>Best Selling Products</h2>
      <p>Speakers of many variations</p>
    </div>

    <div>
      {products?.map((product) => product.name)}
    </div>

    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {  
    props: { products, bannerData }
  }
}

export default Home