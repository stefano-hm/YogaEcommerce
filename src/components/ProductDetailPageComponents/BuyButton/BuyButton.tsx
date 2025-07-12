import styles from './BuyButton.module.css'

type Props = {
  onClick: () => void
  isLoading: boolean
}

function BuyButton({ onClick, isLoading }: Props) {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className={styles.button}
    >
      {isLoading ? 'Processing purchase...' : 'Buy now'}
    </button>
  )
}

export default BuyButton

