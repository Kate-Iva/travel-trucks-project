import { NavLink } from 'react-router-dom';
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
            <NavLink to="/" className={({ isActive }) => 
              isActive ? styles.active : "" } >
                 Home
            </NavLink> 
          </li>
          <li>
            <NavLink to="/catalog" className={({ isActive }) => 
              isActive ? styles.active : "" }>
                Catalog
                </NavLink> 
          </li>
        </ul>
      </nav>

    </header>
  );
};
export default Header;