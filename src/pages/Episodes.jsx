import { fetchEpisode } from '../services/api';
import { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import './Episodes.css';

function Episodes() {
  const [episodio, setEpisodio] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchId, setSearchId] = useState('');

  useEffect(() => {
    return () => {
    };
  }, []);

  const buscarEpisodio = async () => {
    if (!searchId) return;

    setLoading(true);
    setError(null);
    setEpisodio(null);

    try {
const data = await fetchEpisode(searchId);
setEpisodio(data);
    } catch (err) {
      setError('Erro ao buscar episódio');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="episodes-container">
      <div className="search-section">
        <h2>ARQUIVO DE EPISÓDIOS</h2>
        <div className="input-group">
<SearchBar 
  value={searchId}
  onChange={setSearchId}
  placeholder="ID DO EP (1-62)"
/>
          <button onClick={buscarEpisodio}>BUSCAR</button>
        </div>
      </div>

      {loading && <div className="loading">BUSCANDO EPISÓDIO...</div>}
      {error && <div className="error">ERRO: {error}</div>}

      {episodio && (
        <div className="ficha-episodio">
          <div className="header-ficha">
            <h1>DEPARTAMENTO DE JUSTIÇA</h1>
            <h3>REGISTRO DE EPISÓDIO</h3>
          </div>
          
          <div className="episodio-id">
            ID: #{episodio.id} | {episodio.episode_id}
          </div>

          <div className="episodio-dados">
            <div className="dados-principais">
              <p><strong>TÍTULO:</strong> {episodio.title}</p>
              <p><strong>TEMPORADA:</strong> {episodio.season}</p>
              <p><strong>EPISÓDIO Nº:</strong> {episodio.episode}</p>
              <p><strong>DATA DE EXIBIÇÃO:</strong> {episodio.air_date}</p>
              <p><strong>SÉRIE:</strong> {episodio.series}</p>
            </div>
            
            <div className="personagens-area">
              <h4>PERSONAGENS NO EPISÓDIO</h4>
              <ul className="personagens-list">
                {episodio.characters?.map((personagem, idx) => (
                  <li key={idx}>• {personagem}</li>
                ))}
              </ul>
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

export default Episodes;