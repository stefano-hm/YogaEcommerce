import styles from './StorePage.module.css'
import ProductCard from '../../components/ProductCard/ProductCard'
import products, { Product } from '../../data/productsData'

const StorePage = () => {
  return (
    <div className={styles.container}>
      <h2>Gianni’s Yoga Packages</h2>
      <div className={styles.grid}>
        {products.map((product: Product, index: number) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
    </div>
  )
}

export default StorePage
