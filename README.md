# Breaking Bad API - SPA
Feito por: Lucas E. e Vinicius X.

---

## API Escolhida
Breaking Bad API - Documentação: https://www.mridul.tech/breaking-bad-api

---

## Funcionalidades
Single Page Application (SPA) desenvolvida em React que consome a API pública de Breaking Bad. A aplicação permite consultar informações sobre personagens, episódios, falas e mortes da série, com interface baseada em fichas criminais. Permite:
- Busca de personagens e exibição em ficha criminal
- Listagem de episódios com detalhes
- Consulta de falas famosas da série
- Consulta de mortes com causas e responsáveis
- Filtro local de personagens por nome (em tempo real)
- Rota dinâmica para detalhes de personagens (`/character/:id`)
- Menu de navegação com destaque da rota ativa
- Página 404 para rotas inexistentes

---

## Como Executar Localmente (bash)
# Clone o repositório
git clone https://github.com/LucasEBR/Breaking-Bad-API.git

# Acesse a pasta
cd Breaking-Bad-API

# Instale as dependências + react-router-dom
npm install

# Execute o projeto
npm run dev