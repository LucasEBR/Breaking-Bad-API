import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchCharacter } from '../services/api';
import './CharacterInfo.css';

function CharacterInfo() {
  const { id } = useParams();
  const [personagem, setPersonagem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const carregarPersonagem = async () => {
      try {
        const data = await fetchCharacter(id);
        setPersonagem(data);
      } catch (err) {
        setError('Personagem não encontrado');
      } finally {
        setLoading(false);
      }
    };
    carregarPersonagem();
  }, [id]);

  if (loading) return <div className="loading">CARREGANDO...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!personagem) return <div className="error">Personagem não encontrado</div>;

  return (
    <div className="criminal-container">
      <Link to="/" className="back-button">← VOLTAR</Link>

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
              (personagem.full_name || personagem.name).toUpperCase()
            }</p>
            
            {personagem.isHeisenberg && (
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
    </div>
  );
}

export default CharacterInfo;