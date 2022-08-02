import './App.css';
import Artist from './components/Artist';
import Song from './components/Song';
<<<<<<< HEAD
import Counter from './components/Counter';
import PlusButton from './components/Plus_Button';
import MinusButton from './components/Minus_Button';
=======
import { useState } from 'react';
import Counter from './components/Counter';
>>>>>>> eceae42597761f0e5bdc241a891d11b74f44731a

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
