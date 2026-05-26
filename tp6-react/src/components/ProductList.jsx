import React, { useState } from 'react';
import Card from './Card.jsx'; 

const ProductList = () => {
 
  const productosIniciales = [
    { id: 1, nombre: "Placa de Video RTX", precio: 350000, categoria: "Electrónica", enStock: true, imagen: "https://imgs.search.brave.com/F886ZFwZiTUFMU1j0BswD40n1IXyzAp4vKTETInyisg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/Xzg1MTY4OC1NTEE5/OTUyNDYwMjM0NF8x/MjIwMjUtRS53ZWJw" },
    { id: 2, nombre: "Monitor 24' 144Hz", precio: 180000, categoria: "Electrónica", enStock: false, imagen: "https://imgs.search.brave.com/rW8TBxIuunWmtbjI_52zfDF5qhJmwLMTddd5GC_IWqs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFKVzRWV3lISEwu/anBn" },
    { id: 3, nombre: "Remera de Algodón", precio: 15000, categoria: "Ropa", enStock: true, imagen: "https://imgs.search.brave.com/GDffOJOyvV_Tgfj_ny5zWru9DG2ZJc9EV1nn3ctIogk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hY2Ru/LXVzLm1pdGllbmRh/bnViZS5jb20vc3Rv/cmVzLzAwMS8xNTAv/MTY5L3Byb2R1Y3Rz/LzU1NzA0NjE3XzEy/NjA2MzgyNzQwOTQ5/MzJfNjY0MTA2MDUw/MTAzMzg0NDczNl9u/LTRlNjBhMTQ2MTY4/OTdhNjgwYTE1ODcz/MjQwODc5NTU5LTI0/MC0wLmpwZw" },
    { id: 4, nombre: "Campera de Abrigo", precio: 45000, categoria: "Ropa", enStock: true, imagen: "https://imgs.search.brave.com/8xGcaHdmMlcqxSgA_UPM17U6PWuKi8GSeHTZU7xq1NY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hY2Ru/LXVzLm1pdGllbmRh/bnViZS5jb20vc3Rv/cmVzLzAwMS8yMDEv/NDQzL3Byb2R1Y3Rz/LzJlNDZmYjExLTdk/ODctNDM2Ny1hNjM4/LTk1MWQ0MGJiY2U5/Ni05MjViMmMxNjdj/NjYwYzlmNGExNzI3/NzEwODA4MTcwNi00/ODAtMC53ZWJw" },
    { id: 5, nombre: "Cafetera Express", precio: 95000, categoria: "Hogar", enStock: false, imagen: "https://imgs.search.brave.com/HM5LWU8Omtz806X31px04sGb0FWsRUgRUWsr8aNvYeI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/Xzk0MzA3Ni1NTFU3/NzczODA0MDE4NV8w/NzIwMjQtVi53ZWJw" },
    { id: 6, nombre: "Licuadora Pro", precio: 38000, categoria: "Hogar", enStock: true, imagen: "https://imgs.search.brave.com/w7RxZAPI7xiG5Id3bbCM-Z9DNLkgKri3hBziakjnTHM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9OUV9OUF83/NjU3MTktTUxBODcz/MDQyMzY1MzZfMDcy/MDI1LU8ud2VicA" }
  ];

  
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas');
  const [soloEnStock, setSoloEnStock] = useState(false);

  
  const productosFiltrados = productosIniciales.filter(producto => {
    
    const pasaCategoria = categoriaSeleccionada === 'Todas' || producto.categoria === categoriaSeleccionada;
    
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
      <h3 style={{ color: '#646cff' }}> Lista de Productos Filtrable 🛒</h3>
      
      
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

      
      {productosFiltrados.length === 0 ? (
        
        <p style={{ textAlign: 'center', color: '#ff4655', fontWeight: 'bold', fontSize: '18px', margin: '40px 0' }}>
          ❌ No hay productos que coincidan con la búsqueda.
        </p>
      ) : (
        
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          {productosFiltrados.map(producto => (
            <Card 
              key={producto.id} 
              titulo={producto.nombre} 
              descripcion={`Categoría: ${producto.categoria}`} 
              imagen={producto.imagen} 
              precio={producto.precio}
            >
              
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