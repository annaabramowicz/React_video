import React from 'react';
import './App.css';
import videos from './database.json'

function VideoList({ videos }) {
  return (
    videos.map((element, index) =>
      <Video key={index} video={element} />)
  )
}

function Video({ video }) {
  return (
    <div className="element">
      <div>
        <h2>{video.title}</h2>
        <h4>{video.description}</h4>
      </div>
      <iframe title={video.title} style={{ width: "560", height: "315" }}
        src={video.video_url} frameBorder="0"></iframe>
    </div>
  )
}

function App() {
  return (
    <div className="container">
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
