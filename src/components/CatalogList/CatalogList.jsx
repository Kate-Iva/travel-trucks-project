import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button/Button';
import CatalogItem from '../CatalogItem/CatalogItem.jsx';
import styles from './CatalogList.module.css';
import { selectCatalogList, selectIsLoading, selectError } from '../../redux/campers/selectors.js';
import { Fragment, useEffect, useState } from 'react';
import { fetchCampers } from '../../redux/campers/operations.js';

const CatalogList = () => {

  const dispatch = useDispatch();
  const campers = useSelector(selectCatalogList);
  
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const [page, setPage] = useState(1);
  const limit = 4;

  useEffect(() => {
    const params = {page, limit};
console.log(page, limit);

    dispatch(fetchCampers(params));
  }, [page, limit, dispatch]);

  console.log(campers);

if(isLoading) return <p>Loading</p>;
if(error) return <p>Error loading campers: {error} </p>;

  return (
    <article className={styles.campersListWrapper}>
      {campers?.map((camper) => {

        return (
          <Fragment key={camper.id}>
            <CatalogItem camper={camper} />
          </Fragment>
        );
      })}

      <Button
        className={styles.loadMoreBtn}
        onClick={() => setPage((prevPage) => prevPage + 1)}
        label="Load more"
      >
      </Button>
    </article>
  );
};

export default CatalogList;