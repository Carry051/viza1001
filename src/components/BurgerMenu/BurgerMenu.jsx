/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react';
import './burgerMenu.css';

const BurgerMenu = ({ className }) => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <div className={className}>
      <button
        onClick={() => setOpen(!isOpen)}
        className={`hamburger-button ${isOpen ? 'open' : 'close '} `}
      />
      <div className={`panel ${isOpen ? 'open' : 'close'} baba `}>
        <ul className='flex flex-col justify-center text-center pl-12 gap-10'>
          <li
            className={`text-3xl cursor-pointer hover:bg-white  hover:text-[#28303d] p-4 border-2 rounded-md ${
              isOpen ? 'open' : 'close'
            }} `}
            onClick={() => setOpen(!isOpen)}
          >
            <a href='#greenCard'>Зелена карта</a>
          </li>

          <li
            className={`text-3xl cursor-pointer hover:bg-white hover:text-[#28303d] p-4  border-2 rounded-md ${
              isOpen ? 'open' : 'close'
            }} `}
            onClick={() => setOpen(!isOpen)}
          >
            <a href='#aboutUs'>Про нас</a>
          </li>
          <li
            className={`text-3xl cursor-pointer hover:bg-white hover:text-[#28303d] p-4 border-2 rounded-md ${
              !isOpen ? 'open' : ' close'
            }} `}
            onClick={() => setOpen(!isOpen)}
          >
            <a href='#contacts'>Контакти</a>
          </li>
           <li className=''>
           <p className=''>Strakhova24 © 2023</p>
           </li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
