import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Auth from './auth'
import AdminDashboard from './admin'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
