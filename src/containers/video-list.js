import React from 'react';
import {Empty} from 'antd';
import VideoListItem from '../components/video-list-item';

export default function VideoList ({videos}) {
  const videoList = videos.items
    ? videos.items.map(video => {
      return (
        <VideoListItem

          key={video.imdbID}
          video={video}
        />
      );
    })
    : <div className="notvideo"><Empty /></div>;

  return (

    <div className="videos">
      {videoList}
    </div>
  );
}
