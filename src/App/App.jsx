import BannersList from '../Banners/BannersList';
import CardList from '../CardList/CardList';
import './App.scss';

function App () {
  return (
    <div className='wrapper'>
      <div className='card'>
        <BannersList/>
        <CardList/>
      </div>
    </div>
  );
}

export default App;
