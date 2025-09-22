import { ConnectButton } from '@rainbow-me/rainbowkit'
import styles from './CustomConnectButton.module.css'
import { useMediaQuery } from 'react-responsive'

type Props = {
  label?: string
  className?: string
}

const CustomConnectButton = ({ label, className }: Props) => {
  const isMobile = useMediaQuery({ maxWidth: 768 })

  return (
    <ConnectButton.Custom>
      {({ account, chain, openAccountModal, openChainModal, openConnectModal, mounted }) => {
        const ready = mounted
        const connected = ready && account && chain

        if (!connected) {
          return (
            <button
              className={`${styles.button} ${className || ''}`}
              onClick={openConnectModal}
              type="button"
            >
              {label || 'Connect'}
            </button>
          )
        }

        if (isMobile) {
          return (
            <div className={styles.mobileWrapper}>
              <button onClick={openChainModal} className={styles.mobileButton} type="button">
                {chain.hasIcon && chain.iconUrl && (
                  <img
                    alt={chain.name ?? 'Chain icon'}
                    src={chain.iconUrl}
                    className={styles.icon}
                  />
                )}
                {chain.name}
              </button>

              <button onClick={openAccountModal} className={styles.mobileButton} type="button">
                {account.displayName}
              </button>
            </div>
          )
        }

        return (
          <div className={styles.desktopWrapper}>
            <button onClick={openChainModal} className={styles.chainButton} type="button">
              {chain.hasIcon && chain.iconUrl && (
                <img alt={chain.name ?? 'Chain icon'} src={chain.iconUrl} className={styles.icon} />
              )}
              {chain.name}
            </button>

            <button onClick={openAccountModal} className={styles.accountButton} type="button">
              {account.displayName}
            </button>
          </div>
        )
      }}
    </ConnectButton.Custom>
  )
}

export default CustomConnectButton
