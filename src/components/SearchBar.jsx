import './SearchBar.css';

function SearchBar({ value, onChange, placeholder }) {
  return (
    <input
      type="text"
      placeholder={placeholder || "Buscar..."}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="search-bar"
    />
  );
}

export default SearchBar;