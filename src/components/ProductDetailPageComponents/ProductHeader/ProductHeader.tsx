import styles from './ProductHeader.module.css'

type Props = {
  title: string
  imageUrl: string
}

function ProductHeader({ title, imageUrl }: Props) {
  return (
    <div className={styles.container}>
      <img src={imageUrl} alt={title} className={styles.image} />
      <h1 className={styles.title}>{title}</h1>
    </div>
  )
}

export default ProductHeader

