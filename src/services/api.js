import { mapCharacter, mapEpisode, mapQuote, mapDeath } from './mappers';

const BASE_URL = '/api-proxy/api/breaking-bad';

export const fetchCharacter = async (id) => {
  const response = await fetch(`${BASE_URL}/characters/${id}`);
  const data = await response.json();
  if (!data.success) throw new Error('Personagem não encontrado');
  return mapCharacter(data.data);
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