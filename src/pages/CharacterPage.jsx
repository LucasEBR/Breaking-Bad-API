import { useParams } from 'react-router-dom';
import HomePage from './HomePage';

function CharacterPage() {
  const { id } = useParams();

  return <HomePage initialId={id} />;
}

export default CharacterPage;