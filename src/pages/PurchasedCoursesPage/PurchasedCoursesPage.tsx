import { Helmet } from 'react-helmet-async'
// @ts-ignore
import { useAccount } from 'wagmi'
import PurchasedCoursesSection from '../../components/HomePageComponents/PurchasedCoursesSection/PurchasedCoursesSection'
import styles from './PurchasedCoursesPage.module.css'

const PurchasedCoursesPage = () => {
  const { address } = useAccount()

  return (
    <>
      <Helmet>
        <title>My Courses | Serenity Yoga</title>
        <meta
          name="description"
          content="View the yoga courses you have purchased with your connected wallet."
        />
      </Helmet>

      <main className={styles.page}>
        {!address ? (
          <p className={styles.message}>
            Please connect your wallet to see your purchased courses.
          </p>
        ) : (
          <PurchasedCoursesSection walletAddress={address} />
        )}
      </main>
    </>
  )
}

export default PurchasedCoursesPage
