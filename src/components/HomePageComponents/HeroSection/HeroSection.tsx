import styles from './HeroSection.module.css'

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h2 className={styles.title}>Welcome to Gianni’s Yoga dApp</h2>
        <p className={styles.subtitle}>
          Discover a new way to practice yoga. Buy exclusive digital packages and pay securely with ETH.
        </p>
      </div>
    </section>
  )
}

export default HeroSection
