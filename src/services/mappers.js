export const mapCharacter = (apiData) => ({
  id: apiData.id,
  name: apiData.name,
  full_name: apiData.full_name === "unknown" ? apiData.name : apiData.full_name,
  portrayed: apiData.portrayed,
  image_url: apiData.image_url,
  birth_date: apiData.birth_date === "unknown" ? null : apiData.birth_date,
  occupation: apiData.occupation || [],
  episodes_count: apiData.episodes_count,
  appearances: apiData.appearances || [],
  isHeisenberg: apiData.name === "Walter White"
});

export const mapEpisode = (apiData) => ({
  id: apiData.id,
  episode_id: apiData.episode_id,
  title: apiData.title,
  season: apiData.season,
  episode: apiData.episode,
  air_date: apiData.air_date,
  characters: apiData.characters || [],
  series: apiData.series
});

export const mapQuote = (apiData) => ({
  id: apiData.id,
  quote: apiData.quote,
  author: apiData.author,
  series: apiData.series
});

export const mapDeath = (apiData) => ({
  id: apiData.id,
  death: apiData.death,
  cause: apiData.cause,
  responsible: apiData.responsible,
  last_words: apiData.last_words,
  season: apiData.season,
  series: apiData.series
});