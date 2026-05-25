import React from 'react';

// Usamos destructuring en los parámetros y le ponemos un precio por defecto de 0 
const Card = ({ titulo, descripcion, imagen, precio = 0, children }) => {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      margin: '15px',
      maxWidth: '280px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      backgroundColor: '#2a2a2a',
      color: '#fff',
      display: 'inline-block',
      verticalAlign: 'top',
      textAlign: 'left'
    }}>
      {/* Mostramos la imagen si nos pasan una URL [cite: 71] */}
      <img src={imagen} alt={titulo} style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '4px' }} />
      
      <h3 style={{ margin: '10px 0 5px 0', color: '#646cff' }}>{titulo}</h3>
      <p style={{ fontSize: '14px', color: '#ccc', minHeight: '40px' }}>{descripcion}</p>
      <p style={{ fontWeight: 'bold', margin: '10px 0', color: '#4caf50' }}>Precio: ${precio}</p>
      
      {/* El children sirve por si queremos meter más contenido adentro de la tarjeta [cite: 71] */}
      <div>{children}</div>
    </div>
  );
};

export default Card;