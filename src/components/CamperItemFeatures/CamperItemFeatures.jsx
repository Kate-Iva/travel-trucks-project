import FeaturesItem from '../FeatureItem/FeatureItem.jsx'; 
import style from './CamperItemFeatures.module.css';
const CampersItemFeatures = ({ camper }) => {
  return (
    <div className={style.featuresItemBlock}>
      {camper?.transmission === 'automatic' && (
        <FeaturesItem imgLabel="automatic" featureName="Automatic" />
      )}
      {camper?.engine === 'petrol' && (
        <FeaturesItem imgLabel="petrol" featureName="Petrol" />
      )}
      {camper?.kitchen && (
        <FeaturesItem imgLabel="kitchen" featureName="Kitchen" />
      )}
      {camper?.AC && <FeaturesItem imgLabel="ac" featureName="AC" />}
      {camper?.TV && <FeaturesItem imgLabel="tv" featureName="TV" />}
      {camper?.bathroom && (
        <FeaturesItem imgLabel="bathroom" featureName="Bathroom" />
      )}
      {camper?.radio && (
        <FeaturesItem imgLabel="radio" featureName="Radio" />
      )}
      {camper?.refrigerator && (
        <FeaturesItem imgLabel="refrigerator" featureName="Refrigerator" />
      )}
      {camper?.microwave && (
        <FeaturesItem imgLabel="microwave" featureName="Microwave" />
      )}
            {camper?.ac === 'ac' && (
        <FeaturesItem imgLabel="ac" featureName="AC" />
      )}
                  {camper?.tv === 'tv' && (
        <FeaturesItem imgLabel="tv" featureName="TV" />
      )}
    </div>
  );
};
export default CampersItemFeatures;