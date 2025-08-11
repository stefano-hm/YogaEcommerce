import styles from './Logo.module.css'
import logo from '../../../public/images/logo.png'

const Logo = () => {
  return <img src={logo} alt="Pranava Flow logo" className={styles.logo} />
}

export default Logo
