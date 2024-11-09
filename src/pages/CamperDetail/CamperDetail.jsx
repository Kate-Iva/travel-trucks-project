import { useParams } from 'react-router-dom';
import styles from './CamperDetail.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectCamper, selectIsLoading } from '../../redux/campers/selectors.js';
import { useEffect, useState } from 'react';

import { fetchCamperById } from '../../redux/campers/operations.js';

import CamperItemMain from '../../components/CamperItemMain/CamperItemMain.jsx';
import CamperItemReviews from '../../components/CamperItemReviews/CamperItemReviews.jsx';
import CamperItemForm from '../../components/CamperItemForm/CamperItemForm.jsx';
import CamperItemBlock from '../../components/CamperItemBlock/CamperItemBlock.jsx';

import Loader from '../../components/Loader/Loader.jsx';

const CamperDetail = () => {

  const { id } = useParams();

  const dispatch = useDispatch();
  const camper = useSelector(selectCamper);

  const isLoading = useSelector(selectIsLoading);

  const [featuresTab, setFeaturesTab] = useState(true);
  const [reviewsTab, setReviewsTab] = useState(false);

  useEffect(() => {
    if (id) {
      dispatch(fetchCamperById(id));
    }
  }, [dispatch, id]);
  if (isLoading || !camper) {
    return <Loader />;
  }
  const handleToggleTabs = (activeTab) => {
    setFeaturesTab(activeTab === 'features');
    setReviewsTab(activeTab === 'reviews');
  };
  const { reviews } = camper;
  return (
    <div className={styles.camperDetailWrap}>
      <CamperItemMain camper={camper} />
      <div className={styles.featureReviewsBlock}>
        <div className={styles.tabsBlock}>
          <div className={styles.tabs}>
            <h3
              className={`${styles.tab} ${featuresTab && styles.active}`}
              onClick={() => handleToggleTabs('features')}
            >
              Features
            </h3>
            <h3
              className={`${styles.tab} ${reviewsTab && styles.active}`}
              onClick={() => handleToggleTabs('reviews')}
            >
              Reviews
            </h3>
          </div>
          <div className={styles.divider} />
        </div>
        <div className={styles.featuresReviewsFormBlock}>
          <CamperItemBlock camper={camper} isVisible={featuresTab} />
          <CamperItemReviews reviews={reviews ?? []} isVisible={reviewsTab} />
          <CamperItemForm />
        </div>
      </div>
    </div>
  );
};
export default CamperDetail;