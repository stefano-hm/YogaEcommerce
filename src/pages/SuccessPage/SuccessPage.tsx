import styles from './SuccessPage.module.css'

function SuccessPage() {
  return (
    <section className={styles.success}>
      <h2 className={styles.title}>Purchase completed!</h2>
      <p className={styles.subtitle}>Thank you for supporting Gianni.</p>
    </section>
  )
}

export default SuccessPage

