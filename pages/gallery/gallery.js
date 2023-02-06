import Player from "../../components/VideoPlayer/player";
import ReactPlayer from "react-player/youtube";

const Gallery = () => {
  return (
    <>
      <h1>Галерея</h1>
      <p>Cards фото та відео</p>
      {/* <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4" /> */}
      <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
    </>
  );
};

export default Gallery;
