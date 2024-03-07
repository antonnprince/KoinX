import Nav from './Nav';
import BTC from './BTC';
import HorizontalNav from './HorizontalNav';

const Home = () => {
  return (
    <div className='bg-slate-200 h-screen'>
      <Nav />
      
      <div className='flex-col-reverse lg:flex-col'>
          <BTC />
          <HorizontalNav />
      </div>
    </div>
  );
}

export default Home;
