import { Helmet } from 'react-helmet-async'
// @ts-ignore
import { useAccount } from 'wagmi'
import styles from './HomePage.module.css'

import HeroSection from '../../components/HomePageComponents/HeroSection/HeroSection'
import AboutSection from '../../components/HomePageComponents/AboutSection/AboutSection'
import HowItWorksSection from '../../components/HomePageComponents/HowItWorksSection/HowItWorksSection'
import BenefitsSection from '../../components/HomePageComponents/BenefitsSection/BenefitsSection'
import CallToAction from '../../components/HomePageComponents/CallToAction/CallToAction'
import PurchasedCoursesSection from '../../components/HomePageComponents/PurchasedCoursesSection/PurchasedCoursesSection'

const HomePage = () => {
  const { address } = useAccount()

  return (
    <>
      <Helmet>
        <title>Home | Serenity Yoga</title>
        <meta
          name="description"
          content="Buy exclusive yoga products and pay securely with ETH on Gianni's decentralized app."
        />
      </Helmet>

      <main className={styles.page}>
        <div className={styles.section}>
          <HeroSection />
        </div>
        <div className={styles.section}>
          <BenefitsSection />
        </div>
        <div className={styles.section}>
          <AboutSection />
        </div>
        <div className={styles.section}>
          <HowItWorksSection />
        </div>

        {address && (
          <div className={styles.section}>
            <PurchasedCoursesSection walletAddress={address} />
          </div>
        )}

        <div className={styles.section}>
          <CallToAction />
        </div>
      </main>
    </>
  )
}

export default HomePage
