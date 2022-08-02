import React, { useState } from 'react';
import faint from '../images/faint.jpg';
import newDivide from '../images/newDivide.jpg';
import numb from '../images/numb.jpg';
import whatIveDone from '../images/WhatIveDone.jpg';

const Song = () => {
  const [like, setLike] = useState(true);
  return (
    <div className="song_container">
      <div className="song_1">
        <img src={faint} alt="Faint Song Cover Art" />
        <h3>Faint</h3>
        {like === true && <button onClick={() => setLike(false)}>Like</button>}
        {like === false && (
          <button onClick={() => setLike(true)}>Dislike</button>
        )}
      </div>
      <div className="song_2">
        <img src={newDivide} alt="New Divide Song Cover Art" />
        <h3>New Divide</h3>
      </div>
      <div className="song_3">
        <img src={numb} alt="Numb Song Cover Art" />
        <h3>Numb</h3>
      </div>
      <div className="song_4">
        <img src={whatIveDone} alt="What I've Done Song Cover Art" />
        <h3>What I've Done</h3>
      </div>
    </div>
  );
};

export default Song;
