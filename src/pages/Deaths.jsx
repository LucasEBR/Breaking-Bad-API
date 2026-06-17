import { useState, useEffect } from 'react';
import './Deaths.css';

function Deaths() {
  const [morte, setMorte] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchId, setSearchId] = useState('');

  useEffect(() => {
    return () => {
      console.log('Deaths desmontada');
    };
  }, []);

  const buscarMorte = async () => {
    if (!searchId) return;

    setLoading(true);
    setError(null);
    setMorte(null);

    try {
      const response = await fetch(`/api-proxy/api/breaking-bad/deaths/${searchId}`);
      const data = await response.json();

      if (data.success && data.data) {
        setMorte(data.data);
      } else {
        setError('Morte não encontrada');
      }
    } catch (err) {
      setError('Erro ao buscar morte');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="deaths-container">
      <div className="search-section">
        <h2>ARQUIVO DE ÓBITOS</h2>
        <div className="input-group">
          <input
            type="number"
            placeholder="ID DA MORTE (1-65)"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            min="1"
            max="65"
          />
          <button onClick={buscarMorte}>BUSCAR</button>
        </div>
      </div>

      {loading && <div className="loading">BUSCANDO ÓBITO...</div>}
      {error && <div className="error">ERRO: {error}</div>}

      {morte && (
        <div className="ficha-morte">
          <div className="header-ficha">
            <h1>DEPARTAMENTO DE JUSTIÇA</h1>
            <h3>REGISTRO DE ÓBITO / HOMICÍDIO</h3>
          </div>
          
          <div className="morte-id">
            ID: #{morte.id}
          </div>

          <div className="morte-dados">
            <div className="dados-principais">
              <p><strong>VÍTIMA:</strong> {morte.death}</p>
              <p><strong>CAUSA DA MORTE:</strong> {morte.cause}</p>
              <p><strong>RESPONSÁVEL:</strong> {morte.responsible}</p>
              <p><strong>ÚLTIMAS PALAVRAS:</strong> {morte.last_words}</p>
              <p><strong>TEMPORADA:</strong> {morte.season}</p>
              <p><strong>SÉRIE:</strong> {morte.series}</p>
            </div>
          </div>

          <div className="footer-ficha">
            ESTE DOCUMENTO É CONFIDENCIAL.
          </div>
        </div>
      )}
    </div>
  );
}

export default Deaths;