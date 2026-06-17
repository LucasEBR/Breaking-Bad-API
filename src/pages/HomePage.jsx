import { useState } from 'react';
import { fetchCharacter } from '../services/api';  // ← Import no topo
import './HomePage.css';

function HomePage() {
  // --- states ---
  const [personagem, setPersonagem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchId, setSearchId] = useState('');

  // --- busca ---
  const buscarPersonagem = async () => {
    if (!searchId) return;

    setLoading(true);
    setError(null);
    setPersonagem(null);

    try {
      const data = await fetchCharacter(searchId);
      setPersonagem(data);
    } catch (err) {
      setError(err.message || 'Erro ao buscar personagem');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="criminal-container">
      <div className="search-section">
        <h2>ARQUIVO CRIMINAL</h2>
        <div className="input-group">
          <input
            type="number"
            placeholder="ID DO PERP (1-56)"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            min="1"
            max="56"
          />
          <button onClick={buscarPersonagem}>BUSCAR</button>
        </div>
      </div>

      {loading && <div className="loading">BUSCANDO...</div>}
      {error && <div className="error">ERRO: {error}</div>}

      {personagem && (
        <div className="ficha-criminal">
          <div className="header-ficha">
            <h1>DEPARTAMENTO DE JUSTIÇA</h1>
            <h3>REGISTRO CRIMINAL / CONDENADO</h3>
          </div>
          
          <div className="criminal-id">
            ID: #{personagem.id}
          </div>

          <div className="foto-dados">
            <div className="foto-area">
              <img src={personagem.image_url} alt={personagem.name} />
            </div>
            <div className="dados-pessoais">
              <p><strong>NOME COMPLETO:</strong> {
                (personagem.full_name && personagem.full_name !== "unknown" 
                  ? personagem.full_name 
                  : personagem.name
                ).toUpperCase()
              }</p>
                
              {personagem.name === "Walter White" && (
                <p><strong>ALCUNHA:</strong> HEISENBERG</p>
              )}
              
              <p><strong>DATA DE NASCIMENTO:</strong> {personagem.birth_date || "DESCONHECIDA"}</p>
              <p><strong>INTERPRETADO POR:</strong> {personagem.portrayed}</p>
            </div>
          </div>

          <div className="ocupacao-area">
            <h4>OCUPAÇÕES / CRIMES</h4>
            <ul className="ocupacao-list">
              {personagem.occupation?.map((occ, idx) => (
                <li key={idx}>• {occ}</li>
              ))}
            </ul>
          </div>

          <div className="apareceu-em">
            <strong>APARIÇÕES:</strong><br />
            {personagem.appearances?.map((ep, idx) => (
              <span key={idx}>TEMP {ep}</span>
            ))}
            <p><strong>TOTAL DE EPISÓDIOS:</strong> {personagem.episodes_count}</p>
          </div>

          <div className="footer-ficha">
            ESTE DOCUMENTO É CONFIDENCIAL.
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;