import { useDispatch, useSelector } from 'react-redux';
import styles from './FavoriteList.module.css';
import { selectFavorites } from '../../redux/favorites/selectors.js';
import { selectCatalogList } from '../../redux/campers/selectors.js'; 
import { Fragment,  useEffect } from 'react';
import { fetchCampers } from '../../redux/campers/operations.js';
import CatalogItem from '../CatalogItem/CatalogItem.jsx';


const FavoriteList = () => {
    const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites); 

  const allCampers = useSelector(selectCatalogList); 

  const favoriteCampers = allCampers.filter(camper => favorites.includes(camper.id));
  
  useEffect(() => {
    const params = { favoriteCampers };
    dispatch(fetchCampers(params));
    window.scrollTo(0, 0);
  }, [dispatch]); 

  return (
    <article className={styles.favoriteListWrapper}>
      {favoriteCampers.length > 0 ? (
        favoriteCampers.map((camper) => (
          <Fragment key={camper.id}>
            <CatalogItem camper={camper} /> 

          </Fragment>
        ))
      ) : (
        <p>No favorite campers selected.</p> 
      )}
    </article>
  );
};
export default FavoriteList;