import styles from './HowItWorksSection.module.css'

const HowItWorksSection = () => {
  return (
    <section className={styles.howItWorks}>
      <div className={styles.container}>
        <h3 className={styles.heading}>How It Works</h3>
        <div className={styles.steps}>
          <div className={styles.step}>
            <span className={styles.number}>1</span>
            <p>Select your favorite yoga package from our Store page.</p>
          </div>
          <div className={styles.step}>
            <span className={styles.number}>2</span>
            <p>Connect your Ethereum wallet securely with one click.</p>
          </div>
          <div className={styles.step}>
            <span className={styles.number}>3</span>
            <p>Complete the purchase using ETH and enjoy instant access.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection
