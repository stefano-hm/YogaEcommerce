import { CheckCircle2 } from 'lucide-react'
import styles from './SuccessMessage.module.css'

const SuccessMessage = () => {
  return (
    <div className={styles.container}>
      <CheckCircle2 className={styles.icon} />
      <h2 className={styles.title}>Thank you for your purchase!</h2>
      <p className={styles.subtitle}>
        Your payment in ETH was successful. We truly appreciate your support.
      </p>
    </div>
  )
}

export default SuccessMessage
