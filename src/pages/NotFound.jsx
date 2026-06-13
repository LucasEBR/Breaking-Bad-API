import './NotFound.css'

function NotFound() {
  return (
    <div className="notfound-container">
      <h1>404 - Forbidden Domain</h1>
      <p className="p1">Há um deus pombo?</p>
      <p className="p2">Esta página não existe neste domínio</p>
      <img src="/forbiddendomain-y.webp" alt="404" />
    </div>
  )
}

export default NotFound