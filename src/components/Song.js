import React, { useState } from 'react';

const Song = () => {
  const [like, setLike] = useState(true);
  const songs = [
    { title: 'Faint', imageUrl: require('../images/faint.jpg') },
    { title: 'New Divide', imageUrl: require('../images/newDivide.jpg') },
    { title: 'Numb', imageUrl: require('../images/numb.jpg') },
    { title: "What I've done", imageUrl: require('../images/WhatIveDone.jpg') },
  ];
  return (
    <div className="song_container">
      <div className="song">
        {songs.map((song) => (
          <div key={song.title}>
            <h1>{song.title}</h1>
            <img src={song.imageUrl} alt="" />
          </div>
        ))}

        {/* {like === true && <button onClick={() => setLike(false)}>Like</button>}
        {like === false && (
          <button onClick={() => setLike(true)}>Dislike</button>
        )} */}
      </div>
    </div>
  );
};

export default Song;
