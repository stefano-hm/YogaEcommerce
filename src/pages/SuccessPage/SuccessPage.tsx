import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import styles from './SuccessPage.module.css'
// @ts-ignore
import { useAccount } from 'wagmi'
import { Link } from 'react-router-dom'

import PurchaseDetails from '../../components/SuccessPageComponents/PurchaseDetails/PurchaseDetails'
import BackToHomeButton from '../../components/SuccessPageComponents/BackToHomeButton/BackToHomeButton'
import GoToStoreButton from '../../components/SuccessPageComponents/GoToStoreButton/GoToStoreButton'
import Logo from '../../components/Logo/Logo'

const SuccessPage = () => {
  const location = useLocation()
  const { product, txHash } = location.state || {}
  const { chain } = useAccount()

  const productTitle = product?.title
  const price = product?.priceEth

  return (
    <>
      <Helmet>
        <title>Success | Serenity Yoga</title>
        <meta
          name="description"
          content="Your purchase was successful. Thank you for supporting Gianni’s Yoga dApp."
        />
      </Helmet>

      <header className={styles.header}>
        <Link to="/">
          <Logo />
        </Link>
      </header>

      <main className={styles.page}>
        <div className={styles.section}>
          <h2>Purchase Successful!</h2>
          <PurchaseDetails
            productTitle={productTitle}
            price={price}
            txHash={txHash}
            chainId={chain?.id}
          />
        </div>
        <div className={styles.section}>
          <BackToHomeButton />
        </div>
        <div className={styles.section}>
          <GoToStoreButton />
        </div>
      </main>
    </>
  )
}

export default SuccessPage
