import React from 'react';

const Artist = ({ genres }) => {
  return (
    <div>
    <div className="artist">
      <h1>Linkin Park</h1>
      </div>
      {genres.map((genre) => genre)}
      <p>
        Linkin Park is an American rock band from California. The band's current
        lineup cromprises of vocalist/rhythm guitarist/keyboardist Mike Shinoda,
        lead guitarist Brad Delson, bassist Dave Farrell, DJ/turntablist Joe
        Hahn and drummer Rob Bourdon, all of whom are founding members.
      </p>
    </div>
  );
};

export default Artist;
