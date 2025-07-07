import styles from './BenefitsSection.module.css'

const BenefitsSection = () => {
  return (
    <section className={styles.benefits}>
      <div className={styles.container}>
        <h3 className={styles.heading}>Why Choose Gianni’s Yoga dApp?</h3>
        <ul className={styles.list}>
          <li>🌿 Authentic, high-quality yoga packages tailored for every level.</li>
          <li>🔐 Secure payments with Ethereum, no intermediaries.</li>
          <li>⚡ Instant access to your purchases, no delays.</li>
          <li>🌍 Join a decentralized community of yoga enthusiasts.</li>
          <li>💻 User-friendly interface, designed to make your experience smooth.</li>
        </ul>
      </div>
    </section>
  )
}

export default BenefitsSection
