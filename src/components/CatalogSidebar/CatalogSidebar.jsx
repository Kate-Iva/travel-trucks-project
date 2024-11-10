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
  water: false
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
    <aside className={styles.filters_wrap}>
      <div className={styles.location_block}>
        <span className={styles.location_title}>Location</span>
        <div className={styles.map_block}>
          <svg className={styles.map}>
            <use href={`${icons}#map`} />
          </svg>
          <input
            type="text"
            className={styles.map_location}
            placeholder="City"
            value={locationValue}
            onChange={(event) => handleChangeLocationValue(event.target.value)}
          />
        </div>
      </div>
      <div className={styles.filters_form__block}>
        <span className={styles.filters_title}>Filters</span>
        <div className={styles.filter_group}>
          <h3 className={styles.filter_group__title}>Vehicle equipment</h3>
          <div className={styles.divider} />
          <ul className={styles.filter_group__list}>
            {vehicleEquipment.map(({ name, title }) => {
              const isActiveFeature = activeFeatures[name];
              const isAutomatic = name === 'automatic' && transmissionType !== null;
              const isActive = name === 'automatic' ? isAutomatic : isActiveFeature;
              return (
                <li
                  key={name}
                  className={`${styles.filter_group__item} ${isActive ? styles.filter_group__item_active : ''}`}
                  onClick={() => {
                    if (name === 'automatic') {
                      handleTransmission('automatic');
                    } else {
                      handlePushNewFeature(name);
                    }
                  }}
                >
                  <svg className={styles.filter_group__img}>
                    <use href={`${icons}#${name.toLowerCase()}`} />
                  </svg>
                  <span className={styles.filter_group__text}>{title}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.filter_group}>
          <h3 className={styles.filter_group__title}>Vehicle type</h3>
          <div className={styles.divider} />
          <ul className={styles.filter_group__list}>
            {vehicleType.map(({ name, title }) => {
              const isActive = name === activeVehicleType;
              return (
                <li
                  key={name}
                  className={`${styles.filter_group__item} ${isActive ? styles.filter_group__item_active : ''}`}
                  onClick={() => handleChangeActiveVehicleType(name)}
                >
                  <svg className={styles.filter_group__img} width="32px" height="32px">
                    <use href={`${icons}#${name}`} />
                  </svg>
                  <span className={styles.filter_group__text}>{title}</span>
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
