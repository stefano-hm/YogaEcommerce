import { useParams, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useSendTransaction } from 'wagmi'
import { parseEther } from 'viem'
import toast from 'react-hot-toast'
import { useState } from 'react'

import { products } from '../../data/productsData'
import styles from './ProductDetailPage.module.css'

function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const { sendTransactionAsync } = useSendTransaction()

  const product = products.find((p) => p.slug === slug)

  if (!product) {
    return <div style={{ padding: '2rem' }}>Product not found</div>
  }

  const handleBuy = async () => {
    try {
      setIsLoading(true)

      const hash = await sendTransactionAsync({
        to: '0xad944e1a581Da8C183D081Bba9DC74dBC1AAeF1b',
        value: parseEther(product.priceEth.toString()),
      })

      toast.success(
        <span>
          Acquisto riuscito!{' '}
        </span>,
        { duration: 8000 }
      )

      navigate('/success', { state: { product, txHash: hash } })
    } catch (err) {
      toast.error('Errore durante il pagamento.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Helmet>
        <title>{product.title} | Gianni's Yoga dApp</title>
        <meta name="description" content={product.description} />
      </Helmet>

      <main className={styles.page}>
        <div className={styles.card}>
          <img src={product.imageUrl} alt={product.title} className={styles.image} />
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.description}>{product.description}</p>
          <p className={styles.price}>{product.priceEth} ETH</p>
          <button
            className={styles.buyButton}
            onClick={handleBuy}
            disabled={isLoading}
          >
            {isLoading ? 'Acquisto in corso...' : 'Buy now'}
          </button>
        </div>
      </main>
    </>
  )
}

export default ProductDetailPage
