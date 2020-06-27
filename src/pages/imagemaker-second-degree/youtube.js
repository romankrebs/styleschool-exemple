import React from "react";
import YouTube from "react-youtube";

function Youtube(props) {
  const _onReady = event => {
    event.target.pauseVideo();
  };

  return (
    <div>
      <YouTube
        videoId={props.link}
        onReady={_onReady}
        opts={{ height: 360, width: 480 }}
      />
    </div>
  );
}

export default Youtube;
