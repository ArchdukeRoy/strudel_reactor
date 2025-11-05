const PlayButton = ({ globalEditor }) => {
    return (
        //Setup button replaced by onClick
        <button className="btn btn-outline-info" style={{ border: "none", padding: 0, background: "none", cursor: "pointer" }} onClick={
            //The code from original App.js inserted here:
            () => globalEditor.evaluate()
        }>
            <img src="/iconImages/play.png" alt="Play" style={{ height: "25px", width: "25px",  display: "block" }} />
        </button>
    );
};

export default PlayButton;