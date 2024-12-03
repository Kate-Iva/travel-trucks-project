import FilterList from '../../components/FilterList/FilterList.jsx';
import styles from './FilterPage.module.css';
import CatalogSidebar from '../../components/CatalogSidebar/CatalogSidebar.jsx';
const FilterPage = () => {
  return (
    <section className={styles.catalog}>
       <CatalogSidebar />
      <FilterList />
    </section>
  );
};

export default FilterPage;