import { NavLink } from 'react-router-dom'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import styles from './Navbar.module.css'

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.title}>logo</h1>
      <div className={styles.links}>
        <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : '')} end>
          Home
        </NavLink>
        <NavLink to="/store" className={({ isActive }) => (isActive ? styles.active : '')}>
          Store
        </NavLink>
        <NavLink to="/success" className={({ isActive }) => (isActive ? styles.active : '')}>
          Success
        </NavLink>
      </div>
      <ConnectButton />
    </nav>
  )
}

export default Navbar
