function Display(props) {

    return (
        <div>
            <h1>Drum Machine</h1>
            <p>Click on a drum pad or press the corresponding button to play a sound.</p>
            <p>Note: At the time of writing the test suite has an issue when ran on Chromium based browsers.
            <br />Either ignore the <code>The play() request was interrupted by a call to pause().</code> error, or run the test suite on Firefox
            </p>
            <h2 id="display">{props.lastSound}</h2>
        </div>
    );
}

export default Display;