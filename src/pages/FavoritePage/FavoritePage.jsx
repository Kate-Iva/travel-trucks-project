import FavoriteList from '../../components/CatalogList/CatalogList.jsx';
import CatalogSidebar from '../../components/CatalogSidebar/CatalogSidebar.jsx';
import styles from './FavoritePage.module.css';

const Catalog = () => {
  return (
    <section className={styles.catalog}>
      <CatalogSidebar />
      <FavoriteList />
    </section>
  );
};

export default Catalog;