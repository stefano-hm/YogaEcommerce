import styles from './PurchaseDetails.module.css'

type Props = {
  productTitle?: string
  price?: number
  txHash?: string
  chainId?: number
}

const getExplorerUrl = (chainId?: number): string => {
  switch (chainId) {
    case 1:
      return 'https://etherscan.io/tx/'
    case 11155111:
      return 'https://sepolia.etherscan.io/tx/'
    case 5:
      return 'https://goerli.etherscan.io/tx/'
    case 137:
      return 'https://polygonscan.com/tx/'
    case 80001:
      return 'https://mumbai.polygonscan.com/tx/'
    default:
      return 'https://etherscan.io/tx/'
  }
}

function PurchaseDetails({ productTitle, price, txHash, chainId }: Props) {
  if (!productTitle || !price) {
    return <p>Thank you for your purchase.</p>
  }

  const explorerBase = getExplorerUrl(chainId)

  return (
    <>
      <p>
        You've successfully purchased <strong>{productTitle}</strong> for{' '}
        <strong>{price} ETH</strong>.
      </p>
      {txHash && (
        <p>
          <a
            href={`${explorerBase}${txHash}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            View transaction on block explorer ↗
          </a>
        </p>
      )}
    </>
  )
}

export default PurchaseDetails
