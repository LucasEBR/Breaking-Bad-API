import { NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <div className="header-breaking">
      <div className="periodic-logo">
        <div className="element-cell">
          <span className="atomic-number">35</span>
          <span className="element-symbol">Br</span>
          <span className="element-name">BREAKING</span>
        </div>
        <div className="element-cell">
          <span className="atomic-number">56</span>
          <span className="element-symbol">Ba</span>
          <span className="element-name">BAD</span>
        </div>
        <div className="element-cell">
          <span className="atomic-number">15</span>
          <span className="element-symbol">P</span>
          <span className="element-name">API</span>
        </div>
      </div>
      <nav>
        <NavLink to="/">Ficha Criminal</NavLink>
        <NavLink to="/episodes">Aparições</NavLink>
        <NavLink to="/quotes">Gravações</NavLink>
        <NavLink to="/deaths">Obtuário</NavLink>
      </nav>
    </div>
  )
}

export default Header