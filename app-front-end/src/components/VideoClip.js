import VisibilitySensor from "react-visibility-sensor";
import { useEffect, useRef, useState } from "react";
import classes from "./VideoClip.module.css";
import { useNavigate } from "react-router-dom";

const VideoClip = (props) => {
  const data = props.data;
  const videoUrl = data.videoUrl;
  const id = data.id;
  const likes = data.likes;
  const description = data.description;
  const productId = data.productId;
  const shareLink = data.shareLink;
  const profileImage = data.userProfileImage;
  const username = data.username;

  const [playing, setPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate();
  const videoRef = useRef(null);

  let likeClass = isLiked ? "liked" : "";

  function productPageRouter() {
    navigate(`/product/${productId}`);
  }
  function onVideoPress() {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  }
  function likeHandler() {
    setIsLiked((isLiked) => !isLiked);
  }
  useEffect(() => {
    if (isVisible) {
      videoRef.current.play();

      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  }, [isVisible]);
  return (
    <VisibilitySensor onChange={(isVisible) => setIsVisible(isVisible)}>
      <div className={classes["video-container"]}>
        <div className={classes["video"]}>
          <video
            className={classes["video-player"]}
            loop
            onClick={onVideoPress}
            ref={videoRef}
            src={videoUrl}
          ></video>
        </div>
        <div className={classes["footer"]}>
          <div className={classes["profile"]}>
            <img src={profileImage} className={classes["profile-img"]}></img>
            <h4>{username}</h4>
            <div className={classes["follow-button"]}>
              <button>Follow</button>
            </div>
          </div>
          <div className={classes["description"]}>{description}</div>
        </div>
        <div className={classes["sidebar"]}>
          <div
            className={`${classes["sidebar-icon"]} ${classes[likeClass]}`}
            onClick={likeHandler}
          >
            <img src="https://img.icons8.com/material-outlined/512/filled-like.png" />
            <p>{isLiked ? Number(likes) + 1 : likes}</p>
          </div>
          <div
            className={`${classes["sidebar-buy"]} ${classes["sidebar-icon"]}`}
            onClick={productPageRouter}
          >
            <img src="https://img.icons8.com/material-outlined/96/null/shopping-cart--v1.png" />
          </div>
          <div
            className={`${classes["sidebar-share"]} ${classes["sidebar-icon"]}`}
          >
            <img src="https://img.icons8.com/material-rounded/512/share.png" />
          </div>
        </div>
      </div>
    </VisibilitySensor>
  );
};

export default VideoClip;
