import logo from './logo.svg';
import './App.css';
import Artist from './components/Artist';
import Song from './components/Song';
import { useState } from 'react';
import Counter from './components/Counter';

function App() {
  const genres = ['Rock, ', 'Rap, ', 'Electronic, ', 'Alternative '];
  const [count, setCount] = useState(0);
  const [like, setLike] = useState(true);
  const likeMe = () => {
    setLike(!like);
  };
  const disLikeMe = () => {
    setLike(!like);
  };
  return (
    <div className="App">
      <Artist genres={genres}></Artist>
      <Song likeMe={likeMe} disLikeMe={disLikeMe} like={like}></Song>
      <Counter></Counter>
    </div>
  );
}

export default App;
