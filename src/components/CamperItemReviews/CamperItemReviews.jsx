import styles from './CamperItemReviews.module.css';
import icons from '../../images/icons.svg';
const CamperItemReviews = ({ reviews, isVisible }) => {
  const starArray = Array.from({ length: 5 }, (_, index) => index + 1);
  return (
    <ul className={`${styles.reviewsBlock} ${isVisible ? styles.flex : styles.none}`}>
      {reviews?.map(({ reviewer_name, reviewer_rating, comment }) => (
        <li key={`${reviewer_name}_${reviewer_rating}`} className={styles.reviewsItem}>
          <div className={styles.reviewsImgBlock}>
            <span className={styles.reviewsImg}>
              {reviewer_name.charAt(0).toUpperCase()}
            </span>
            <div className={styles.nameReview}>
              <span>{reviewer_name}</span>
              <div className={styles.rating}>
                {starArray.map((_, index) => (
                  <svg
                    key={index} 
                    className={`${styles.star} ${reviewer_rating > index ? styles.rating : styles.gray}`}
                  >
                    <use href={`${icons}#star`} />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          <p>{comment}</p>
        </li>
      ))}
    </ul>
  );
};
export default CamperItemReviews;