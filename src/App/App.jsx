import CardItem from '../CardItem/CardItem';
import BannersList from '../Banners/BannersList';
import './App.scss';

function App () {
  return (
    <div className='wrapper'>
      <div className='card'>
        <BannersList />
        <CardItem/>
      </div>
    </div>
  );
}

export default App;
