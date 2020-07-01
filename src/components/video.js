import React from "react";
import YouTube from "react-youtube";
// import { Hidden } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  video: {
    margin: "0 auto",
    width: 320,
    height: 240
  }
});

function _onReady(event) {
  event.target.pauseVideo();
}

function Videos(props) {
  const { classes } = props;
  const [video, imageToVideo] = React.useState(false);

  return (
    <div
      style={{
        maxWidth: "max-content",
        margin: "0 auto",
        cursor: "pointer",
        ...props.style
      }}
      onClick={() => imageToVideo(true)}
    >
      {video ? (
        <YouTube
          videoId={props.link}
          onReady={_onReady}
          opts={{
            playerVars: {
              autoplay: 1,
              start: 0.0
            }
          }}
          className={classes.video}
        />
      ) : (
        <img
          src={`/img/videos/${props.link}.jpg`}
          alt=""
          className={classes.video}
        />
      )}
    </div>
  );
}

export default withStyles(styles)(Videos);
