import { Helmet } from 'react-helmet-async'
import styles from './HomePage.module.css'

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home | Gianni's Yoga dApp</title>
        <meta name="description" content="Buy exclusive yoga products and pay securely with ETH on Gianni's decentralized app." />
      </Helmet>

      <section className={styles.home}>
        <div className={styles.hero}>
          <h2 className={styles.title}>Welcome to Gianni’s Yoga dApp</h2>
          <p className={styles.subtitle}>Buy exclusive products and pay securely with ETH.</p>
        </div>
      </section>
    </>
  )
}

export default HomePage
