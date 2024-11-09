import CamperItemFeatures from '../CamperItemFeatures/CamperItemFeatures.jsx';
import CamperItemDetails from '../CamperItemDetails/CamperItemDetails.jsx';
import styles from './CamperItemBlock.module.css';
const CamperItemBlock = ({ camper, isVisible }) => {
  return (
    <div className={`${styles.featuresBlock} ${isVisible ? styles.flex : styles.none}`}>
      <CamperItemFeatures camper={camper} />
      <CamperItemDetails vehicleDetails={camper} />
    </div>
  );
};
export default CamperItemBlock;