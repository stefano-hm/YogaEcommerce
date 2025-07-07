import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import styles from './GoToStoreButton.module.css'

function GoToStoreButton() {
  return (
    <Link to="/store" className={styles.button}>
      Continue Shopping
      <ShoppingBag size={20} />
    </Link>
  )
}

export default GoToStoreButton
