import styles from './ProductGrid.module.css'
import ProductCard from '../ProductCard/ProductCard'
import { Product } from '../../../data/productsData'
import { RefObject } from 'react'

type ProductGridProps = {
  products: Product[]
  firstProductRef?: RefObject<HTMLDivElement>
}

function ProductGrid({ products, firstProductRef }: ProductGridProps) {
  return (
    <div className={styles.grid}>
      {products.map((product, index) => (
        <div key={product.slug} ref={index === 0 ? firstProductRef : undefined}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  )
}

export default ProductGrid

