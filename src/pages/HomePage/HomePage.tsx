import styles from './HomePage.module.css'

function HomePage() {
  return (
    <section className={styles.home}>
      <div className={styles.hero}>
        <h2 className={styles.title}>Welcome to Gianni’s Yoga dApp</h2>
        <p className={styles.subtitle}>
          Buy exclusive products and pay securely with ETH.
        </p>
      </div>
    </section>
  )
}

export default HomePage
