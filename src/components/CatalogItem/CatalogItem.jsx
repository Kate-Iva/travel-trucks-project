import styles from './CatalogItem.module.css';
import icons from '../../images/icons.svg';
import Button from '../Button/Button.jsx';
import CamperItemFeatures from '../CamperItemFeatures/CamperItemFeatures.jsx';

import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

const CatalogItem = ({ camper }) => {
  const { gallery, name, price, rating, location, description, id } = camper;
  const navigate = useNavigate();

  const handleOpenDetails = () => {
    navigate(`/catalog/${id}`);
  };

  return (
    <div className={styles.catalogItemWrap}>
      <img
        className={styles.img}
        src={(gallery && gallery.length > 0 && gallery[0].thumb) || ''}
        alt={name}
      />
      <div className={styles.infoBlock}>
        <div className={styles.reviewsTitleBlock}>
          <div className={styles.titleBlock}>
            <h2>{name}</h2>
            <div className={styles.price}>
              <span>€{price.toFixed(2)}</span>
              <svg
                className={styles.heart}
                onClick={() => {}}
              >
                <use href={`${icons}#heart`} />
              </svg>
            </div>
          </div>
          <div className={styles.reviewsMap}>
            <div className={styles.reviewsBlock}>
              <svg className={styles.star}>
                <use href={`${icons}#star`} />
              </svg>
              <span>{rating} (2 Reviews)</span>
            </div>
            <div className={styles.mapBlock}>
              <svg className={styles.map}>
                <use href={`${icons}#map`} />
              </svg>
              <span>{location}</span>
            </div>
          </div>
        </div>
        <p className={styles.comment}>{description}</p>

<CamperItemFeatures camper={camper}/>

        <Link to="/catalog/:id">
            <Button onClick={handleOpenDetails} label="Show more" />
          </Link>
      </div>
    </div>
  );
};
export default CatalogItem;