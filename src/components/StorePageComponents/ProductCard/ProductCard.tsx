import { Link } from 'react-router-dom'
import styles from './ProductCard.module.css'

type Product = {
  title: string
  description: string
  priceEth: number
  imageUrl: string
  slug: string
}

type Props = {
  product: Product
}

const ProductCard = ({ product }: Props) => {
  return (
    <div
      className={styles.card}
      id={product.title.toLowerCase().includes('basic') ? 'basic' : undefined}
    >
      <img src={product.imageUrl} alt={product.title} className={styles.image} />
      <h3 className={styles.title}>{product.title}</h3>
      <p className={styles.description}>{product.description}</p>
      <p className={styles.price}>{product.priceEth} ETH</p>
      <Link to={`/store/${product.slug}`} className={styles.buyButton}>
        View Details
      </Link>
    </div>
  )
}

export default ProductCard
