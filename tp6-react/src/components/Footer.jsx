import React from 'react';

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '10px', marginTop: '20px' }}>
      <p>&copy; {new Date().getFullYear()} - Todos los derechos reservados</p>
    </footer>
  );
};

export default Footer;