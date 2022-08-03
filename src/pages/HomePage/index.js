import React from 'react';
import Artist from '../../components/Artist';
import Song from '../../components/Song';
// import { useState } from 'react';

const HomePage = () => {
  const genres = ['Rock, ', 'Rap, ', 'Electronic, ', 'Alternative '];
//   const [count, setCount] = useState(0);
  // const [like, setLike] = useState(true);
  const songs = [
    {
      id: 1,
      title: 'Faint',
      imageUrl: require('../../images/faint.jpg'),
      like: false,
    },
    {
      id: 2,
      title: 'New Divide',
      imageUrl: require('../../images/newDivide.jpg'),
      like: false,
    },
    {
      id: 3,
      title: 'Numb',
      imageUrl: require('../../images/numb.jpg'),
      like: false,
    },
    {
      id: 4,
      title: "What I've done",
      imageUrl: require('../../images/WhatIveDone.jpg'),
      like: false,
    },
  ];

  return (
    <div className="App">
      <Artist genres={genres}></Artist>
      {songs.map((song) => (
        <Song key={song.id} song={song} />
      ))}
    </div>
  );
}

export default HomePage;
