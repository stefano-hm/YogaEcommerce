import { Helmet } from 'react-helmet-async'
import styles from './SuccessPage.module.css'

import SuccessMessage from '../../components/SuccessPageComponents/SuccessMessage/SuccessMessage'
import BackToHomeButton from '../../components/SuccessPageComponents/BackToHomeButton/BackToHomeButton'
import GoToStoreButton from '../../components/SuccessPageComponents/GoToStoreButton/GoToStoreButton'

function SuccessPage() {
  return (
    <>
      <Helmet>
        <title>Success | Gianni's Yoga dApp</title>
        <meta name="description" content="Your purchase was successful. Thank you for supporting Gianni’s Yoga dApp." />
      </Helmet>

      <main className={styles.page}>
        <div className={styles.section}>
          <SuccessMessage />
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

