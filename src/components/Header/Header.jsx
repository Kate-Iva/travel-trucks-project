import { Link } from 'react-router-dom';
import styles from './Header.module.css'; 
import { useNavigate } from 'react-router-dom';

import icons from '../../images/icons.svg';


const Header = () => {
  const navigate = useNavigate();

  function handleClick() {
      navigate('/');
    }
  

  return (
    <header>

      <div className={styles.logo}>
      <button onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div className={styles.iconWrap}>
        <svg className={styles.iconLogo} >
          <use href={`${icons}#icon-Logo`}></use>
        </svg>
      </div>
    </button>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link> 
          </li>
          <li>
            <Link to="/catalog">Catalog</Link> 
          </li>
        </ul>
      </nav>

    </header>
  );
};
export default Header;