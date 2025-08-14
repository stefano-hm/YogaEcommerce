# Serenity Yoga – Ethereum-based Yoga Course Store

## Project Name & Description

**Project Name:** Serenity Yoga (`yoga-ecommerce`)

**Description:**

Serenity Yoga is an online store designed to help John, owner of a yoga studio, expand his business by selling yoga courses online. The e-commerce platform allows customers to purchase yoga packages using **Ethereum** after connecting their wallet. Wallet connection and payment processing are seamlessly integrated through **RainbowKit**, supporting MetaMask, Coinbase Wallet, Rainbow, and WalletConnect.

## Homepage Preview

<img width="1732" height="861" alt="image" src="https://github.com/user-attachments/assets/6bfb6054-9a93-4aa5-90a4-1c92ce6c8127" />

## Technologies Used

**Frontend Framework & Languages**

- React 18.3.1 – main frontend framework
- TypeScript 5.4.5 – static typing for better maintainability
 
**Build Tools**
  
- Vite 5.2.11 – fast build tool & dev server
- @vitejs/plugin-react 4.2.1 – React integration for Vite
 
**Web3 & Blockchain Integration**
  
- Wagmi 2.16.0 – Ethereum blockchain interaction
- RainbowKit 2.2.8 – wallet connection and management
- Viem 2.31.6 – Ethereum client for smart contract interactions
  
**State & Data Management**
  
- React Query (TanStack) 5.45.1 – async state management and data fetching
  
**Routing & SEO**
  
- React Router DOM 7.6.3 – SPA routing
- React Helmet Async 2.0.5 – dynamic page titles and meta tags
  
**UI & User Experience**
  
- React Hot Toast 2.5.2 – toast notifications
- React Responsive 10.0.1 – responsive design handling
- Lucide React 0.525.0 – customizable SVG icons
 
**Development Tools**
  
- Prettier 3.6.2 – code formatting
- Biome 1.8.0 – linting and code quality checks
- Buffer 6.0.3 – binary data handling (Web3 utility)
- @wagmi/cli – CLI for Wagmi configuration

## Installation & Setup

**Prerequisites**

- Node.js (latest LTS recommended)
- npm (or yarn/pnpm)

**Steps**

  ```bash
  # Clone the repository
  git clone git clone https://github.com/stefano-hm/YogaEcommerce.git
  cd yoga-ecommerce

  # Install dependencies
  npm install

  # Start development server
  npm run dev
  ```

Default development URL:
`http://localhost:5173`

**Build for production**

  ```bash
  npm run build
  ```

**Preview production build**

  ```bash
  npm run preview
  ```

**Lint the code**

  ```bash
  npm run lint
  ```

## E-commerce Architecture & Flow

The Serenity Yoga application is structured as a Single Page Application (SPA) with **four main pages**:

- **Home Page**

  Brief project introduction with a call-to-action button to visit the store.

- **Store Page**
  
  Displays a grid of **6 yoga packages** with image, ETH price, and short description.
  Products are managed in local state and rendered via the `ProductGrid` component.

- **Product Detail Page**
  
  Shows detailed product info, full description, and a Buy button.
  The buy button is disabled until the wallet is connected.
  Purchases are processed via `useSendTransaction` from Wagmi, and upon success, the user is      redirected to the **Success Page**.

- **Success Page**
  Displays transaction details with a direct link to **Etherscan**, plus navigation buttons to    return to the store or home.

**Wallet & Payment Handling**

- Wallet connection is handled by **RainbowKit**, supporting multiple providers.
- Ethereum transactions are processed via Wagmi and Viem.
- Payments can be made on **Mainnet** or **Sepolia** (test network).
- Error handling for rejected transactions, insufficient funds, and other failures.

## Key Features
- **Wallet Connection** (MetaMask, Coinbase Wallet, Rainbow, WalletConnect)
- **Product Catalog** (6 purchasable yoga packages)
- **Detailed Product View** (image, price, description)
- **ETH Payments** via connected wallet
- **Real-time Transaction Feedback** with toast notifications
- **Success Page** with transaction details & Etherscan link
- **Responsive UI** for desktop & mobile

## Project Structure (simplified)

  ```bash
  src/
  components/     # Reusable UI components
  pages/          # Page components (Home, Store, ProductDetail, Success)
  data/           # Product data definitions
  App.tsx         # Main app entry
  main.tsx        # React entry point
  ```

## Manual Testing

1. **Connect a Wallet** via the navbar button (MetaMask, Coinbase, Rainbow, WalletConnect).

2. Navigate between **Home**, **Store**, and **Product Detail** pages.

3. Try to purchase a product:

 - Ensure you have ETH on **Sepolia** or **Mainnet**.
 - Check toast notifications for success or failure.
 - Verify Etherscan link on **Success Page**.

4. **Edge Cases**:

 - Attempt purchase with wallet disconnected (Buy button should be disabled).
 - Reject transaction in the wallet (error toast).
 - Try with insufficient funds (error toast).

## Known Issues & Limitations
 
- No backend integration: all products are static.
- Only ETH payments are supported.
- User must manually switch to the correct network (Mainnet or Sepolia).

## Author

Developed by Stefano Benedet For educational and portfolio purposes.

Feel free to fork, contribute, or get inspired for your own decentralized travel projects.



