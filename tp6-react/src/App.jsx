import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Card from './components/Card.jsx'; // 1. Importamos la Card
import Contador from './components/Contador.jsx';

function App() {
  return (
    <div>
      <Header />
      
      <main style={{ padding: '20px', minHeight: '60vh', fontFamily: 'sans-serif', textAlign: 'center' }}>
        <h2>¡Nuestras Tarjetas Reutilizables! 🎴</h2>
        <p>Mostrando el mismo componente con diferentes propiedades (Props).</p>
        
        {/* Contenedor para alinear las tarjetas */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          
          {/* Tarjeta 1 */}
          <Card 
            titulo="Mouse Gamer" 
            descripcion="Mouse RGB con sensor óptico de alta precisión." 
            imagen="https://picsum.photos/id/10/300/200" 
            precio={4500}
          />

          {/* Tarjeta 2 */}
          <Card 
            titulo="Teclado Mecánico" 
            descripcion="Teclado compacto con switches red ideal para programar." 
            imagen="https://picsum.photos/id/48/300/200" 
            precio={12000}
          />

          {/* Tarjeta 3 - Probando el precio por defecto (no le pasamos precio) [cite: 71] */}
          <Card 
            titulo="Mousepad XXL" 
            descripcion="Superficie de tela suave y base de goma antideslizante." 
            imagen="https://picsum.photos/id/60/300/200"
          />

          {/* Tarjeta 4 - Usando la propiedad children [cite: 71] */}
          <Card 
            titulo="Auriculares Pro" 
            descripcion="Sonido envolvente con cancelación de ruido." 
            imagen="https://picsum.photos/id/26/300/200" 
            precio={8500}
          >
            <span style={{ backgroundColor: '#ff4655', padding: '2px 5px', borderRadius: '4px', fontSize: '12px' }}>
              🔥 ¡Más Vendido!
            </span>
          </Card>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;