import styles from './StoreIntro.module.css'

const StoreIntro = () => {
  return (
    <section className={styles.intro}>
      <h1 className={styles.heading}>Your Yoga Journey Starts Here</h1>
      <p className={styles.text}>
        Discover exclusive yoga packages crafted by Gianni to help you reconnect with your body,
        calm your mind, and embrace a more balanced life. From beginner to advanced flows,
        choose your path and pay securely with ETH.
      </p>
    </section>
  )
}

export default StoreIntro
