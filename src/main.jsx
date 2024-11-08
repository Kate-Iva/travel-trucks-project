import { createRoot } from 'react-dom/client';

import App from './App.jsx';
import { Provider } from 'react-redux';

import { store } from './redux/store.js';

import 'modern-normalize';
import './index.css';

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  <Provider store={store}>
      <App />
  </Provider>
);