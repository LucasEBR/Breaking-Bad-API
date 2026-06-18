import './Card.css';

function Card({ name, image, subtitle, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{subtitle}</p>
    </div>
  );
}

export default Card;