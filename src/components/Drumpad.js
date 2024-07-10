import { useEffect, useState } from 'react'

function Drumpad(props) {
    const [isHighlighted, setIsHighlighted] = useState(false);
    const soundPath = `../audio/${props.sound}.mp3`

    const playSound = () => {
        const e = document.getElementById(props.keyId);
        e.currentTime = 0;
        e.play();
        props.lastSoundHandler(props.sound);
        setIsHighlighted(true);
        setTimeout(() => setIsHighlighted(false), 100);
    };

    const handleKeyDown = (event) => {
        console.log(`pressed ${event.keyCode}`);
        if (event.keyCode === props.keyCode) {
            playSound();
        }
    }
    
    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);

        return () => document.removeEventListener('keydown', handleKeyDown);
    },
     []);

    return (
        <div id={props.sound} className={ isHighlighted ? "drum-highlight drum-pad" : "drum-pad"} onClick={() => playSound()}>
            <audio id={props.keyId} className="clip" src={soundPath}></audio>
            {props.keyId}
        </div>
    );
}


export default Drumpad;