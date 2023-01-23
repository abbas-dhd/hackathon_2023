import { useEffect, useState } from "react";
import VideoClip from "../VideoClip";

import classes from "./VideoPage.module.css";

const VideoPage = () => {
  const [videoList, setVideoList] = useState([]);
  let videoComponent;
  const videoURL =
    "https://1x65grr5rj.execute-api.ap-south-1.amazonaws.com/prod/video";
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch(videoURL)
      .then((res) => res.json())
      .then((body) => {
        setVideoList(body.Items);
      });
  }, []);

  return (
    <>
      <div>
        {videoList.map((elem) => {
          return <VideoClip key={elem.id} data={elem} />;
        })}
      </div>
      <div className={classes.random}></div>
    </>
  );
};

export default VideoPage;
