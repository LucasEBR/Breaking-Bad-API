import { NavLink } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer-breaking">
      <div className="footer-content">
        <div className="footer-line"></div>
        <p className="footer-text">
          <span className="meth-green">BREAKING BAD API</span> 
          <span className="separator">===</span>
          <NavLink to="/devs" className="creditos-link">
            SPA por L.E. e V.X.
          </NavLink>
          <span className="separator">===</span>
          <span className="dea-warning">CONFIDENCIAL</span>
        </p>
        <div className="footer-line"></div>
      </div>
    </footer>
  )
}

export default Footer