import React, { useState } from 'react';
import Card from './Card.jsx'; // Reutilizamos tu componente Card

const ProductList = () => {
  // 1. Definimos el array de al menos 6 productos
  const productosIniciales = [
    { id: 1, nombre: "Placa de Video RTX", precio: 350000, categoria: "Electrónica", enStock: true, imagen: "https://picsum.photos/id/1/300/200" },
    { id: 2, nombre: "Monitor 24' 144Hz", precio: 180000, categoria: "Electrónica", enStock: false, imagen: "https://picsum.photos/id/3/300/200" },
    { id: 3, nombre: "Remera de Algodón", precio: 15000, categoria: "Ropa", enStock: true, imagen: "https://picsum.photos/id/20/300/200" },
    { id: 4, nombre: "Campera de Abrigo", precio: 45000, categoria: "Ropa", enStock: true, imagen: "https://picsum.photos/id/15/300/200" },
    { id: 5, nombre: "Cafetera Express", precio: 95000, categoria: "Hogar", enStock: false, imagen: "https://picsum.photos/id/30/300/200" },
    { id: 6, nombre: "Licuadora Pro", precio: 38000, categoria: "Hogar", enStock: true, imagen: "https://picsum.photos/id/42/300/200" }
  ];

  // Estados para controlar los filtros
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas');
  const [soloEnStock, setSoloEnStock] = useState(false);

  // 2. Lógica de filtros combinados (.filter())
  const productosFiltrados = productosIniciales.filter(producto => {
    // Filtro por categoría
    const pasaCategoria = categoriaSeleccionada === 'Todas' || producto.categoria === categoriaSeleccionada;
    // Filtro por stock
    const pasaStock = !soloEnStock || producto.enStock;
    
    return pasaCategoria && pasaStock;
  });

  return (
    <div style={{
      border: '2px dashed #646cff',
      borderRadius: '8px',
      padding: '20px',
      margin: '20px auto',
      maxWidth: '1200px',
      backgroundColor: '#222',
      color: '#fff'
    }}>
      <h3 style={{ color: '#646cff' }}>Desafío 5: Lista de Productos Filtrable 🛒</h3>
      
      {/* Controles de Filtros */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        gap: '20px', 
        marginBottom: '20px',
        backgroundColor: '#1a1a1a',
        padding: '15px',
        borderRadius: '6px'
      }}>
        <div>
          <label style={{ marginRight: '10px' }}>Categoría:</label>
          <select 
            value={categoriaSeleccionada} 
            onChange={(e) => setCategoriaSeleccionada(e.target.value)}
            style={{ padding: '6px 10px', borderRadius: '4px', backgroundColor: '#333', color: '#fff', border: '1px solid #444' }}
          >
            <option value="Todas">Todas</option>
            <option value="Electrónica">Electrónica</option>
            <option value="Ropa">Ropa</option>
            <option value="Hogar">Hogar</option>
          </select>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <input 
            type="checkbox" 
            id="stockCheck"
            checked={soloEnStock}
            onChange={(e) => setSoloEnStock(e.target.checked)}
            style={{ width: '18px', height: '18px', cursor: 'pointer' }}
          />
          <label htmlFor="stockCheck" style={{ cursor: 'pointer' }}>Solo en stock</label>
        </div>
      </div>

      {/* Renderizado de la lista */}
      {productosFiltrados.length === 0 ? (
        // (d) Mostrar "No hay productos" si los filtros no devuelven nada
        <p style={{ textAlign: 'center', color: '#ff4655', fontWeight: 'bold', fontSize: '18px', margin: '40px 0' }}>
          ❌ No hay productos que coincidan con la búsqueda.
        </p>
      ) : (
        // (a) Renderizar usando .map() y asignando la key única
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          {productosFiltrados.map(producto => (
            <Card 
              key={producto.id} 
              titulo={producto.nombre} 
              descripcion={`Categoría: ${producto.categoria}`} 
              imagen={producto.imagen} 
              precio={producto.precio}
            >
              {/* Le metemos una etiqueta de stock customizada dentro de la tarjeta */}
              <span style={{ 
                backgroundColor: producto.enStock ? '#4caf50' : '#ff4655', 
                color: '#fff', 
                padding: '2px 6px', 
                borderRadius: '4px', 
                fontSize: '12px',
                fontWeight: 'bold'
              }}>
                {producto.enStock ? '✓ En Stock' : '✕ Sin Stock'}
              </span>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;