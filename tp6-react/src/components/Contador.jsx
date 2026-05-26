import React, { useState } from 'react'; 

const Contador = () => {
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
      <h3>Contador Interactivo </h3>
      
      <h1 style={{ 
        fontSize: '48px', 
        margin: '10px 0', 
        color: count > 0 ? '#4caf50' : '#ff4655' 
      }}>
        {count}
      </h1>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button 
          onClick={() => setCount(count - 1)} 
          disabled={count === 0}
          style={{ padding: '8px 15px', cursor: count === 0 ? 'not-allowed' : 'pointer' }}
        >
          -1
        </button>

        <button 
          onClick={() => setCount(0)}
          style={{ padding: '8px 15px' }}
        >
          Reset
        </button>

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