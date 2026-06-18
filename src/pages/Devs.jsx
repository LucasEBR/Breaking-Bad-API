import './Devs.css'

function Devs() {
  const devs = [
    {
      nome: "L.E.",
      foto: "/valter.webp",
      ocupacao: "Desenvolvedor Frontend",
      funcao: "Arquitetura React",
      status: "ATIVO",
      observacao: "Especialista em hooks"
    },
    {
      nome: "V.X.",
      foto: "/jessico.webp",
      ocupacao: "Desenvolvedor Frontend",
      funcao: "Arquitetura React",
      status: "ATIVO",
      observacao: "Especialista em cooks"
    }
  ]

  return (
    <div className="devs-container">
      <div className="search-section">
        <h2>ARQUIVO DE IDENTIFICAÇÃO</h2>
        <h3>DESENVOLVEDORES / CRIADORES DA SPA</h3>
      </div>

      <div className="fichas-duplas">
        {devs.map((dev, index) => (
          <div key={index} className="ficha-dev">
            <div className="header-ficha">
              <h1>DEPARTAMENTO DE JUSTIÇA</h1>
              <h3>REGISTRO DE DESENVOLVEDOR</h3>
            </div>
            
            <div className="criminal-id">
              ID: #{index + 1}
            </div>

            <div className="foto-dados-dev">
              <div className="foto-area">
                <img src={dev.foto} alt={dev.nome} />
              </div>
              <div className="dados-pessoais">
                <p><strong>NOME DE CÓDIGO:</strong> {dev.nome}</p>
                <p><strong>OCUPAÇÃO:</strong> {dev.ocupacao}</p>
                <p><strong>OBSERVAÇÃO:</strong> {dev.observacao}</p>
              </div>
            </div>

            <div className="footer-ficha">
              ESTE DOCUMENTO É CONFIDENCIAL.
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Devs