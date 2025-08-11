import { Link } from 'react-router-dom'
import styles from './CallToAction.module.css'

const CallToAction = () => {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <h3 className={styles.heading}>Ready to transform your practice?</h3>
        <p className={styles.text}>
          Discover the perfect yoga package for your goals and experience level. All powered by
          Web3.
        </p>
        <Link to="/store" className={styles.button}>
          Go to Store
        </Link>
      </div>
    </section>
  )
}

export default CallToAction
