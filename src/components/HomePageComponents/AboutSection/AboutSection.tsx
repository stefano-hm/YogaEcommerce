import styles from './AboutSection.module.css'

const AboutSection = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h3 className={styles.heading}>Yoga meets Web3</h3>
        <p className={styles.text}>
          Gianni’s Yoga dApp brings together ancient wellness practices and modern decentralized technology.
          Whether you're a curious beginner or a seasoned yogi, our courses are designed to elevate your practice — 
          and you can pay securely with Ethereum.
        </p>
        <p className={styles.text}>
          No middlemen. No subscriptions. Just high-quality yoga content delivered directly to your wallet.
        </p>
      </div>
    </section>
  )
}

export default AboutSection
