import './App.scss';
import { useState } from 'react';
import Display from './components/Display';
import Drumpad from './components/Drumpad';
import soundsArray from './sounds';

function App() {
  const [lastSound, setLastSound] = useState("");

  const renderDrumpads = soundsArray.map(el => <Drumpad key={el.key} sound={el.sound} keyId={el.key} keyCode={el.keyCode} lastSoundHandler={setLastSound}/>)

  return (
    <div className="App">
      <div id="drum-machine">
        <Display sound="Clap" lastSound={lastSound}/>
        <div className="drum-container">
        {renderDrumpads}
        </div>
      </div>
    </div>
  );
}

export default App;
