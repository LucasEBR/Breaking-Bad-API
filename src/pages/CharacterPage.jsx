import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchCharacter } from '../services/api';
import CharacterInfo from '../components/CharacterInfo';
import './HomePage-CharacterPage.css';

function CharacterPage() {
  const { id } = useParams();
  const [personagem, setPersonagem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const carregar = async () => {
      try {
        const data = await fetchCharacter(id);
        setPersonagem(data);
      } catch {
        setError('Personagem não encontrado');
      } finally {
        setLoading(false);
      }
    };
    carregar();
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
        <CharacterInfo personagem={personagem} />
        <div className="footer-ficha">
          ESTE DOCUMENTO É CONFIDENCIAL.
        </div>
      </div>
    </div>
  );
}

export default CharacterPage;