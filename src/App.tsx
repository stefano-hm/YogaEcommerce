import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'

import HomePage from './pages/HomePage/HomePage'
import StorePage from './pages/StorePage/StorePage'
import SuccessPage from './pages/SuccessPage/SuccessPage'

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
