import React, { useState } from 'react';

const Artist = ({ genres }) => {
  const [name, setName] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`${name}`);
  };
  return (
    <div className="artist_container">
      <h1>Linkin Park</h1>
      {genres.map((genre) => genre)}
      <p>
        Linkin Park is an American rock band from California. The band's current
        lineup cromprises of vocalist/rhythm guitarist/keyboardist Mike Shinoda,
        lead guitarist Brad Delson, bassist Dave Farrell, DJ/turntablist Joe
        Hahn and drummer Rob Bourdon, all of whom are founding members.
      </p>
      <form onSubmit={handleSubmit}>
        <label>Enter your name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Artist;
