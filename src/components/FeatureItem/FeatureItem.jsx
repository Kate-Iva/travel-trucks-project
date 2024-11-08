import icons from '../../images/icons.svg';
import style from './FeatureItem.module.css';
const FeaturesItem = ({ imgLabel, featureName }) => {
  return (
    <div className={style.featuresLabel}>
      <svg className={style.featuresImg}>
        <use href={`${icons}#${imgLabel}`} />
      </svg>
      <span className={style.featuresText}>{featureName}</span>
    </div>
  );
};
export default FeaturesItem;