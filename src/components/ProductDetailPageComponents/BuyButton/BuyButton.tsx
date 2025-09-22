import CustomConnectButton from '../../CustomConnectButton/CustomConnectButton'
import styles from './BuyButton.module.css'

type Props = {
  onClick: () => void
  isLoading: boolean
  address?: string
}

const BuyButton = ({ onClick, isLoading, address }: Props) => {
  if (!address) {
    return <CustomConnectButton label="Connect wallet first" className={styles.button} />
  }

  return (
    <button onClick={onClick} disabled={isLoading} className={styles.button}>
      {isLoading ? 'Processing purchase...' : 'Buy now'}
    </button>
  )
}

export default BuyButton
