import './HomePage.css';
import { fetchCharacter } from '../services/api';
import CharacterInfo from '../components/CharacterInfo';
import { useState, useEffect } from 'react';

function HomePage({ initialId = '' }) {
  const [personagem, setPersonagem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchId, setSearchId] = useState(initialId);

  useEffect(() => {
    const controller = new AbortController();

    return () => {
      controller.abort();
    };
  }, []);

  useEffect(() => {
    if (personagem) {
      document.title = personagem.name;
    } else {
      document.title = 'Breaking Bad API';
    }
  }, [personagem]);
  useEffect(() => {
  if (initialId) {
    setSearchId(initialId);
  }
}, [initialId]);

useEffect(() => {
  const carregarPersonagem = async () => {
    if (!searchId || !initialId) return;

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

  carregarPersonagem();
}, [searchId, initialId]);

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

          <button onClick={buscarPersonagem}>
            BUSCAR
          </button>
        </div>
      </div>

      {loading && (
        <div className="loading">
          BUSCANDO...
        </div>
      )}

      {error && (
        <div className="error">
          ERRO: {error}
        </div>
      )}

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
              <img
                src={personagem.image_url}
                alt={personagem.name}
              />
            </div>

            <CharacterInfo personagem={personagem} />
          </div>

          <div className="ocupacao-area">
            <h4>OCUPAÇÕES / CRIMES</h4>

            <ul className="ocupacao-list">
              {personagem.occupation?.map((occ, idx) => (
                <li key={idx}>
                  • {occ}
                </li>
              ))}
            </ul>
          </div>

          <div className="apareceu-em">
            <strong>APARIÇÕES:</strong>
            <br />

            {personagem.appearances?.map((ep, idx) => (
              <span key={idx}>
                TEMP {ep}{' '}
              </span>
            ))}

            <p>
              <strong>TOTAL DE EPISÓDIOS:</strong>{' '}
              {personagem.episodes_count}
            </p>
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