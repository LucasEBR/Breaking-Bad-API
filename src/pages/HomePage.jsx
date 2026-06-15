import { useState } from 'react';
import './HomePage.css';

function HomePage() {
  const [personagem, setPersonagem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchId, setSearchId] = useState('');

  const buscarPersonagem = async () => {
    if (!searchId) return;

    setLoading(true);
    setError(null);
    setPersonagem(null);

    try {
      const response = await fetch(`/api-proxy/api/breaking-bad/characters/${searchId}`);
      const data = await response.json();

      if (data.success && data.data) {
        setPersonagem(data.data);
      } else {
        setError('Personagem não encontrado');
      }
    } catch (err) {
      setError('Erro ao buscar personagem');
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
              <p><strong>NOME COMPLETO:</strong> {personagem.full_name?.toUpperCase() || personagem.name?.toUpperCase()}</p>
              <p><strong>ALCUNHA:</strong> {personagem.name === "Walter White" ? "HEISENBERG" : personagem.name === "Jesse Pinkman" ? "CAPTAIN COOK" : "N/A"}</p>
              <p><strong>DATA DE NASCIMENTO:</strong> {personagem.birth_date || "DESCONHECIDA"}</p>
              <p><strong>INTERPRETADO POR:</strong> {personagem.portrayed}</p>
              <p><strong>STATUS:</strong> {personagem.name === "Walter White" ? "DECEDIDO" : "ATIVO"}</p>
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