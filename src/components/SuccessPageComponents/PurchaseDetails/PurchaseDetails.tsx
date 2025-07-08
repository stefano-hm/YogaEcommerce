import styles from './PurchaseDetails.module.css'

type Props = {
  productTitle?: string
  price?: number
  txHash?: string
}

function PurchaseDetails({ productTitle, price, txHash }: Props) {
  if (!productTitle || !price) {
    return <p>Thank you for your purchase.</p>
  }

  return (
    <>
      <p>
        You've successfully purchased <strong>{productTitle}</strong> for <strong>{price} ETH</strong>.
      </p>
      {txHash && (
        <p>
          <a
            href={`https://etherscan.io/tx/${txHash}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            View transaction on Etherscan ↗
          </a>
        </p>
      )}
    </>
  )
}

export default PurchaseDetails
