export interface Product {
  title: string
  description: string
  priceEth: number
  imageUrl: string
}

const products: Product[] = [
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

export default products
