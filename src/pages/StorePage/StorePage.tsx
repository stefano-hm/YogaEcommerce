import { Helmet } from 'react-helmet-async'
import styles from './StorePage.module.css'
import ProductCard from '../../components/ProductCard/ProductCard'
import products, { Product } from '../../data/productsData'

const StorePage = () => {
  return (
    <>
      <Helmet>
        <title>Store | Gianni's Yoga dApp</title>
        <meta name="description" content="Explore and purchase exclusive yoga packages by Gianni. Pay securely with ETH." />
      </Helmet>

      <div className={styles.container}>
        <h2>Gianni’s Yoga Packages</h2>
        <div className={styles.grid}>
          {products.map((product: Product, index: number) => (
            <ProductCard product={product} key={index} />
          ))}
        </div>
      </div>
    </>
  )
}

export default StorePage

