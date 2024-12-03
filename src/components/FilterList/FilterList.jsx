import { useDispatch, useSelector } from 'react-redux';
import styles from './FilterList.module.css';
import { selectCatalogList } from '../../redux/campers/selectors.js';
import { selectLocation, selectBodyType, selectFeatures } from '../../redux/filters/selectors.js';
import { Fragment } from 'react';
import { useEffect } from 'react';
import { fetchCampers } from '../../redux/campers/operations.js';
import CatalogItem from '../CatalogItem/CatalogItem.jsx';
const FilterList = () => {
  const dispatch = useDispatch();


  const allCampers = useSelector(selectCatalogList);
  const location = useSelector(selectLocation);
  const form = useSelector(selectBodyType);
  const features = useSelector(selectFeatures);
 
  useEffect(() => {
 
    dispatch(fetchCampers({}));
  }, [dispatch]);


  const filterCampers = (campers) => {
    return campers.filter(camper => {
      const matchesLocation = location ? camper.location.includes(location) : true;

      const matchesType = form ? camper.form === form : true;

      const matchesFeatures = Object.entries(features).every(([feature, isActive]) => {
        return !isActive || camper[feature]; 
      });
      return matchesLocation && matchesType && matchesFeatures;
    });
  };
 
  const filteredCampers = filterCampers(allCampers);
  
  return (
    <article className={styles.filterListWrapper}>
      {filteredCampers.length > 0 ? (
        filteredCampers.map((camper) => (
          <Fragment key={camper.id}>
            <CatalogItem camper={camper} />
          </Fragment>
        ))
      ) : (
        <p>No campers match the selected filters.</p> 
      )}
    </article>
  );
};
export default FilterList;