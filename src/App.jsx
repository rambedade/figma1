// src/App.jsx
import React from 'react';
import Header from './components/Header';
import CardSection from './components/CardSection';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <main>
        <CardSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
