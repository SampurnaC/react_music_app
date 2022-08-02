import './App.css';
import Artist from './components/Artist';
import Song from './components/Song';
import { useState } from 'react';
import Counter from './components/Counter';

function App() {
  const genres = ['Rock, ', 'Rap, ', 'Electronic, ', 'Alternative '];
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Artist genres={genres}></Artist>
      <Song></Song>
      <Counter></Counter>
    </div>
  );
}

export default App;
