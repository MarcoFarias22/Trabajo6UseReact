import React, { useState } from 'react'; // Importamos useState obligatoriamente

const Contador = () => {
  // Creamos el estado inicializado en 0
  const [count, setCount] = useState(0);

  return (
    <div style={{
      border: '2px dashed #646cff',
      borderRadius: '8px',
      padding: '20px',
      margin: '20px auto',
      maxWidth: '350px',
      backgroundColor: '#222',
      textAlign: 'center'
    }}>
      <h3>Desafío 3: Contador Interactivo 🔢</h3>
      
      {/* Aplicamos el color condicional: verde si es mayor a 0, rojo si es igual a 0 */}
      <h1 style={{ 
        fontSize: '48px', 
        margin: '10px 0', 
        color: count > 0 ? '#4caf50' : '#ff4655' 
      }}>
        {count}
      </h1>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        {/* Botón de Restar: se deshabilita si el contador llega a 0 */}
        <button 
          onClick={() => setCount(count - 1)} 
          disabled={count === 0}
          style={{ padding: '8px 15px', cursor: count === 0 ? 'not-allowed' : 'pointer' }}
        >
          -1
        </button>

        {/* Botón de Reset: vuelve a colocar el estado en 0 */}
        <button 
          onClick={() => setCount(0)}
          style={{ padding: '8px 15px' }}
        >
          Reset
        </button>

        {/* Botón de Sumar */}
        <button 
          onClick={() => setCount(count + 1)}
          style={{ padding: '8px 15px' }}
        >
          +1
        </button>
      </div>
    </div>
  );
};

export default Contador;