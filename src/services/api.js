import { mapCharacter, mapEpisode, mapQuote, mapDeath } from './mappers';

const BASE_URL = '/api-proxy/api/breaking-bad';

// Busca TODOS os personagens (1 a 56)
export const fetchAllCharacters = async () => {
  const promises = [];
  for (let i = 1; i <= 56; i++) {
    promises.push(fetch(`${BASE_URL}/characters/${i}`).then(res => res.json()));
  }
  const results = await Promise.all(promises);
  return results
    .filter(item => item.success) // remove falhas
    .map(item => mapCharacter(item.data));
};

export const fetchEpisode = async (id) => {
  const response = await fetch(`${BASE_URL}/episodes/${id}`);
  const data = await response.json();
  if (!data.success) throw new Error('Episódio não encontrado');
  return mapEpisode(data.data);
};

export const fetchQuote = async (id) => {
  const response = await fetch(`${BASE_URL}/quotes/${id}`);
  const data = await response.json();
  if (!data.success) throw new Error('Fala não encontrada');
  return mapQuote(data.data);
};

export const fetchDeath = async (id) => {
  const response = await fetch(`${BASE_URL}/deaths/${id}`);
  const data = await response.json();
  if (!data.success) throw new Error('Morte não encontrada');
  return mapDeath(data.data);
};