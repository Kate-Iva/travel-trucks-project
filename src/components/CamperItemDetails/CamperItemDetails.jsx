import styles from './CamperItemDetails.module.css';

const CamperItemDetails = ({ vehicleDetails }) => {
  const { form, length, width, height, tank, consumption } = vehicleDetails;
  return (
    <div className={styles.vehicleDetailsBlock}>
      <h3>Vehicle details</h3>
      <div className={styles.divider} />
      <div className={styles.vehicleDetailsTable}>
        <div className={styles.vehicleDetailsRow}>
          <span>Form</span>
          <span>
            {form.charAt(0).toUpperCase() + form.slice(1).toLowerCase()}
          </span>
        </div>
        <div className={styles.vehicleDetailsRow}>
          <span>Length</span>
          <span>{length}</span>
        </div>
        <div className={styles.vehicleDetailsRow}>
          <span>Width</span>
          <span>{width}</span>
        </div>
        <div className={styles.vehicleDetailsRow}>
          <span>Height</span>
          <span>{height}</span>
        </div>
        <div className={styles.vehicleDetailsRow}>
          <span>Tank</span>
          <span>{tank}</span>
        </div>
        <div className={styles.vehicleDetailsRow}>
          <span>Consumption</span>
          <span>{consumption}</span>
        </div>
      </div>
    </div>
  );
};
export default CamperItemDetails;