import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Error from './pages/Error/Error'; // Import de la page Error

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route pour la page d'accueil */}
        <Route path="/" element={<Home />} />

        {/* Route pour la page À Propos */}
        <Route path="/about" element={<About />} />

        {/* Route pour les pages non trouvées */}
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
