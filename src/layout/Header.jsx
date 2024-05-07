import logoNew from '../assets/logoNew.png';
import BurgerMenu from '../components/BurgerMenu/BurgerMenu';

const Header = () => {
  return (
    <header className=''>
      <div className='flex items-center  justify-between  pt-6 '>
        <div className='flex flex-row items-center gap-6'>
          <a href='/'>
            <img
              src={logoNew}
              className=' max-h-[100px]  max-md:h-[50px] rounded-full border-2 ml-4'
              alt='1001viza'
            />
          </a>
        </div>
        <nav className={`max-md:hidden `}>
          <ul className='flex gap-5 text-white '>
            <li className='text-xl cursor-pointer hover:bg-white hover:text-[#28303d] p-4 '>
              <a href='#greenCard'>Зелена карта</a>
            </li>

            <li className='text-xl cursor-pointer hover:bg-white hover:text-[#28303d] p-4 '>
              <a href='#aboutUs'>Про нас</a>
            </li>
            <li className='text-xl cursor-pointer hover:bg-white hover:text-[#28303d] p-4 '>
              <a href='#contacts'>Контакти</a>
            </li>
          </ul>
        </nav>
        <BurgerMenu
          className={'max-md:block hidden overflow-hidden text-white mr-4'}
        />
      </div>
    </header>
  );
};

export default Header;
