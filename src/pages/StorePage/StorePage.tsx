import { useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import styles from './StorePage.module.css'
import products from '../../data/productsData'
import StoreIntro from '../../components/StorePageComponents/StoreIntro/StoreIntro'
import ProductGrid from '../../components/StorePageComponents/ProductGrid/ProductGrid'
import StoreCTA from '../../components/StorePageComponents/StoreCTA/StoreCTA'

const StorePage = () => {
  const firstProductRef = useRef<HTMLDivElement>(null)

  function handleScrollToProduct() {
    firstProductRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Helmet>
        <title>Store | Serenity Yoga</title>
        <meta
          name="description"
          content="Explore and purchase exclusive yoga packages by Gianni. Pay securely with ETH."
        />
      </Helmet>

      <div className={styles.container}>
        <StoreIntro />
      </div>
      <div className={styles.container}>
        <h2>Store</h2>
        <ProductGrid products={products} firstProductRef={firstProductRef} />
      </div>
      <div className={styles.container}>
        <StoreCTA onScrollToProduct={handleScrollToProduct} />
      </div>
    </>
  )
}

export default StorePage
