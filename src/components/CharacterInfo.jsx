function CharacterInfo({ personagem }) {
  return (
    <div className="dados-completos">
      {/* ID */}
      <div className="criminal-id">
        ID: #{personagem.id}
      </div>

      {/* FOTO + DADOS PESSOAIS */}
      <div className="foto-dados">
        <div className="foto-area">
          <img src={personagem.image_url} alt={personagem.name} />
        </div>
        <div className="dados-pessoais">
          <p><strong>NOME COMPLETO:</strong> {(personagem.full_name || personagem.name).toUpperCase()}</p>
          {personagem.isHeisenberg && <p><strong>ALCUNHA:</strong> HEISENBERG</p>}
          <p><strong>DATA DE NASCIMENTO:</strong> {personagem.birth_date || "DESCONHECIDA"}</p>
          <p><strong>INTERPRETADO POR:</strong> {personagem.portrayed}</p>
        </div>
      </div>

      {/* OCUPAÇÕES */}
      <div className="ocupacao-area">
        <h4>OCUPAÇÕES / CRIMES</h4>
        <ul className="ocupacao-list">
          {personagem.occupation?.map((occ, idx) => (
            <li key={idx}>• {occ}</li>
          ))}
        </ul>
      </div>

      {/* APARIÇÕES */}
      <div className="apareceu-em">
        <strong>APARIÇÕES:</strong><br />
        {personagem.appearances?.map((ep, idx) => (
          <span key={idx}>TEMP {ep}</span>
        ))}
        <p><strong>TOTAL DE EPISÓDIOS:</strong> {personagem.episodes_count}</p>
      </div>
    </div>
  );
}

export default CharacterInfo;