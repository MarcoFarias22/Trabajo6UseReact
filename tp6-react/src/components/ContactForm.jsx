import React, { useState } from 'react';

const ContactForm = () => {
  // (a) Campos controlados con useState
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  // (b) onSubmit con e.preventDefault() que muestra los datos en consola
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('--- Formulario Enviado ---');
    console.log({ nombre, email, mensaje });
    alert(`¡Gracias por tu mensaje, ${nombre}! Datos enviados a la consola.`);
  };

  // (d) Validación básica: botón deshabilitado si algún campo está vacío
  const botonDeshabilitado = nombre.trim() === '' || email.trim() === '' || mensaje.trim() === '';

  return (
    <div style={{
      border: '2px dashed #646cff',
      borderRadius: '8px',
      padding: '20px',
      margin: '20px auto',
      maxWidth: '450px',
      backgroundColor: '#222',
      textAlign: 'left',
      color: '#fff'
    }}>
      <h3 style={{ textAlign: 'center', color: '#646cff' }}>Desafío 4: Formulario de Contacto ✉️</h3>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Nombre:</label>
          <input 
            type="text" 
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #444', backgroundColor: '#333', color: '#fff' }}
            placeholder="Tu nombre aquí"
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #444', backgroundColor: '#333', color: '#fff' }}
            placeholder="correo@ejemplo.com"
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Mensaje:</label>
          <textarea 
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #444', backgroundColor: '#333', color: '#fff', minHeight: '80px', resize: 'vertical' }}
            placeholder="Escribí tu mensaje..."
          />
        </div>

        <button 
          type="submit" 
          disabled={botonDeshabilitado}
          style={{ 
            padding: '10px', 
            borderRadius: '4px', 
            border: 'none', 
            backgroundColor: botonDeshabilitado ? '#555' : '#4caf50', 
            color: '#fff', 
            fontWeight: 'bold',
            cursor: botonDeshabilitado ? 'not-allowed' : 'pointer' 
          }}
        >
          Enviar Mensaje
        </button>
      </form>

      {/* (c) Preview en vivo debajo del formulario */}
      <div style={{
        marginTop: '25px',
        padding: '12px',
        borderRadius: '6px',
        backgroundColor: '#1a1a1a',
        borderLeft: '4px solid #646cff'
      }}>
        <h4 style={{ margin: '0 0 10px 0', color: '#646cff' }}>👀 Preview en vivo:</h4>
        <p style={{ margin: '5px 0', fontSize: '14px' }}><strong>Nombre:</strong> {nombre || '<i>Esperando escritura...</i>'}</p>
        <p style={{ margin: '5px 0', fontSize: '14px' }}><strong>Email:</strong> {email || '<i>Esperando escritura...</i>'}</p>
        <p style={{ margin: '5px 0', fontSize: '14px', whiteSpace: 'pre-wrap' }}><strong>Mensaje:</strong> {mensaje || '<i>Esperando escritura...</i>'}</p>
      </div>
    </div>
  );
};

export default ContactForm;