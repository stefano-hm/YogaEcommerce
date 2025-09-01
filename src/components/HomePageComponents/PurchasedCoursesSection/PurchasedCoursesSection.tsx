import { useEffect, useState } from 'react'
import { getPurchases } from '../../../api'
import { products } from '../../../data/productsData'
import styles from './PurchasedCoursesSection.module.css'

interface PurchasedCoursesSectionProps {
  walletAddress: string
}

const PurchasedCoursesSection = ({ walletAddress }: PurchasedCoursesSectionProps) => {
  const [purchased, setPurchased] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!walletAddress) return

    setLoading(true)
    setError(null)

    getPurchases(walletAddress)
      .then((data) => {
        const slugs = data.map((item: any) => (typeof item === 'string' ? item : item.slug))
        setPurchased(slugs)
      })
      .catch((err) => {
        console.error('[PurchasedCoursesSection] Error retrieving purchases:', err)
        setError('Unable to load purchases')
      })
      .finally(() => setLoading(false))
  }, [walletAddress])

  const purchasedProducts = products.filter((product) => purchased.includes(product.slug))

  if (loading) return <p>Loading purchases...</p>
  if (error) return <p>{error}</p>
  if (purchasedProducts.length === 0) return null

  return (
    <section className={styles.purchasedSection}>
      <h2>Your courses</h2>
      <div className={styles.grid}>
        {purchasedProducts.map((product) => (
          <div key={product.slug} className={styles.card}>
            <img src={product.imageUrl} alt={product.title} />
            <h3>{product.title}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PurchasedCoursesSection
