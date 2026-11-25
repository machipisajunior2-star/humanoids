import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import YouTube from "react-youtube";
import { GiPlayButton } from "react-icons/gi";
import { firstValueFrom } from "rxjs";
import data from "../data/data.json";
import { getVideoData$ } from "../utils";
import MyScroller from "./embla/SwiperScroller";
import "../styling/videos.css";

export default function Videos(props) {
  const { video_id, color, theme } = props;
  const youtubePlayerRef = useRef(null);
  const playerRef = useRef(null);
  const [videoData, setVideoData] = useState({});
  const [videoSelection, setVideoSelection] = useState({
    videoIds: video_id,
    focusVideo: video_id[0],
    activeVideo: "",
  });
  if (videoSelection.videoIds !== video_id) {
    setVideoSelection({
      videoIds: video_id,
      focusVideo: video_id[0],
      activeVideo: "",
    });
  }
  const { focusVideo, activeVideo } =
    videoSelection.videoIds === video_id
      ? videoSelection
      : { focusVideo: video_id[0], activeVideo: "" };
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      controls: 1,
      fs: 1,
      disablekb: 0,
      autoplay: 1,
    },
  };
  const onPlayerReady = (event) => {
    youtubePlayerRef.current = event.target;
    const iframe = document.querySelector(".youtube_iframe");
    if (iframe?.parentElement) {
      iframe.parentElement.style.width = "100%";
    }
  };

  function handleClick() {
    playerRef.current.style.display = "none";
    document.querySelector("#yt").style.display = "flex";
    setVideoSelection((selection) => ({
      ...selection,
      activeVideo: focusVideo,
    }));
    youtubePlayerRef.current?.playVideo?.();
  }
  function handle_thumb(video) {
    getVideoData(video);
    setVideoSelection((selection) => ({ ...selection, focusVideo: video }));
    if (document.querySelector("#yt").style.display === "flex")
      return youtubePlayerRef.current.loadVideoById(video, 0);
    document.querySelector("#yt").style.display = "none";
    playerRef.current.style.display = "flex";
  }
  function thumbnail(id) {
    return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
  }

  async function getVideoData(video_id) {
    let data = await firstValueFrom(getVideoData$(video_id));
    setVideoData(data);
  }

  useEffect(() => {
    getVideoData(video_id[0]);
    document.querySelector("#yt").style.display = "none";
    playerRef.current.style.display = "flex";
  }, [video_id]);

  return (
    <section className="humanoid_videos_section">
      <figure className="youtube_player_container">
        <button className="video_button" onClick={handleClick} ref={playerRef}>
          <img
            className="video_thumbnail"
            src={thumbnail(focusVideo)}
            alt={`${data[0].name} 1`}
          />
          <div className="play_button" style={{ backgroundColor: color }}>
            <GiPlayButton color="white" className="gip-play-button" />
          </div>
        </button>
        <div id={"yt"}>
          <YouTube
            videoId={activeVideo}
            opts={opts}
            iframeClassName={"youtube_iframe"}
            onReady={onPlayerReady}
          />
        </div>
        <figcaption>
          <span className="caption">{videoData?.title || ""}</span>
        </figcaption>
      </figure>
      <div className="video_otptions">
        <h3 className="more_videos_label" style={{ color: color }}>
          MORE VIDEOS
        </h3>
        <div className="thumbs">
          <div className="thumb_scroller">
            <MyScroller
              data={data}
              videos={video_id}
              focusVideo={focusVideo}
              theme={theme}
              color={color}
              handle_thumb={handle_thumb}
              thumbnail={thumbnail}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

Videos.propTypes = {
  video_id: PropTypes.arrayOf(PropTypes.string).isRequired,
  color: PropTypes.string.isRequired,
  theme: PropTypes.shape({
    text: PropTypes.string.isRequired,
  }).isRequired,
};
