import { NavLink } from 'react-router-dom'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import styles from './Navbar.module.css'
import Logo from '../Logo/Logo'

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.logoLink}>
        <Logo />
      </NavLink>
      <div className={styles.links}>
        <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : '')} end>
          Home
        </NavLink>
        <NavLink to="/store" className={({ isActive }) => (isActive ? styles.active : '')}>
          Store
        </NavLink>
      </div>
      <ConnectButton />
    </nav>
  )
}

export default Navbar
