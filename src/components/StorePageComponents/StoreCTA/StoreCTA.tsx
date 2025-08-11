import styles from './StoreCTA.module.css'

type StoreCTAProps = {
  onScrollToProduct: () => void
}

const StoreCTA = ({ onScrollToProduct }: StoreCTAProps) => {
  return (
    <section className={styles.cta}>
      <h3 className={styles.title}>Just starting out?</h3>
      <p className={styles.text}>
        Begin your journey with our <strong>Basic Yoga Package</strong>. It's the perfect first step
        to inner balance.
      </p>
      <button onClick={onScrollToProduct} className={styles.button}>
        Get the Basic Pack
      </button>
    </section>
  )
}

export default StoreCTA
