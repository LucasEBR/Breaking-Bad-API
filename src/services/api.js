import { mapCharacter } from './mappers';

const BASE_URL = '/api-proxy/api/breaking-bad';

export const fetchCharacter = async (id) => {
  const response = await fetch(`${BASE_URL}/characters/${id}`);
  const data = await response.json();
  
  if (!data.success) throw new Error('Personagem não encontrado');
  
  return mapCharacter(data.data);
};