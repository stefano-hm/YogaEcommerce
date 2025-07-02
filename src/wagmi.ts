import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet, sepolia } from 'wagmi/chains';
import { http } from 'wagmi';

export const config = getDefaultConfig({
  appName: 'yoga-ecommerce',  // Puoi cambiare con il nome della tua app
  projectId: '105c1c875aab4d14851ff5a325f8c9b5',  // Sostituisci qui col tuo projectId reale
  chains: [mainnet, sepolia],
  ssr: false,  // Se usi SSR, metti true, altrimenti lascia false
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});

