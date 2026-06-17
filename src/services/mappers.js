export const mapCharacter = (apiData) => ({
  id: apiData.id,
  name: apiData.name,
  fullName: apiData.full_name === "unknown" ? apiData.name : apiData.full_name,
  portrayed: apiData.portrayed,
  image_url: apiData.image_url,
  birthDate: apiData.birth_date === "unknown" ? null : apiData.birth_date,
  occupation: apiData.occupation || [],
  episodesCount: apiData.episodes_count,
  appearances: apiData.appearances || [],
  isHeisenberg: apiData.name === "Walter White"
});