import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div>
      {/* Tu Header arriba */}
      <Header />
      
      {/* El contenido del medio */}
      <main style={{ padding: '20px', minHeight: '60vh', fontFamily: 'sans-serif' }}>
        <h2>¡Estructura Base Lista! 🚀</h2>
        <p>Si estás viendo esto, significa que acomodaste la carpeta a la perfección y ya completaste el Punto 1 del TP.</p>
      </main>
      
      {/* Tu Footer abajo */}
      <Footer />
    </div>
  );
}

export default App;