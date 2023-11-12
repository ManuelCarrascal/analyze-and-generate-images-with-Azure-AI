import React, { useState, useEffect } from 'react';

function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [isConfigured, setIsConfigured] = useState(false);

  useEffect(() => {
    checkConfiguration();
  }, []);

  const checkConfiguration = () => {
    const configured = true;

    setIsConfigured(configured);
  };

  return (
    <div>
      <h1>Título</h1>
      {!isConfigured && (
        <p>Advertencia: La aplicación no está configurada correctamente.</p>
      )}
      <input
        type='text'
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        placeholder='Ingrese la URL de la imagen'
      />
      <button onClick={() => console.log('Analizar imagen')}>
        Analizar imagen
      </button>
      <button onClick={() => console.log('Generar imagen')}>
        Generar imagen
      </button>
    </div>
  );
}

export default App;
