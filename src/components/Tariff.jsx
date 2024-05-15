import { useState } from 'react';
import { tariffData } from '../data/tariffData';
import Button from './Button';

const Tariff = () => {
  const [showTarif, setShowTarif] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [selected, setSelected] = useState('Вибрати тариф') 

  const handleClick = () => {
    setClicked(true);
    setShowTarif(!showTarif);
    setTimeout(() => {
      setClicked(false);
    }, 300);
  };

 const handleSelected = (info) => {
  setSelected(info)
  setShowTarif(false);
 }

  return (
    <div>
      <Button
        className={` text-lg border-2 p-2 rounded-md border-white hover:text-black hover:bg-white duration-300 ${
          clicked ? 'transform scale-90' : ''
        } ${showTarif ? 'bg-white text-[#28303d]' : 'text-white'}`}
        onClick={handleClick}
      >
         {  selected   }  {showTarif ? '-' : '+'}
      </Button>
      {showTarif && (
        <div className='absolute border-2 text-white p-2 mt-2 z-20 bg-[#28303d] '>
        <ul className='relative '>
          {tariffData.map((tariff) => (
            <li
              key={tariff.id}
              className=' font-medium  border-b-2 last:border-b-0 py-2 hover:bg-white hover:text-black cursor-pointer'
              onClick={() => handleSelected(tariff.day)}            >
              {tariff.day} - {tariff.price} грн
            </li>
          ))}
        </ul>
      </div>
      )}
    </div>
  );
};

export default Tariff;
