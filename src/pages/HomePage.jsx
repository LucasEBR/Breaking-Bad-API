import './HomePage.css';
import { useState, useEffect } from 'react';

function HomePage() {
  // --- ESTADOS ---
  // personagem: armazena os dados do personagem buscado (começa como null)
  // loading: indica se está carregando (começa como false)
  // error: armazena mensagem de erro (começa como null)
  // searchId: armazena o ID digitado pelo usuário (string vazia inicial)
  const [personagem, setPersonagem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchId, setSearchId] = useState('');
useEffect(() => {
  return () => {
    console.log('HomePage desmontada');
  };
}, []);

useEffect(() => {
  if (personagem) {
    document.title = personagem.name;
  } else {
    document.title = 'Breaking Bad API';
  }
}, [personagem]);

  // async/await esperar a resposta da API antes de continuar
  const buscarPersonagem = async () => {
    // se vazio não faz nada
    if (!searchId) return;

    // Atualiza estados
    setLoading(true);
    setError(null);
    setPersonagem(null);

    try {
      // fetch -> faz a requisição HTTP
      const response = await fetch(`/api-proxy/api/breaking-bad/characters/${searchId}`);
      
      // converte json -> objeto js
      const data = await response.json();

      // validacao
      if (data.success && data.data) {
        setPersonagem(data.data); // guarda dados
      } else {
        setError('Personagem não encontrado'); // ou mostra erro
      }
    } catch (err) {
      // Captura erros de rede
      setError('Erro ao buscar personagem');
    } finally {
      // finally: executa independente de sucesso ou erro
      setLoading(false); // Desativa o indicador de carregamento
    }
  };

  return (
    <div className="criminal-container">
      <div className="search-section">
        <h2>ARQUIVO CRIMINAL</h2>
        <div className="input-group">
          {/* input */}
          <input
            type="number"
            placeholder="ID DO PERP (1-56)"
            value={searchId}                    // Valor controlado pelo estado
            onChange={(e) => setSearchId(e.target.value)} // Atualiza estado ao digitar
            min="1"
            max="56"
          />
          {/* botao */}
          <button onClick={buscarPersonagem}>BUSCAR</button>
        </div>
      </div>

      {/* se loading = true/se error = true */}
      {loading && <div className="loading">BUSCANDO...</div>}
      {error && <div className="error">ERRO: {error}</div>}

      {/* exibe a ficha se personagem existe */}
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
              {/* imagem*/}
              <img src={personagem.image_url} alt={personagem.name} />
            </div>
            <div className="dados-pessoais">
              {/* full_name, mas se for unknown ou vazio, usa name */}
              <p><strong>NOME COMPLETO:</strong> {
                (personagem.full_name && personagem.full_name !== "unknown" 
                  ? personagem.full_name 
                  : personagem.name
                ).toUpperCase()
              }</p>
                
              {/* só aparece para Heisenberg */}
              {personagem.name === "Walter White" && (
                <p><strong>ALCUNHA:</strong> HEISENBERG</p>
              )}
              
              {/* data nascimento */}
              <p><strong>DATA DE NASCIMENTO:</strong> {personagem.birth_date || "DESCONHECIDA"}</p>
              
              {/* ator */}
              <p><strong>INTERPRETADO POR:</strong> {personagem.portrayed}</p>
            </div>
          </div>

          {/* lista crimes .map */}
          <div className="ocupacao-area">
            <h4>OCUPAÇÕES / CRIMES</h4>
            <ul className="ocupacao-list">
              {personagem.occupation?.map((occ, idx) => (
                <li key={idx}>• {occ}</li>  // key={idx} é obrigatório para listas em React
              ))}
            </ul>
          </div>

          {/* aparicoes*/}
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