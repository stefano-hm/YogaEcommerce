import { useSendTransaction } from 'wagmi'
import { parseEther } from 'viem'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
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
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  const { sendTransactionAsync } = useSendTransaction()

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
          <a
            href={`https://etherscan.io/tx/${hash}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'underline', color: '#60a5fa' }}
          >
            Vedi su Etherscan
          </a>
        </span>,
        { duration: 8000 }
      )

      navigate('/success')
    } catch (err) {
      toast.error('Errore durante il pagamento.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div 
    className={styles.card}
    id={product.title.toLowerCase().includes('basic') ? 'basic' : undefined}
    >
      <img src={product.imageUrl} alt={product.title} className={styles.image} />
      <h3 className={styles.title}>{product.title}</h3>
      <p className={styles.description}>{product.description}</p>
      <p className={styles.price}>{product.priceEth} ETH</p>
      <button onClick={handleBuy} className={styles.buyButton} disabled={isLoading}>
        {isLoading ? 'Acquisto in corso...' : 'Buy'}
      </button>
    </div>
  )
}

export default ProductCard
