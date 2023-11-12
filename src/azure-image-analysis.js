import React, { useState } from 'react';
import analyzeImage from './azure-image-analysis.js';

function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [analysisResults, setAnalysisResults] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyzeClick = async () => {
    setIsAnalyzing(true);
    const results = await analyzeImage(imageUrl);
    setAnalysisResults(results);
    setIsAnalyzing(false);
  };

  const DisplayResults = ({ results }) => (
    <div>
      <h2>Resultados del análisis</h2>
      <img src={imageUrl} alt='Analyzed' />
      <pre>{JSON.stringify(results, null, 2)}</pre>
    </div>
  );

  return (
    <div>
      <h1>Título</h1>
      <input
        type='text'
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        placeholder='Ingrese la URL de la imagen'
      />
      <button onClick={handleAnalyzeClick}>Analizar imagen</button>
      {isAnalyzing ? <p>Analyzing...</p> : null}
      {analysisResults ? <DisplayResults results={analysisResults} /> : null}
    </div>
  );
}

export default App;
