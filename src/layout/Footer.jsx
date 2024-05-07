import logoNew from '../assets/logoNew.png';
import { FaViber } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaMobileScreenButton } from 'react-icons/fa6';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoMailSharp } from 'react-icons/io5';
const Footer = () => {
  return (
    <footer className='mt-40' id='contacts'>
      <hr className=' border-gray-400 border-2 ' />
      <div className='my-12 flex justify-between items-center text-white flex-wrap max-md:justify-center max-md:gap-10'>
        <a href='/'>
          <img
            src={logoNew}
            className=' h-[80px]  rounded-full border-2'
            alt='1001viza'
          />
        </a>
        <div className='flex flex-col max-md:gap-4 max-md:border-[1px] max-md:p-4'>
          <p className='flex gap-2 max-md:flex-col max-md:items-center'>
            <FaMapMarkerAlt />
            м. Виноградів, вул. Шевченка, 19 (3 поверх)
          </p>
          <a href='tel:+380977447455'>
            <p className='flex gap-2 max-md:flex-col max-md:items-center'>
              <FaMobileScreenButton />
              +380977447455
            </p>
          </a>
          <a href='viber://chat/?number=+380977447455'>
            <p className='flex gap-2 max-md:flex-col max-md:items-center'>
              <FaViber />
              Viber
            </p>
          </a>
          <a
            href='https://api.whatsapp.com/send?phone=380977447455'
            target='_blank'
          >
            <p className='flex gap-2 max-md:flex-col max-md:items-center'>
              <IoLogoWhatsapp />
              WhatsApp
            </p>
          </a>
          <a href='mailto:1001viza@gmail.com'>
            <p className='flex gap-2 max-md:flex-col max-md:items-center'>
              <IoMailSharp />
              Strakhova24
            </p>
          </a>
        </div>
        <p className='mt-10'>Strakhova24 © 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
