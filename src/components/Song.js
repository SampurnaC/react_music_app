import React, { useState } from 'react';

const Song = ({ likeMe, disLikeMe, like }) => {
  //   const [like, setLike] = useState(true);
  const songs = [
    {
      id: 1,
      title: 'Faint',
      imageUrl: require('../images/faint.jpg'),
      like: false,
    },
    {
      id: 2,
      title: 'New Divide',
      imageUrl: require('../images/newDivide.jpg'),
      like: false,
    },
    {
      id: 3,
      title: 'Numb',
      imageUrl: require('../images/numb.jpg'),
      like: false,
    },
    {
      id: 4,
      title: "What I've done",
      imageUrl: require('../images/WhatIveDone.jpg'),
      like: false,
    },
  ];
  return (
    <div className="song_container">
      <div className="song">
        {songs.map((song) => (
          <div key={song.id}>
            <h1>{song.title}</h1>
            <img src={song.imageUrl} alt="" />
            {like}
            {like === false && <button onClick={likeMe}>Like</button>}
            {like === true && <button onClick={disLikeMe}>Dislike</button>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Song;
