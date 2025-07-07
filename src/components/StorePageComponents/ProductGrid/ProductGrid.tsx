import styles from './ProductGrid.module.css'
import ProductCard from '../ProductCard/ProductCard'
import { Product } from '../../../data/productsData'

type ProductGridProps = {
  products: Product[]
}

function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className={styles.grid}>
      {products.map((product, index) => (
        <ProductCard product={product} key={index} />
      ))}
    </div>
  )
}

export default ProductGrid
