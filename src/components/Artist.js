import React from 'react';

const Artist = ({ genres }) => {
  return (
    <div>
      <div className="artist">
        <h1>Linkin Park</h1>
      </div>
      {genres.map((genre) => genre)}
      <p data-testid="article">Linkin Park</p>
    </div>
  );
};

export default Artist;
