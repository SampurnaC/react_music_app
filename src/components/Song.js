import React, { useState } from 'react';

const Song = ({ song }) => {
  const [like, setLike] = useState(true);
  const likeMe = () => {
    setLike(!like);
  };
  const disLikeMe = () => {
    setLike(!like);
  };
  return (
    <div>
      <div className="song">
        {like === false && <button onClick={likeMe}>Like</button>}
        {like === true && <button onClick={disLikeMe}>Dislike</button>}
        <h1>{song.title}</h1>
        <img src={song.imageUrl} alt="" />
        {/* {songs.map((song) => (
          <div key={song.id}>
            <h1>{song.title}</h1>
            <img src={song.imageUrl} alt="" />
            {like}
            {like === false && <button onClick={likeMe}>Like</button>}
            {like === true && <button onClick={disLikeMe}>Dislike</button>}
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Song;
