import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'
import Logo from '../Logo/Logo'
import { Menu, X } from 'lucide-react'
import CustomConnectButton from '../CustomConnectButton/CustomConnectButton'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.logoLink} onClick={closeMenu}>
        <Logo />
      </NavLink>

      <nav className={styles.desktopMenu}>
        <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : '')} end>
          Home
        </NavLink>
        <NavLink to="/store" className={({ isActive }) => (isActive ? styles.active : '')}>
          Store
        </NavLink>
      </nav>

      <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className={`${styles.mobileMenu} ${menuOpen ? `${styles.open} ${styles.fadeIn}` : ''}`}>
        <nav className={styles.mobileNav}>
          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? styles.active : '')}
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/store"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            Store
          </NavLink>
        </nav>
      </div>

      <div className={styles.connectWrapper}>
        <CustomConnectButton />
      </div>
    </nav>
  )
}

export default Navbar
