import React from "react";
import Videolistitem from "./video_list_item";

const Videolist = props => {
  const videoItems = props.videos.map(video => {
    return (
      <Videolistitem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    );
  });

  return <ul className="col-md-4 list-group">{videoItems}</ul>;
};

export default Videolist;
