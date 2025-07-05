import { Helmet } from 'react-helmet-async'
import styles from './SuccessPage.module.css'

function SuccessPage() {
  return (
    <>
      <Helmet>
        <title>Success | Gianni's Yoga dApp</title>
        <meta name="description" content="Your purchase was successful. Thank you for supporting Gianni’s Yoga dApp." />
      </Helmet>

      <section className={styles.success}>
        <h2 className={styles.title}>Purchase completed!</h2>
        <p className={styles.subtitle}>Thank you for supporting Gianni.</p>
      </section>
    </>
  )
}

export default SuccessPage

