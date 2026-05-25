import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Card from './components/Card.jsx';
import Contador from './components/Contador.jsx';
import ContactForm from './components/ContactForm.jsx'; // <-- 1. IMPORTAR ACÁ

function App() {
  return (
    <div>
      <Header />
      
      <main style={{ padding: '20px', minHeight: '60vh', fontFamily: 'sans-serif', textAlign: 'center' }}>
        <h2>¡Nuestras Tarjetas Reutilizables! 🎴</h2>
        <p>Mostrando el mismo componente con diferentes propiedades (Props).</p>
        
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Card titulo="Mouse Gamer" descripcion="Mouse RGB con sensor óptico." imagen="https://picsum.photos/id/10/300/200" precio={4500} />
          <Card titulo="Teclado Mecánico" descripcion="Teclado compacto con switches red." imagen="https://picsum.photos/id/48/300/200" precio={12000} />
          <Card titulo="Mousepad XXL" descripcion="Superficie de tela suave." imagen="https://picsum.photos/id/60/300/200" />
          <Card titulo="Auriculares Pro" descripcion="Sonido envolvente." imagen="https://picsum.photos/id/26/300/200" precio={8500}>
            <span style={{ backgroundColor: '#ff4655', padding: '2px 5px', borderRadius: '4px', fontSize: '12px' }}>🔥 ¡Más Vendido!</span>
          </Card>
        </div>

        <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #444' }} />
        <Contador />

        <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #444' }} />
        
        {/* 2. RENDERIZAMOS EL FORMULARIO DE CONTACTO ACÁ */}
        <ContactForm />

      </main>
      
      <Footer />
    </div>
  );
}

export default App;