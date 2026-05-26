import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Card from './components/Card.jsx';
import Contador from './components/Contador.jsx';
import ContactForm from './components/ContactForm.jsx';
import ProductList from './components/ProductList.jsx';
import TodoApp from './components/TodoApp.jsx'; // <-- LA ÚLTIMA IMPORTACIÓN

function App() {
  return (
    <div>
      <Header />
      
      <main style={{ padding: '20px', minHeight: '60vh', fontFamily: 'sans-serif', textAlign: 'center' }}>
        <h2>¡Ofertas de Invierno! 🎴</h2>
        <p>Productos en oferta por tiempo limitado.</p>
        
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Card titulo="Mouse Gamer" descripcion="Mouse RGB con sensor óptico." imagen="https://imgs.search.brave.com/qmG8IHBlkoNjAwZsRKDF8CLTtnkJKTaUGkBBXQ0CJ14/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZWRy/YWdvbnNob3AuY29t/L2Nkbi9zaG9wL2Zp/bGVzL1BSRURBVE9S/TTYxMlBST2dhbWlu/Z21vdXNlXzEucG5n/P3Y9MTc2MjQ2MzY1/NSZ3aWR0aD01MzM" precio={4500} />
          <Card titulo="Teclado Mecánico" descripcion="Teclado compacto con switches red." imagen="https://imgs.search.brave.com/2X2AzYeZKQ8T3K7N6nlk5wq4NPMgDJkVOXL6H4dFIaQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5waWNoYXUuY29t/LmJyL21lZGlhL2Nh/dGFsb2cvcHJvZHVj/dC9jYWNoZS9lZjcy/ZDNjMjc4NjQ1MTBl/NWQ0YzBjZTY5YmFk/ZTI1OS90L3AvdHBt/a2J2cmQ1NjI1MjIw/M18xLmpwZw" precio={12000} />
          <Card titulo="Mousepad XXL" descripcion="Superficie de tela suave." imagen="https://imgs.search.brave.com/NnqXLJGVx9VSorPCwy7ooCZnbx2xiKEDHvPfp92BsSw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aGVt/b3VzZXBhZGNvbXBh/bnkuY29tL2Nkbi9z/aG9wL2ZpbGVzL21h/cHptLWJ3LWFlcm8t/bHJnLWFlcm8tdGh1/bWJrLmpwZz92PTE3/NjQ4Njc2Mjgmd2lk/dGg9NDQ3Mg" />
          <Card titulo="Auriculares Pro" descripcion="Sonido envolvente." imagen="https://imgs.search.brave.com/DqqoD1BPcCyTm17mfGxomID8HHxYcjXU2Bb3xaAXFy8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/Xzk4NzExMC1NTEE5/NjEwNDAyMTMyMV8x/MDIwMjUtVi53ZWJw" precio={8500}>
            <span style={{ backgroundColor: '#ff4655', padding: '2px 5px', borderRadius: '4px', fontSize: '12px' }}>🔥 ¡Más Vendido!</span>
          </Card>
        </div>

        <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #444' }} />
        <Contador />

        <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #444' }} />
        <ContactForm />

        <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #444' }} />
        <ProductList />

        <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #444' }} />
        
        <TodoApp />

      </main>
      
      <Footer />
    </div>
  );
}

export default App;