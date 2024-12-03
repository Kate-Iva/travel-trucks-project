import FavoriteList from '../../components/FavoriteList/FavoriteList.jsx';
import styles from './FavoritePage.module.css';
const FavoritePage = () => {
  return (
    <section className={styles.catalog}>
      <FavoriteList />
    </section>
  );
};

export default FavoritePage;