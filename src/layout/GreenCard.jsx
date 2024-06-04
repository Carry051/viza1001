/* eslint-disable react/no-unescaped-entities */

import greenCard from '../assets/eu3-1.jpg';
import Button from '../components/Button';
import Form from '../components/Form';
import Tariff from '../components/Tariff';
import Steps from './Steps';

const GreenCard = () => {
  return (
    <div className='mt-20  max-md:w-[400px]' id='greenCard'>
      <h2 className='text-[70px] font-inherit text-white max-md:text-center max-md:text-[56px]'>
        Зелена карта за 15 хвилин
      </h2>

      <div className='mt-10 flex gap-10 max-md:flex-wrap justify-center max-lg:flex-wrap max-sm:flex-wrap max-xl:flex-wrap'>
        <img
          src={greenCard}
          alt='greenCardImage'
          className='max-w-[500px] max-md:w-[80%] rounded-lg '
        />
        <div className='mt-10'>
          <ul className='text-white  max-md:text-center max-sm:text-center'>
            <li className='text-xl mb-16'>
              <p>🚗 Потрібна Зелена Карта? Оформіть зараз онлайн!</p>
            </li>
            <li className='text-xl mb-16 '>
              <p>
                🔒 Отримайте свою Зелену Карту на телефон або електронну пошту.
                Заповніть форму прямо зараз і Ваш поліс буде готовий вже через
                15 хвилин.
              </p>
            </li>
            <li className='text-xl'>
              <p>
                👉 Завантажте дані і натисніть "Відправити", після наш менеджер
                Вам зателефонує для уточнення способу відправки поліса!
              </p>
            </li>
          </ul>
          <div className='flex justify-center'>
            <a href='#applyNow'>
              <Button
                className={
                  'bg-green-800 text-white text-2xl px-16 mt-10 py-6 rounded-lg hover:bg-green-600 hover: ease-in duration-200 max-md:text-lg max-md:px-10 max-md:py-4'
                }
              >
                Оформити зараз
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div>
        <Steps />
      </div>
      <div
        className='mt-40 flex items-center  flex-wrap max-md:gap-10 max-md:justify-center'
        id='applyNow'
      >
        <h2 className='text-white text-[60px] font-extralight  max-md:text-[45px] max-md:text-center'>
          Оформити карту
        </h2>
        <div>
          <Tariff />
        </div>
      </div>
    </div>
  );
};

export default GreenCard;
