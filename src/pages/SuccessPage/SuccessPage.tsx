import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import styles from './SuccessPage.module.css'

import PurchaseDetails from '../../components/SuccessPageComponents/PurchaseDetails/PurchaseDetails'
import BackToHomeButton from '../../components/SuccessPageComponents/BackToHomeButton/BackToHomeButton'
import GoToStoreButton from '../../components/SuccessPageComponents/GoToStoreButton/GoToStoreButton'

function SuccessPage() {
  const location = useLocation()
  const { product, txHash } = location.state || {}

  const productTitle = product?.title
  const price = product?.priceEth

  return (
    <>
      <Helmet>
        <title>Success | Gianni's Yoga dApp</title>
        <meta
          name="description"
          content="Your purchase was successful. Thank you for supporting Gianni’s Yoga dApp."
        />
      </Helmet>

      <main className={styles.page}>
        <div className={styles.section}>
          <h2>Purchase Successful!</h2>
          <PurchaseDetails
            productTitle={productTitle}
            price={price}
            txHash={txHash}
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
