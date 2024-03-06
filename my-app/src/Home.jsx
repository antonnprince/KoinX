import Nav from './Nav';
import BTC from './BTC';

const Home = () => {
  return (
    <>
      <Nav />
      <div className='flex-col-reverse lg:flex-col'>
       <BTC />
      </div>
    </>
  );
}

export default Home;
