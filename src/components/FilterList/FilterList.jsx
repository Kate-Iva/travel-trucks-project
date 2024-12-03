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
  console.log('allCampers:', allCampers);

  const location = useSelector(selectLocation);
  console.log('Location:', location);

  const form = useSelector(selectBodyType);
console.log('Form:',  form);

  const features = useSelector(selectFeatures);
  console.log('Features:',  features );

  console.log('Filters:', { location, form, features });
 
  useEffect(() => {
 
    dispatch(fetchCampers({}));
  }, [dispatch]);


  const filterCampers = (campers) => {
    console.log('Campers:', campers);



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
  console.log('Filtered campers:', filteredCampers);
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