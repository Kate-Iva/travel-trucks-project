import styles from './Button.module.css';
const Button = ({ onClick, label, type = 'button', className = '' }) => {
  return (
    <button type={type} onClick={onClick} className={`${styles.btn} ${className}`}>
      {label}
    </button>
  );
};
export default Button;