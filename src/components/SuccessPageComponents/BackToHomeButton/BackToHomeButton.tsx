import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import styles from './BackToHomeButton.module.css'

function BackToHomeButton() {
  return (
    <Link to="/" className={styles.button}>
      <ArrowLeft size={20} />
      Back to Home
    </Link>
  )
}

export default BackToHomeButton
