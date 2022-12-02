import React from "react"
import './App.css';

function App() {
  
  const [display, setDisplay] = React.useState("")

  const audiomap = {
    "Q":"alif",
    "W":"ba",
    "E":"ta",
    "A":"tha",
    "S":"jiim",
    "D":"hha",
    "Z":"kha",
    "X":"daal",
    "C":"thaal"
  }

  function playAudio(source){
    const audioSource = new Audio(source)
    audioSource.play()
  }

  function playClick(event){
    const source = "https://www.arabicreadingcourse.com/audio/"+audiomap[event.target.firstChild.id]+".mp3"
    setDisplay(audiomap[event.target.firstChild.id])
    playAudio(source);
  }

  function playKey(event) {
    let key = event.key.toUpperCase()
    if (!(key in audiomap)) return;
    const source = "https://www.arabicreadingcourse.com/audio/"+audiomap[key]+".mp3"
    setDisplay(audiomap[event.target.firstChild.id])
    playAudio(source);
  }

  return (
    <div className="App">
      <header className="App-header">
      <div className="App-header" id="drum-machine">
        <div id="display">
          <button id = "alif" className="drum-pad" onClick={playClick} onKeyPress={playKey}><audio src="https://www.arabicreadingcourse.com/audio/alif.mp3" className="clip" id = "Q"></audio>Q</button>
          <button id = "ba" className="drum-pad" onClick={playClick} onKeyPress={playKey}><audio src="https://www.arabicreadingcourse.com/audio/ba.mp3" className="clip" id = "W"></audio>W</button>
          <button id = "ta" className="drum-pad" onClick={playClick} onKeyPress={playKey}><audio src="https://www.arabicreadingcourse.com/audio/ta.mp3" className="clip" id = "E"></audio>E</button>
          <button id = "tha" className="drum-pad" onClick={playClick} onKeyPress={playKey}><audio src="https://www.arabicreadingcourse.com/audio/tha.mp3" className="clip" id = "A"></audio>A</button>
          <button id = "jiim" className="drum-pad" onClick={playClick} onKeyPress={playKey}><audio src="https://www.arabicreadingcourse.com/audio/jiim.mp3" className="clip" id = "S"></audio>S</button>
          <button id = "hha" className="drum-pad" onClick={playClick} onKeyPress={playKey}><audio src="https://www.arabicreadingcourse.com/audio/hha.mp3" className="clip" id = "D"></audio>D</button>
          <button id = "kha" className="drum-pad" onClick={playClick} onKeyPress={playKey}><audio src="https://www.arabicreadingcourse.com/audio/kha.mp3" className="clip" id = "Z"></audio>Z</button>
          <button id = "daal" className="drum-pad" onClick={playClick} onKeyPress={playKey}><audio src="https://www.arabicreadingcourse.com/audio/daal.mp3" className="clip" id = "X"></audio>X</button>
          <button id = "thaal" className="drum-pad" onClick={playClick} onKeyPress={playKey}><audio src="https://www.arabicreadingcourse.com/audio/thaal.mp3" className="clip" id = "C"></audio>C</button>
          {display}
        </div>
        
      </div>
      </header>
    </div>
  );
}

export default App;
