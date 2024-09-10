// Adding Components
import { useState } from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import data from "./util";
// import styles
import "./styles/app.scss";

function App() {
  // state
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <>
      <div className="App">
        <Song currentSong={currentSong} />
        <Player
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          currentSong={currentSong}
        />
      </div>
    </>
  );
}

export default App;
