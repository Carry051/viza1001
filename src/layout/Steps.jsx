import { BiMailSend } from 'react-icons/bi';
import { MdOutlinePayment } from 'react-icons/md';
import { SiAdguard } from 'react-icons/si';
const Steps = () => {
  return (
    <div className='mt-40'>
      <h2 className='text-white text-[60px] font-extralight mb-16 max-md:text-[45px] max-md:text-center'>
        Отримайте страховий поліс за 3 простих кроки
      </h2>
      <ul className='flex gap-8 max-md:flex-wrap'>
        <li className='flex flex-col items-center'>
          <SiAdguard size={50} color='white' className='max-md:w-[30px]' />
          <div className='text-center bg-white rounded-lg p-6 text-[#28303d] mt-4 w-full'>
            <h2 className='text-2xl font-bold flex flex-col items-center  max-md:text-lg'>
              <span className='bg-[#28303d] rounded-full px-4  text-white mx-2 max-md:text-sm '>
                1
              </span>
              Крок перший
            </h2>
            <p className='text-lg mt-2 max-w-[400px] max-md:text-md '>
              Ми оформляємо ваш поліс і надсилаємо його фото.
            </p>
          </div>
        </li>
        <li className='flex flex-col items-center'>
          <MdOutlinePayment
            size={50}
            color='white'
            className='max-md:w-[30px]'
          />
          <div className='text-center bg-white rounded-lg p-6 text-[#28303d] mt-4 w-full'>
            <h2 className='text-2xl font-bold flex flex-col items-center'>
              <span className='bg-[#28303d] rounded-full px-4  text-white mx-2 max-md:text-sm'>
                2
              </span>
              Крок другий
            </h2>
            <p className='text-lg mt-2 max-w-[400px] max-md:text-md '>
              Ви оплачуєте за поліс на реквізити нашої страхової компанії.
            </p>
          </div>
        </li>
        <li className='flex flex-col items-center '>
          <BiMailSend size={50} color='white' className='max-md:w-[30px]' />

          <div className='text-center bg-white rounded-lg p-6 text-[#28303d] mt-4'>
            <h2 className='text-2xl font-bold flex flex-col items-center'>
              <span className='bg-[#28303d] rounded-full px-4  text-white mx-2 max-md:text-sm'>
                3
              </span>
              Крок третій
            </h2>
            <p className='text-lg mt-2 max-w-[400px] max-md:text-md'>
              Ми відправляємо вам готовий поліс на вашу пошту або у будь-який
              меседжер.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Steps;
