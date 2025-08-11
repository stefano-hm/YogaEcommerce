import styles from './HeroSection.module.css'

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h2 className={styles.title}>Welcome to Serenity Yoga</h2>
          <p className={styles.subtitle}>
            Discover a new way to practice yoga. Buy exclusive digital packages and pay securely with ETH.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
