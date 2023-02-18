import './App.css';
import Card from './components/Card';
import minion from './components/images/playlistminion.webp';
import spotify from'./components/images/playlist.png';

function App() {
  return (
    <div className='bg-inherit w-100 h-100 grid grid-cols-1 place-items-center gap-y-4 py-8 px-2'>
      <img src={minion} className='w-64 h-48 rounded-lg shadow-md shadow-black'></img>
      <div className='flex justify-center items-center m-4'>
        <img src={spotify} className='w-20 h-20 rounded-xl mr-8'></img>
        <p className='text-4xl font-bold text-white text-left'>Here is a playlist for you!</p>
      </div>
      <Card/>
    </div>
  );
}

export default App;
