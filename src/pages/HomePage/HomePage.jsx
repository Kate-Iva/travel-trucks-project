import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button.jsx';
import styles from './HomePage.module.css'; // Імпортуємо стилі для HomePage
const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.mainTitle}>Campers of your dreams</h1>
          <h2 className={styles.subTitle}>
            You can find everything you want in our catalog.
          </h2>
          <Link to="/catalog">
            <Button label="View Now" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
