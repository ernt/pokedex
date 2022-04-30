
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Pokedex from './components/Home/Pokedex';
import Navbar from './components/Navbar';

function App() {
  return (
      <Router>
          <Navbar/>

            <Pokedex/>
          <Footer/>
      </Router>
    
    
  );
}

export default App;
