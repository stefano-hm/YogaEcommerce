import styles from './HeroSection.module.css'

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h2 className={styles.title}>Welcome to Serenity Yoga</h2>
          <p className={styles.subtitle}>
            Discover a new way to practice yoga. Buy exclusive digital packages and pay securely with ETH.
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <img
            src="https://images.unsplash.com/photo-1585202900225-6d3ac20a6962?auto=format&fit=crop&w=800&q=80"
            alt="Woman practicing yoga in a peaceful environment"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
