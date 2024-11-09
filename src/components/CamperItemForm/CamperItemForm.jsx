import styles from './CamperItemForm.module.css';
import { Field, Form, Formik } from 'formik';
import Button from '../../components/Button/Button.jsx';
const CamperItemForm = () => {
  return (
    <div className={styles.formBlock}>
      <div className={styles.formTitleBlock}>
        <h3>Book your campervan now</h3>
        <p>Stay connected! We are always ready to help you.</p>
      </div>
      <Formik
        initialValues={{
          name: '',
          email: '',
          bookingDate: '',
          comment: '',
        }}
        onSubmit={(values) => console.log('Form submitted with values:', values)}
      >
        <Form className={styles.form}>
          <Field
            type="text"
            name="name"
            placeholder="Name*"
            className={styles.formInput}
          />
          <Field
            type="email"
            name="email"
            placeholder="Email*"
            className={styles.formInput}
          />
          <Field
            type="text"
            name="bookingDate"
            placeholder="Booking date*"
            className={styles.formInput}
          />
          <Field
            as="textarea"
            name="comment"
            placeholder="Comment"
            className={`${styles.formInput} ${styles.formTextarea}`}
          />
          <div className={styles.btnBlock}>
                      <Button onClick={() => ""} label="Send" />
          </div>              
        </Form>

        
      </Formik>
    </div>
  );
};
export default CamperItemForm;