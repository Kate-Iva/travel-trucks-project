import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button/Button';
import CatalogItem from '../CatalogItem/CatalogItem.jsx';
import styles from './CatalogList.module.css';
import { selectCatalogList, selectIsLoading, selectError } from '../../redux/campers/selectors.js';
import { Fragment, useEffect, useState } from 'react';
import { fetchCampers } from '../../redux/campers/operations.js';
import Loader from '../Loader/Loader.jsx';

import { selectBodyType, selectFeatures, selectLocation, selectTransmission } from '../../redux/filters/selectors.js';

const CatalogList = () => {

  const dispatch = useDispatch();
  
  const campers = useSelector(selectCatalogList);
  const location = useSelector(selectLocation);
  const form = useSelector(selectBodyType);
  const features = useSelector(selectFeatures);
  const transmission = useSelector(selectTransmission);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const [page, setPage] = useState(1);
  const limit = 4;

  const featuresValues = Object.values(features);
  const isFeatureTrue = featuresValues.every((element) => element === true);

  useEffect(() => {
    const params = {
      page,
      limit,
      ...(location && location?.length > 0 && { location }),
      ...(form && form?.length > 0 && { form }),
      ...(transmission && { transmission }),
      ...(isFeatureTrue && { ...features }),
    };

console.log(page, limit);

    dispatch(fetchCampers(params));
  }, [
    page,
    limit,
    form,
    dispatch,
    location,
    features,
    transmission,
    isFeatureTrue,
  ]);

if(isLoading) return <Loader />;
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