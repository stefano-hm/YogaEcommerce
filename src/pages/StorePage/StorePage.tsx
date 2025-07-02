import styles from './StorePage.module.css'
import ProductCard from '../../components/ProductCard/ProductCard'

const products = [
  {
    title: 'Basic Yoga Package',
    description: 'Gentle workouts for beginners. 3 sessions per week.',
    priceEth: 0.01,
    imageUrl: 'https://via.placeholder.com/300x200?text=Yoga+Base',
  },
  {
    title: 'Intense Yoga Package',
    description: 'Advanced sequences for experienced users. Includes breathing exercises.',
    priceEth: 0.03,
    imageUrl: 'https://via.placeholder.com/300x200?text=Yoga+Intenso',
  },
  {
    title: 'Detox Yoga Package',
    description: 'Regain balance. Focus on twists and relaxation.',
    priceEth: 0.02,
    imageUrl: 'https://via.placeholder.com/300x200?text=Yoga+Detox',
  },
]

const StorePage = () => {
  return (
    <div className={styles.container}>
      <h2>Gianni’s Yoga Packages</h2>
      <div className={styles.grid}>
        {products.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
    </div>
  )
}

export default StorePage


