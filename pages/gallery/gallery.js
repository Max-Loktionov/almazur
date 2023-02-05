import Player from "../../components/VideoPlayer/player";

const Gallery = () => {
  return (
    <>
      <h1>Галерея</h1>
      <p>Cards фото та відео</p>
      <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4" />
    </>
  );
};

export default Gallery;
