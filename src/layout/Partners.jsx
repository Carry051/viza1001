import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import guardianPartner from '../assets/Partners/guardianPartner.png';
import tasPartner from '../assets/Partners/tasPartner.png';
import pzuPartner from '../assets/Partners/pzuPartner.png';
import usgPartner from '../assets/Partners/usgPartner.png';
import knijiaPartner from '../assets/Partners/knijiaPartner.png';

const Partners = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: 'linear',
    arrows: false,
    responsive: [
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='my-40'>
      <h2 className='text-white text-[60px] font-extralight  max-md:text-[45px] max-md:text-center'>
        Наші партнери
      </h2>

      <Slider {...settings} className='mt-10 bg-white   rounded-md  mx-2'>
        <div className='p-16'>
          <img src={guardianPartner} alt='' />
        </div>
        <div className='p-16'>
          <img src={tasPartner} alt='' />
        </div>
        <div className='px-16 pt-2'>
          <img src={pzuPartner} alt='' width={200} />
        </div>
        <div className='pt-10'>
          <img src={knijiaPartner} alt='' width={300} />
        </div>
        <div className='pt-[54px]'>
          <img src={usgPartner} alt='' width={270} />
        </div>
      </Slider>
    </div>
  );
};

export default Partners;
