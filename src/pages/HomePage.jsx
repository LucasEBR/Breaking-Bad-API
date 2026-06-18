import { useState, useEffect } from 'react';
import { fetchAllCharacters } from '../services/api'; // <-- nova função
import SearchBar from '../components/SearchBar';
import './HomePage.css';

function HomePage() {
  const [personagens, setPersonagens] = useState([]); // lista completa
  const [personagensFiltrados, setPersonagensFiltrados] = useState([]); // lista filtrada
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filtro, setFiltro] = useState(''); // texto do filtro

  // Carrega TODOS os personagens ao montar
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

  // Filtro local - executa quando o texto ou a lista mudar
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
        
        {/* CAMPO DE FILTRO - sem botão, filtra em tempo real */}

<SearchBar 
  value={filtro}
  onChange={setFiltro}
  placeholder="Buscar personagem..."
/>
      </div>

      <div className="cards-grid">
        {personagensFiltrados.map(p => (
          <div key={p.id} className="card">
            <img src={p.image_url} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.portrayed}</p>
          </div>
        ))}
        {personagensFiltrados.length === 0 && (
          <p className="sem-resultados">Nenhum personagem encontrado</p>
        )}
      </div>
    </div>
  );
}

export default HomePage;