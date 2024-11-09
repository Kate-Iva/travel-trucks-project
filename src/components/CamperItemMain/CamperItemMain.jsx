import styles from './CamperItemMain.module.css';
import icons from '../../images/icons.svg';

const CamperItemMain = ({ camper }) => {
  const { name, price, location, rating, gallery, description } = camper;
  return (
    <div className={styles.camperMainInfoBlock}>
      <div className={styles.camperTitlePriceBlock}>
        <h2>{name}</h2>
        <div className={styles.reviewsLocationBlock}>
          <div className={styles.reviewsBlock}>
            <svg className={styles.star}>
              <use href={`${icons}#star`} />
            </svg>
            <span>{rating} (2 Reviews)</span>
          </div>
          <div className={styles.locationBlock}>
            <svg className={styles.map}>
              <use href={`${icons}#map`} />
            </svg>
            <span>{location}</span>
          </div>
        </div>
        <span className={styles.price}>€{price.toFixed(2)}</span>
      </div>
      <ul className={styles.gallery}>
        {gallery?.map(({ original }) => (
          <li key={original} className={styles.imgBlock}>
            <img src={original} alt={name} className={styles.img} />
          </li>
        ))}
      </ul>
      <p className={styles.camperTextInfo}>{description}</p>
    </div>
  );
};
export default CamperItemMain;