function Display(props) {

    return (
        <div>
            <h1>Drum Machine</h1>
            <p>Click on a drum pad or press the corresponding button to play a sound. <br />
            Have fun!</p>
            <h2 id="display">{props.lastSound}</h2>
        </div>
    );
}

export default Display;