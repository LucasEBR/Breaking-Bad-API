import { fetchQuote } from '../services/api';
import { useState, useEffect} from 'react';
import SearchBar from '../components/SearchBar';
import './Quotes.css';

function Quotes() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchId, setSearchId] = useState('');

  useEffect(() => {
  return () => {
  };
}, []);

  const buscarQuote = async () => {
    if (!searchId) return;

    setLoading(true);
    setError(null);
    setQuote(null);

    try {
const data = await fetchQuote(searchId);
setQuote(data);
    } catch (err) {
      setError('Erro ao buscar fala');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="quotes-container">
      <div className="search-section">
        <h2>ARQUIVO DE FALAS</h2>
        <div className="input-group">
<SearchBar 
  value={searchId}
  onChange={setSearchId}
  placeholder="ID DA FALA (1-86)"
/>
          <button onClick={buscarQuote}>BUSCAR</button>
        </div>
      </div>

      {loading && <div className="loading">BUSCANDO FALA...</div>}
      {error && <div className="error">ERRO: {error}</div>}

      {quote && (
        <div className="ficha-quote">
          <div className="header-ficha">
            <h1>DEPARTAMENTO DE JUSTIÇA</h1>
            <h3>REGISTRO DE TRANSCRIÇÃO</h3>
          </div>
          
          <div className="quote-id">
            ID: #{quote.id}
          </div>

          <div className="quote-dados">
            <div className="quote-texto">
              <span className="aspas">"</span>
              <p className="citacao">{quote.quote}</p>
              <span className="aspas">"</span>
            </div>
            
            <div className="quote-metadados">
              <p><strong>AUTOR:</strong> {quote.author}</p>
              <p><strong>SÉRIE:</strong> {quote.series}</p>
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

export default Quotes;