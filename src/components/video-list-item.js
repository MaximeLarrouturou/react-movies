import React from 'react';
import {Link} from 'react-router-dom';
import {Card, Icon} from 'antd';

const {Meta} = Card;

const DEFAULT_PLACEHOLDER_IMAGE
  = 'https://m.media-amazon.com/images/M/MV5BMTgzNzkxMzk5Nl5BMl5BanBnXkFtZTgwMTQ2MzA2MDE@._V1_SX300.jpg';

export default function VideoListItem ({video}) {
  const poster
    = video.Poster === 'N/A' ? DEFAULT_PLACEHOLDER_IMAGE : video.Poster;

  return (
    <Link to={`/videolist/${video.imdbID}`}>
      <Card
        style={{'width': 250, 'margin': 20}}
        cover={
          <img
            alt="example"
            src={poster}
          />
        }
        actions={[
          <Icon type="setting" key="setting" />,
          <Icon type="edit" key="edit" />,
          <Icon type="ellipsis" key="ellipsis" />
        ]}
      >
        <Meta
          title={`${video.Title}`}
          description="This is the description"
        />
      </Card>
    </Link>

  );
}

