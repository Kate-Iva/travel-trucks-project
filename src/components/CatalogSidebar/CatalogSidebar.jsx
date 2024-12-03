import styles from './CatalogSidebar.module.css';
import icons from '../../images/icons.svg';
import Button from '../Button/Button.jsx';
import { useState } from 'react';
import { clearCampers } from '../../redux/campers/operations.js';
import { useDispatch } from 'react-redux';
import { setForm, setLocation, setTransmission, toggleFeature } from '../../redux/filters/slice.js';
import { vehicleEquipment, vehicleType } from '../../utils/filters.js';

const initialActiveFeatures = {
  AC: false,
  bathroom: false,
  kitchen: false,
  TV: false,
  refrigerator: false,
  microwave: false,
  radio: false,
  gas: false,
  water: false,
  petrol: false,
  automatic: false,
};

const filterActiveFeatures = (features) => {
  return Object.fromEntries(
    Object.entries(features).filter(([, value]) => value === true)
  );
};

const CatalogSidebar = () => {

  const dispatch = useDispatch();

  const [locationValue, setLocationValue] = useState('');
  const [activeFeatures, setActiveFeatures] = useState(initialActiveFeatures);

  const [transmissionType, setTransmissionType] = useState(null);
  const [activeVehicleType, setActiveVehicleType] = useState('');

  const handleChangeLocationValue = (inputValue) => {
    setLocationValue(inputValue);
  };

  const handleChangeActiveVehicleType = (vehicleType) => {
    const newActiveVehicleType = vehicleType === activeVehicleType ? '' : vehicleType;
    setActiveVehicleType(newActiveVehicleType);
  };

  const handlePushNewFeature = (feature) => {
    const updateFeatures = {
      ...activeFeatures,
      [feature]: !activeFeatures[feature],
    };
    setActiveFeatures(updateFeatures);
  };

  const handleTransmission = (name) => {
    setTransmissionType(transmissionType === name ? null : name);
  };

  const handleFiltersFetch = () => {
    if (locationValue || activeVehicleType || Object.values(activeFeatures).some(Boolean)) {
      const filteredFeatures = filterActiveFeatures(activeFeatures);
      dispatch(clearCampers());
      dispatch(setLocation(locationValue));
      dispatch(setForm(activeVehicleType));
      dispatch(setTransmission(transmissionType));
      dispatch(toggleFeature(filteredFeatures));
    }
  };

  return (
    <aside className={styles.filtersWrap}>
      <div className={styles.locationBlock}>
        <span className={styles.locationTitle}>Location</span>
        <div className={styles.mapBlock}>
          <svg className={styles.map}>
            <use href={`${icons}#map`} />
          </svg>
          <input
            type="text"
            className={styles.mapLocation}
            placeholder="City"
            value={locationValue}
            onChange={(event) => handleChangeLocationValue(event.target.value)}
          />
        </div>
      </div>
      <div className={styles.filtersFormBlock}>
        <span className={styles.filtersTitle}>Filters</span>
        <div className={styles.filterGroup}>
          <h3 className={styles.filterGroupTitle}>Vehicle equipment</h3>
          <div className={styles.divider} />
          <ul className={styles.filterGroupList}>
            {vehicleEquipment.map(({ name, title }) => {
              const isActiveFeature = activeFeatures[name];
              const isAutomatic = name === 'automatic' && transmissionType !== null;
              const isActive = name === 'automatic' ? isAutomatic : isActiveFeature;
              return (
                <li
                  key={name}
                  className={`${styles.filterGroupItem} ${isActive ? styles.filterGroupItemActive : ''}`}
                  onClick={() => {
                    if (name === 'automatic') {
                      handleTransmission('automatic');
                    } else {
                      handlePushNewFeature(name);
                    }
                  }}
                >
                  <svg className={styles.filterGroupImg}>
                    <use href={`${icons}#${name.toLowerCase()}`} />
                  </svg>
                  <span className={styles.filterGroupText}>{title}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.filterGroup}>
          <h3 className={styles.filterGroupTitle}>Vehicle type</h3>
          <div className={styles.divider} />
          <ul className={styles.filterGroupList}>
            {vehicleType.map(({ name, title }) => {
              const isActive = name === activeVehicleType;
              return (
                <li
                  key={name}
                  className={`${styles.filterGroupItem} ${isActive ? styles.filterGroupItemActive : ''}`}
                  onClick={() => handleChangeActiveVehicleType(name)}
                >
                  <svg className={styles.filterGroupImg} width="32px" height="32px">
                    <use href={`${icons}#${name}`} />
                  </svg>
                  <span className={styles.filterGroupText}>{title}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Button onClick={handleFiltersFetch} label="Search" />
    </aside>
  );
};
export default CatalogSidebar;
