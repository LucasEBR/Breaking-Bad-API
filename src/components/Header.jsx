import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div>
      <h1>Breaking Bad API</h1>
      <nav>
        <NavLink to="/">Personagens</NavLink>
        <NavLink to="/episodes">Episódios</NavLink>
        <NavLink to="/quotes">Falas</NavLink>
        <NavLink to="/deaths">Mortes</NavLink>
      </nav>
    </div>
  )
}

export default Header