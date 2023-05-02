import React, {useState} from 'react';
import "./style.scss";

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import ActiveButton from "../Buttons";

const Filters = () => {
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems((prevState) => ({ ...prevState, [name]: checked }));
  };


  const locationItems = [
    { id: ' Центр_Бишкека', label: ' Центр Бишкека' },
    { id: 'Загородные_рестораны', label: 'Загородные рестораны' },
  ];

  const priceRangeItems = [
    { id: 'price_1000_1500', label: '1000 - 1500' },
    { id: 'price_1500_2000', label: '1500 - 3000' },
    { id: 'price_over_3000', label: 'более 3000' },
  ];

  const occasionsItems = [
    { id: 'юбилей', label: 'юбилей' },
    { id: 'свадьба', label: 'свадьба' },
    { id: 'фуршет', label: 'фуршет' },
    { id: 'день_рождения', label: 'день рождения' },
    { id: 'детский_праздник', label: 'детский праздник' },
  ];

  const cuisineItems = [
    { id: 'азиатская', label: 'азиатская' },
    { id: 'итальянская', label: 'итальянская' },
    { id: 'узбекская', label: 'узбекская' },
    { id: 'японская', label: 'японская' },
    { id: 'китайская', label: 'китайская' },
  ];

  const ratingItems = [
    { id: 'rating_1', label: '1 Star' },
    { id: 'rating_2', label: '2 Star' },
  ];

  return (
    <div className='filters'>
        <div className='filter-header'>
            <h5>Фильтр</h5>
            <p>очистить фильтр</p>
        </div>  
    <FormGroup sx={{gap: 3}}>
        <h6 className='filter-h6'>Местоположение</h6>
        {locationItems.map((item) => (
          <FormControlLabel
            key={item.id}
            control={
              <Checkbox
                name={item.id}
                checked={checkedItems[item.id] || false}
                onChange={handleCheckboxChange}
              />
            }
            label={item.label}
          />
        ))}
      </FormGroup>
      <FormGroup sx={{gap: 3}}>
        <h6 className='filter-h6'>Средный чек</h6>
        {priceRangeItems.map((item) => (
          <FormControlLabel
            key={item.id}
            control={
              <Checkbox
              xs={{fontWeight: "lighter"}}
                name={item.id}
                checked={checkedItems[item.id] || false}
                onChange={handleCheckboxChange}
              />
            }
            label={item.label}
          />
        ))}
      </FormGroup>
      <FormGroup sx={{gap: 3}}>
        <h6 className='filter-h6'>Мероприятие</h6>
        {occasionsItems.map((item) => (
          <FormControlLabel
            key={item.id}
            control={
              <Checkbox
                name={item.id}
                checked={checkedItems[item.id] || false}
                onChange={handleCheckboxChange}
              />
            }
            label={item.label}
          />
        ))}
      </FormGroup>
    <FormGroup sx={{gap: 3}}>
        <h6 className='filter-h6'>Кухня</h6>
        {cuisineItems.map((item) => (
          <FormControlLabel
            key={item.id}
            control={
              <Checkbox
              xs={{fontWeight: "lighter"}}
                name={item.id}
                checked={checkedItems[item.id] || false}
                onChange={handleCheckboxChange}
              />
            }
            label={item.label}
          />
        ))}
      </FormGroup>
      <FormGroup sx={{gap: 3}}>
        <h6 className='filter-h6'>Рейтинг</h6>
        {ratingItems.map((item) => (
          <FormControlLabel
            key={item.id}
            control={
              <Checkbox
              xs={{fontWeight: "lighter"}}
                name={item.id}
                checked={checkedItems[item.id] || false}
                onChange={handleCheckboxChange}
              />
            }
            label={item.label}
          />
        ))}
      </FormGroup>
      <ActiveButton action={"Найти"}/>
    </div>
  );
};

export default Filters;