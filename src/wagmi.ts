import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { mainnet, sepolia } from 'wagmi/chains'
import { http } from 'viem'

export const config = getDefaultConfig({
  appName: 'yoga-ecommerce',
  projectId: '105c1c875aab4d14851ff5a325f8c9b5',
  chains: [mainnet, sepolia],
  ssr: false,
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})
