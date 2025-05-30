import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Добавьте Router
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './styles.css';

function App() {
  return (
    <Router> {/* Оберните всё в Router */}
      <div className="app">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </Router>
  );
}

export default App;