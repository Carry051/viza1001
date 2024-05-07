import logoNew from '../assets/logoNew.png';
const AboutUs = () => {
  return (
    <div className='mt-32' id='aboutUs'>
      <h2 className='text-white text-[60px] font-extralight  max-md:text-[45px] max-md:text-center'>
        Про нас
      </h2>
      <div className='flex flex-col items-center mt-10'>
        <img
          src={logoNew}
          alt=''
          className='rounded-lg w-[400px] text-center max-md:w-[300px]'
        />
        <ul className='text-white text-2xl flex flex-col  gap-10 mt-10 max-md:text-center'>
          <li>Ласкаво просимо на Strakhova24.com!</li>
          <li>
            Ми – команда професіоналів, які з великою відданістю та досвідом
            працюють у сфері страхування з 2015 року. Наш офіс знаходиться за
            адресою: м. Виноградів, вул. Шевченка, 19/3поверх.
          </li>
          <li>
            Наша місія – зробити процес страхування простим, доступним та
            зрозумілим для кожного клієнта.
          </li>
          <li>
            Ми співпрацюємо з низкою провідних страхових компаній, серед яких
            Княжа, ПЗУ, Гардіан, ТАС, Еталон, Екта, USG та інші. Незалежно від
            ваших потреб та вимог, ми вже оформили понад 31 842 страхових
            полісів, що свідчить про нашу ефективність та довіру наших клієнтів.
          </li>
          <li>
            На нашому сайті оформлення одного полісу займає до 15 хвилин, що
            робить процес швидким та зручним для наших клієнтів.
          </li>
          <li>
            Робимо все можливе, щоб забезпечити вашу безпеку та спокій, ставлячи
            ваші інтереси на перше місце.
          </li>
          <li>
            Обираючи нас – Ви обирайте надійність та комфорт у страхуванні!
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
