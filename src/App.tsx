/**
 * Main App Component
 * Root component that renders the complete PetShop landing page
 * Organizes all sections in a logical flow from top to bottom
 */
import Home from './pages/Home';
import Dashboard from './components/admin/Dashboard';
import { Routes, Route } from 'react-router-dom';


const App = () => {
  return (
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/dashboard" element={<Dashboard/>} />
</Routes>

  )
}

export default App

