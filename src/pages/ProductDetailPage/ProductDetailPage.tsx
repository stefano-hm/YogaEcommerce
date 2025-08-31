import { useParams, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

import { useSendTransaction, useAccount } from 'wagmi'
import { parseEther } from 'viem'
import toast from 'react-hot-toast'
import { useState } from 'react'

import { products } from '../../data/productsData'
import BackToStoreLink from '../../components/ProductDetailPageComponents/BackToStoreLink/BackToStoreLink'
import ProductHeader from '../../components/ProductDetailPageComponents/ProductHeader/ProductHeader'
import ProductDescription from '../../components/ProductDetailPageComponents/ProductDescription/ProductDescription'
import BuyButton from '../../components/ProductDetailPageComponents/BuyButton/BuyButton'
import { savePurchase } from '../../api'
import styles from './ProductDetailPage.module.css'

const ProductDetailPage = () => {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const { sendTransactionAsync } = useSendTransaction()
  const { isConnected, address } = useAccount() 

  const product = products.find((p) => p.slug === slug)
  if (!product) return <div style={{ padding: '2rem' }}>Product not found</div>

  const handleBuy = async () => {
    if (!isConnected || !address) return

    try {
      setIsLoading(true)

      const hash = await sendTransactionAsync({
        to: '0xad944e1a581Da8C183D081Bba9DC74dBC1AAeF1b',
        value: parseEther(product.priceEth.toString()),
      })

      toast.success('Purchase successful!', { duration: 8000 })

      await savePurchase(address, product.slug)

      navigate('/success', { state: { product, txHash: hash } })
    } catch (err: any) {
      const msg = err?.shortMessage || err?.message || ''

      if (msg.includes('User rejected')) {
        toast.error('Transaction rejected by user.')
      } else if (msg.toLowerCase().includes('insufficient funds')) {
        toast.error('Insufficient funds in your wallet.')
      } else {
        toast.error('Payment failed.')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Helmet>
        <title>{product.title} | Serenity Yoga</title>
        <meta name="description" content={product.description} />
      </Helmet>

      <main className={styles.page}>
        <div className={styles.backWrapper}>
          <BackToStoreLink />
        </div>
        <div className={styles.card}>
          <ProductHeader title={product.title} imageUrl={product.imageUrl} />
          <ProductDescription fullText={product.fullText} />
          <p className={styles.price}>{product.priceEth} ETH</p>
          <BuyButton onClick={handleBuy} isLoading={isLoading} disabled={!isConnected} />
        </div>
      </main>
    </>
  )
}

export default ProductDetailPage
