import FeaturesItem from '../FeatureItem/FeatureItem.jsx';
import style from './CamperItemFeatures.module.css';
const CampersItemFeatures = ({ camper }) => {
  const featuresMap = [
    { condition: camper?.transmission === 'automatic', imgLabel: 'automatic', featureName: 'Automatic' },
    { condition: camper?.engine === 'petrol', imgLabel: 'petrol', featureName: 'Petrol' },
    { condition: camper?.kitchen, imgLabel: 'kitchen', featureName: 'Kitchen' },
    { condition: camper?.AC, imgLabel: 'ac', featureName: 'AC' },
    { condition: camper?.TV, imgLabel: 'tv', featureName: 'TV' },
    { condition: camper?.bathroom, imgLabel: 'bathroom', featureName: 'Bathroom' },
    { condition: camper?.radio, imgLabel: 'radio', featureName: 'Radio' },
    { condition: camper?.refrigerator, imgLabel: 'refrigerator', featureName: 'Refrigerator' },
    { condition: camper?.microwave, imgLabel: 'microwave', featureName: 'Microwave' },
    { condition: camper?.gas === 'gas', imgLabel: 'gas', featureName: 'Gas' },
    { condition: camper?.water === 'water', imgLabel: 'water', featureName: 'Water' },
  ];
  return (
    <div className={style.featuresItemBlock}>
      {featuresMap.map((feature, index) =>
        feature.condition && (
          <FeaturesItem
            key={index}
            imgLabel={feature.imgLabel}
            featureName={feature.featureName}
          />
        )
      )}
    </div>
  );
};
export default CampersItemFeatures;