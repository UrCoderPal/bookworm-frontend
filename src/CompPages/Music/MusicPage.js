import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import musicdata from '../DataCenter/MusicData'; // You'll need to have a music data source
import Header from '../Navbars/Header';
function MusicPage() {
  const [musicUrl, setMusicUrl] = useState(null);

  const playMusic = (url) => {
    setMusicUrl(url);
  };

  return (
    <div>
      <Header/>
      <div className="container" style={{ background: 'url("/images/l2.jpg") no-repeat center center fixed',
    backgroundSize: '100% 100%', minHeight: '100vh', display: 'flex', justifyContent: 'center', backgroundSize: '100% 100%', alignItems: 'center' }}>
      {musicUrl ? (
        <div className="music-player">
          {/* Music player component */}
          {/* You can use an audio player library or an <audio> element */}
          <audio controls>
            <source src={musicUrl} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {musicdata.map((data, index) => (
            <div key={index} className="col colored-card" onClick={() => playMusic(data.url) }>
              <div className="card">
                <img src={data.artwork} className="card-img-top" alt={data.title} />
                <div className="card-body colored-card">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-title">Artist: {data.artist}</p>
                  <div><a><Button variant="outline-danger mx-2" href={data.url}>Add to MyShelf</Button></a>
                  <a><Button variant="outline-dark" href={data.url}>Add to Cart</Button></a>
                  <a><Button variant="outline-dark" href={data.file_path}>Read</Button></a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
    
  );
}

export default MusicPage;
