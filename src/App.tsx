import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'

import Navbar from './components/Navbar/Navbar'
import Loader from './components/Loader/Loader'

const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const StorePage = lazy(() => import('./pages/StorePage/StorePage'))
const SuccessPage = lazy(() => import('./pages/SuccessPage/SuccessPage'))

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/store" element={<StorePage />} />
            <Route path="/success" element={<SuccessPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  )
}

export default App
