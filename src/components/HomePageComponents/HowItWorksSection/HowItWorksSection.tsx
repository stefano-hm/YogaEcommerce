import styles from './HowItWorksSection.module.css'

const steps = [
  { number: 1, text: "Select your favorite yoga package from our Store page." },
  { number: 2, text: "Connect your Ethereum wallet securely with one click." },
  { number: 3, text: "Complete the purchase using ETH and enjoy instant access." },
]

const HowItWorksSection = () => {
  return (
    <section className={styles.howItWorks}>
      <h3 className={styles.heading}>How It Works</h3>
      <div className={styles.steps}>
        {steps.map((step) => (
          <div key={step.number} className={styles.card}>
            <span className={styles.number}>{step.number}</span>
            <p className={styles.text}>{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HowItWorksSection
