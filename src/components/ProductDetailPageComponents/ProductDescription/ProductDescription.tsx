import styles from './ProductDescription.module.css'

type Props = {
  fullText: string
}

function ProductDescription({ fullText }: Props) {
  return (
    <div className={styles.container}>
      <p>{fullText}</p>
    </div>
  )
}

export default ProductDescription

