import { useEffect } from 'react';
import './NotFound.css';

function NotFound() {
  useEffect(() => {
    document.title = 'Há um deus pombo?';
  }, []);

  return (
    <div className="notfound-container">
      <h1>404 - Forbidden Domain</h1>
      <p className="p2">Esta página não existe neste domínio</p>
      <img src="/forbiddendomain-y.webp" alt="404" />
    </div>
  );
}

export default NotFound;