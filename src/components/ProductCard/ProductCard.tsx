import styles from './ProductCard.module.css'

type Product = {
  title: string
  description: string
  priceEth: number
  imageUrl: string
}

type Props = {
  product: Product
}

const ProductCard = ({ product }: Props) => {
  return (
    <div className={styles.card}>
      <img src={product.imageUrl} alt={product.title} className={styles.image} />
      <h3 className={styles.title}>{product.title}</h3>
      <p className={styles.description}>{product.description}</p>
      <p className={styles.price}>{product.priceEth} ETH</p>
      <button className={styles.buyButton}>Buy</button>
    </div>
  )
}

export default ProductCard
