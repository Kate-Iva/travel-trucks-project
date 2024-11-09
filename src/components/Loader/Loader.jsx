import { ThreeDots } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loader}>
      <ThreeDots width="200" color='#e44848' />
    </div>
  );
};

export default Loader;
