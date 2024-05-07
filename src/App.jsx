import AboutUs from './layout/AboutUs';
import Footer from './layout/Footer';
import GreenCard from './layout/GreenCard';
import Header from './layout/Header';
import Partners from './layout/Partners';

const App = () => {
  return (
    <div className='flex justify-center '>
      <div className='w-[65%] max-md:w-full '>
        <Header />
        <GreenCard />
        <Partners />
        <AboutUs />
        <Footer />
      </div>
    </div>
  );
};

export default App;
