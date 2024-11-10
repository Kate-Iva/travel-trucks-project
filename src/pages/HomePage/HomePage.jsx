import { NavLink } from 'react-router-dom';
import Button from '../../components/Button/Button.jsx';
import styles from './HomePage.module.css'; 
import { useDispatch } from 'react-redux';
import {resetCampers} from '../../redux/campers/slice.js';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(resetCampers());
      navigate('/');
    }

  return (
    <div className={styles.homePage}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.mainTitle}>Campers of your dreams</h1>
          <h2 className={styles.subTitle}>
            You can find everything you want in our catalog.
          </h2>
          <NavLink onClick={handleClick} to="/catalog">
            <Button label="View Now" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
