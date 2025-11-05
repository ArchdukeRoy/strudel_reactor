const StopButton = ({ globalEditor }) => {
    return (
        //Setup button replaced by onClick
        <button className="btn btn-outline-primary" onClick={
            //The code from original App.js inserted here:
            () => globalEditor.stop()
        }>
            Stop
        </button>
    );
};

export default StopButton;