import { Link } from 'react-router-dom'
import styles from './StoreCTA.module.css'

function StoreCTA() {
  return (
    <section className={styles.cta}>
      <h3 className={styles.title}>Just starting out?</h3>
      <p className={styles.text}>Begin your journey with our <strong>Basic Yoga Package</strong>. It's the perfect first step to inner balance.</p>
      <Link to="/store#basic" className={styles.button}>
        Get the Basic Pack
      </Link>
    </section>
  )
}

export default StoreCTA
