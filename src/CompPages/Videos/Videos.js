import React, { useState ,useEffect} from 'react';
import { Button } from 'react-bootstrap';

import vd from './VideosData';

function Videos() {
  const [videoUrl, setVideoUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer); 
  }, []);

  const playVideo = (url) => {
    setVideoUrl(url);
  };

  return (<div >
    <h1 ><i> Lets play Videos .....</i></h1>
    <div>
    <div className="container" style={{ background: 'url("/images/l2.jpg") no-repeat center center fixed',
    backgroundSize: '100% 100%', minHeight: '100vh', marginTop:'2rem',  display: 'flex', justifyContent: 'center', backgroundSize: '100% 100%', alignItems: 'center' }}>
      {videoUrl ? (
        <div className="video-player">
          {/* Video player component or embed */}
          {/* You can use an external video player library or an <iframe> element */}
          <iframe src={videoUrl} title="Video Player"   width="100%" height="400" frameBorder="0" allowFullScreen></iframe>
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-4" >
          {vd.map((data, index) => (
            <div key={index} className="col colored-card" onClick={() => playVideo(data.videoUrl)}>
              <div className="card">
                <img src={data.thumbnailUrl} className="card-img-top" alt={data.title} />
                <div className="card-body colored-card">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-title">{data.description.substring(0, 20)}</p>
                  <p className="card-title">Views: {data.views}</p>
                  <p className="card-title">Duration: {data.duration}</p>
                  <p className="card-title">Presented By: {data.author}</p>
                  <span><a><Button variant="outline-danger" href={data.url}>Add To Watchlist</Button></a></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </div></div>
  );
}

export default Videos;
