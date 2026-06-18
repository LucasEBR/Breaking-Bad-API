import { useState, useEffect } from 'react';
import { fetchAllCharacters } from '../services/api';
import SearchBar from '../components/SearchBar';
import Card from '../components/Card';
import './HomePage.css';

function HomePage() {
  const [personagens, setPersonagens] = useState([]);
  const [personagensFiltrados, setPersonagensFiltrados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filtro, setFiltro] = useState('');

  useEffect(() => {
    const carregarTodos = async () => {
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
  }, []);

  useEffect(() => {
    const filtrados = personagens.filter(p => 
      p.name.toLowerCase().includes(filtro.toLowerCase())
    );
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
          placeholder="Buscar personagem..."
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