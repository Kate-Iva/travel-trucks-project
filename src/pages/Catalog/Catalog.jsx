import CatalogList from '../../components/CatalogList/CatalogList.jsx';
import CatalogSidebar from '../../components/CatalogSidebar/CatalogSidebar.jsx';
import styles from './Catalog.module.css';

const Catalog = () => {
  return (
    <section className={styles.catalog}>
      <CatalogSidebar />
      <CatalogList />
    </section>
  );
};

export default Catalog;