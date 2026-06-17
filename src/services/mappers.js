export const mapCharacter = (apiData) => ({
  id: apiData.id,
  name: apiData.name,
  fullName: apiData.full_name === "unknown" ? apiData.name : apiData.full_name,
  portrayed: apiData.portrayed,
  image: apiData.image_url,
  birthDate: apiData.birth_date === "unknown" ? null : apiData.birth_date,
  occupation: apiData.occupation || [],
  episodesCount: apiData.episodes_count,
  appearances: apiData.appearances || [],
  isHeisenberg: apiData.name === "Walter White"
});

export const mapEpisode = (apiData) => ({
  id: apiData.id,
  episodeId: apiData.episode_id,
  title: apiData.title,
  season: apiData.season,
  episode: apiData.episode,
  airDate: apiData.air_date,
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
  victim: apiData.death,
  cause: apiData.cause,
  responsible: apiData.responsible,
  lastWords: apiData.last_words,
  season: apiData.season,
  series: apiData.series
});