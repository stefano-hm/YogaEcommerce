import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import styles from './BackToStoreLink.module.css'

const BackToStoreLink = () => {
  const navigate = useNavigate()

  return (
    <button className={styles.backButton} onClick={() => navigate('/store')}>
      <ArrowLeft size={20} />
      <span>Back to Store</span>
    </button>
  )
}

export default BackToStoreLink
