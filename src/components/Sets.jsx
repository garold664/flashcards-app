import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FlashCards from './FlashCards';

const Sets = () => {
  const sets = useSelector((state) => state.flash.sets);
  return (
    <ul>
      {sets &&
        sets.map((set) => (
          <li>
            <h2>{set.name}</h2>
            <p>{set.description}</p>
            <Link to={`set?id=${set.id}`}>Open set</Link>
          </li>
        ))}
    </ul>
  );
};

export default Sets;
