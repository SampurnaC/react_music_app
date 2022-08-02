import './App.css';
import Artist from './components/Artist';
import Song from './components/Song';
import Counter from './components/Counter';
import PlusButton from './components/Plus_Button';
import MinusButton from './components/Minus_Button';

function App() {
  const genres = ['Rock, ', 'Rap, ', 'Electronic, ', 'Alternative '];

  return (
    <div className="App">
      <Artist genres={genres}></Artist>
      <Song></Song>
    </div>
  );
}

export default App;
