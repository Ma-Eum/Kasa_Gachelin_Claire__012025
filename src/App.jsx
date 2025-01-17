import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About'; // Import des pages

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Fallback pour les routes non trouvées */}
        <Route path="*" element={<div style={{ textAlign: 'center', padding: '20px' }}>Page non trouvée</div>} />
      </Routes>
    </Router>
  );
};

export default App;
