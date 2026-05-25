import React from 'react';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div>
      {/* Usamos el componente Header arriba de todo */}
      <Header />
      
      <main style={{ padding: '20px', minHeight: '60vh' }}>
        <h2>¡Proyecto inicializado con éxito! 🚀</h2>
        <p>Acá abajo van a ir apareciendo las tarjetas y los desafíos del TP6.</p>
      </main>
      
      {/* Usamos el componente Footer al final */}
      <Footer />
    </div>
  );
}

export default App;