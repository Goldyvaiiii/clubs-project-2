import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ClubLeaderDashboard from './pages/ClubLeaderDashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={
          <>
            <h1>HELLO</h1>
          </>
        } />
        
        {/* Club Leader Dashboard Route */}
        <Route path="/leader/dashboard" element={<ClubLeaderDashboard />} />
      </Routes>
    </Router>
  )
}

export default App