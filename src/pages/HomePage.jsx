import { useState, useEffect } from 'react';
import { fetchAllCharacters } from '../services/api';
import { useLocation } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import Card from '../components/Card';
import './HomePage-CharacterPage.css';

function HomePage() {
  const location = useLocation();
  const [personagens, setPersonagens] = useState([]);
  const [personagensFiltrados, setPersonagensFiltrados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filtro, setFiltro] = useState('');

  useEffect(() => {
    const carregarTodos = async () => {
      setLoading(true);
      try {
        const data = await fetchAllCharacters();
        setPersonagens(data);
        setPersonagensFiltrados(data);
      } catch (err) {
        setError('Erro ao carregar personagens');
      } finally {
        setLoading(false);
      }
    };
    carregarTodos();
  }, [location.key]); 

  useEffect(() => {
    const filtrados = personagens.filter(p => {
      const termo = filtro.toLowerCase().trim();
      if (!termo) return true;

      const idMatch = p.id === Number(termo);
      const nomeMatch = p.name.toLowerCase().includes(termo);

      return idMatch || nomeMatch;
    });
    setPersonagensFiltrados(filtrados);
  }, [filtro, personagens]);

  if (loading) return <div className="loading">CARREGANDO...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="criminal-container">
      <div className="search-section">
        <h2>ARQUIVO CRIMINAL</h2>
        <SearchBar
          value={filtro}
          onChange={setFiltro}
          placeholder="NOME OU ID DO PERP"
        />
      </div>

      <div className="cards-grid">
        {personagensFiltrados.map(p => (
          <Card
            key={p.id}
            name={p.name}
            image={p.image_url}
            subtitle={p.portrayed}
            onClick={() => window.location.href = `/character/${p.id}`}
          />
        ))}
        {personagensFiltrados.length === 0 && (
          <p className="sem-resultados">Nenhum personagem encontrado</p>
        )}
      </div>
    </div>
  );
}

export default HomePage;