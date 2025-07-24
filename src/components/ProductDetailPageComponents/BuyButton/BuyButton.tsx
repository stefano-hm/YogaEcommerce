import styles from './BuyButton.module.css'

type Props = {
  onClick: () => void
  isLoading: boolean
  disabled?: boolean
}

function BuyButton({ onClick, isLoading, disabled }: Props) {
  const isDisabled = isLoading || disabled

  let buttonText = 'Buy now'
  if (isLoading) {
    buttonText = 'Processing purchase...'
  } else if (disabled) {
    buttonText = 'Connect wallet first'
  }

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={styles.button}
    >
      {buttonText}
    </button>
  )
}

export default BuyButton
