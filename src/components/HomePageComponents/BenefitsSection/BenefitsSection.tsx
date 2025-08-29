import styles from './BenefitsSection.module.css'

const benefits = [
  {
    title: 'Tailored Yoga Packages',
    description:
      'Authentic, high-quality yoga experiences crafted for beginners and advanced practitioners.',
  },
  {
    title: 'Secure ETH Payments',
    description: 'Seamlessly pay with Ethereum. No banks, no fees, just you and the blockchain.',
  },
  {
    title: 'Instant Access',
    description: 'Get your yoga content right away – no waiting, no complications.',
  },
  {
    title: 'Community-Driven',
    description: 'Join a growing decentralized network of mindful individuals across the globe.',
  },
  {
    title: 'Simple & Intuitive',
    description:
      'Our platform is designed to be clean and user-friendly, so you can focus on your practice.',
  },
]

const BenefitsSection = () => {
  return (
    <section className={styles.benefits}>
      <h3 className={styles.heading}>Why Choose Serenity Yoga?</h3>
      <ul className={styles.list}>
        {benefits.map((benefit, index) => (
          <li key={index} className={styles.card}>
            <h4 className={styles.title}>{benefit.title}</h4>
            <p className={styles.description}>{benefit.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default BenefitsSection
