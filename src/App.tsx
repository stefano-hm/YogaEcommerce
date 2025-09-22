import { Routes, Route, useLocation } from 'react-router-dom'
import { Suspense, lazy } from 'react'

import Navbar from './components/Navbar/Navbar'
import Loader from './components/Loader/Loader'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const StorePage = lazy(() => import('./pages/StorePage/StorePage'))
const PurchasedCoursesPage = lazy(() => import('./pages/PurchasedCoursesPage/PurchasedCoursesPage'))
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage/ProductDetailPage'))
const SuccessPage = lazy(() => import('./pages/SuccessPage/SuccessPage'))

const App = () => {
  const location = useLocation()
  const isSuccessPage = location.pathname === '/success'

  return (
    <div>
      {!isSuccessPage && <Navbar />}
      <ScrollToTop />
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/store" element={<StorePage />} />
            <Route path="/my-courses" element={<PurchasedCoursesPage />} />
            <Route path="/store/:slug" element={<ProductDetailPage />} />
            <Route path="/success" element={<SuccessPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  )
}

export default App
