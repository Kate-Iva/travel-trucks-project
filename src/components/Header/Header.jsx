import { NavLink } from 'react-router-dom';
import styles from './Header.module.css'; 
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {resetCampers} from '../../redux/campers/slice.js';

import icons from '../../images/icons.svg';

const Header = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  function handleClick() {
    dispatch(resetCampers());
      navigate('/');
    }

    function handleClickCatalog() {
      dispatch(resetCampers());
        navigate('/catalog');
      }

      function handleClickFavorite() {
        dispatch(resetCampers());
        navigate('/favorite');
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
            <NavLink onClick={handleClick} to="/" className={({ isActive }) => 
              isActive ? styles.active : "" } >
                 Home
            </NavLink> 
          </li>
          <li>
            <NavLink onClick={handleClickCatalog} to="/catalog" className={({ isActive }) => 
              isActive ? styles.active : "" }>
                Catalog
                </NavLink> 

          </li>
          <li>
                <NavLink onClick={handleClickFavorite} to="/favorite" className={({ isActive }) => 
              isActive ? styles.active : "" }>
                Favorite
                </NavLink> 

          </li>
        </ul>
      </nav>

    </header>
  );
};
export default Header;