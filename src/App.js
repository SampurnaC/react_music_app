import logo from './logo.svg';
import './App.css';
import Artist from './components/Artist';
import Song from './components/Song';

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
