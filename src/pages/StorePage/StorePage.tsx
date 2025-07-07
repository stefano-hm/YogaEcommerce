import { Helmet } from 'react-helmet-async'
import styles from './StorePage.module.css'
import products from '../../data/productsData'
import StoreIntro from '../../components/StorePageComponents/StoreIntro/StoreIntro'
import ProductGrid from '../../components/StorePageComponents/ProductGrid/ProductGrid'
import StoreCTA from '../../components/StorePageComponents/StoreCTA/StoreCTA'

const StorePage = () => {
  return (
    <>
      <Helmet>
        <title>Store | Gianni's Yoga dApp</title>
        <meta name="description" content="Explore and purchase exclusive yoga packages by Gianni. Pay securely with ETH." />
      </Helmet>

      <div className={styles.container}>
        <StoreIntro />
      </div>
      <div className={styles.container}>
        <h2>Gianni’s Yoga Packages</h2>
        <ProductGrid products={products} />
      </div>
      <div className={styles.container}>
        <StoreCTA />
      </div>
      
    </>
  )
}

export default StorePage
