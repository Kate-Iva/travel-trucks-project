import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button/Button';
import styles from './CatalogList.module.css';
import { selectCatalogList, selectIsLoading, selectError, selectTotalCampers } from '../../redux/campers/selectors.js';
import { Fragment, useEffect, useState } from 'react';
import { fetchCampers } from '../../redux/campers/operations.js';
import CatalogItem from '../CatalogItem/CatalogItem.jsx';
import Loader from '../Loader/Loader.jsx';
const CatalogList = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCatalogList);
  const totalCampers = useSelector(selectTotalCampers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [page, setPage] = useState(1);
  const limit = 4;
  
  useEffect(() => {
    const params = { page, limit };
    dispatch(fetchCampers(params));
    window.scrollTo(0, 0);
  }, [dispatch, page]); 
  
  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };
  if (isLoading && page === 1) return <Loader />;
  if (error) return <p>Error loading campers: {error}</p>;
  const displayedCampers = campers; 
  const isLoadMoreDisabled = displayedCampers.length >= totalCampers; 
  return (
    <article className={styles.campersListWrapper}>
      {displayedCampers?.map((camper) => (
        <Fragment key={camper.id}>
          <CatalogItem camper={camper}/>
        </Fragment>
      ))}
      {!isLoadMoreDisabled && (
        <Button
          className={styles.loadMoreBtn}
          onClick={loadMore}
          label="Load more"
          disabled={isLoadMoreDisabled}
        />
      )}
    </article>
  );
};
export default CatalogList;
