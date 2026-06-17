function CharacterInfo({ personagem }) {
  return (
    <div className="dados-pessoais">
      <p>
        <strong>NOME COMPLETO:</strong>{" "}
        {(personagem.full_name || personagem.name).toUpperCase()}
      </p>

      {personagem.isHeisenberg && (
        <p>
          <strong>ALCUNHA:</strong> HEISENBERG
        </p>
      )}

      <p>
        <strong>DATA DE NASCIMENTO:</strong>{" "}
        {personagem.birth_date || "DESCONHECIDA"}
      </p>

      <p>
        <strong>INTERPRETADO POR:</strong> {personagem.portrayed}
      </p>
    </div>
  );
}

export default CharacterInfo;