import React from 'react';

const Artist = ({ genres }) => {
  return (
    <div>
      <div className="artist">
        <h1>Linkin Park</h1>
      </div>
      {genres.map((genre) => genre)}
      <p data-testid="article">
        Linkin Park is an American rock band from Agoura Hills, California. The
        band's current lineup comprises vocalist/rhythm guitarist/keyboardist
        Mike Shinoda, lead guitarist Brad Delson, bassist Dave Farrell,
        DJ/turntablist Joe Hahn and drummer Rob Bourdon, all of whom are
        founding members. Vocalists Mark Wakefield and Chester Bennington are
        former members of the band. Categorized as alternative rock, Linkin
        Park's earlier music spanned a fusion of heavy metal and hip hop, while
        their later music features more electronica and pop elements.
      </p>
    </div>
  );
};

export default Artist;
