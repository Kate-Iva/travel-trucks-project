import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import Header from './components/Header/Header.jsx';
import { lazy, Suspense } from 'react';


const HomePage = lazy(() => import('../src/pages/HomePage/HomePage.jsx'));
const Catalog = lazy(() => import('../src/pages/Catalog/Catalog.jsx'));
const CamperDetail = lazy(() => import('../src/pages/CamperDetail/CamperDetail.jsx'));
const FavoritePage = lazy(() => import('../src/pages/FavoritePage/FavoritePage.jsx'));
const App = () => {

  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Suspense fallback={null}>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:id" element={<CamperDetail />} />
            <Route path="/favorite" element={<FavoritePage />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};
export default App;