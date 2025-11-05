import ProcAndPlay from '../../utils/buttonLogic/ProcAndPlay';

const ProcessButton = ({ globalEditor }) => {
    return (
        //Setup button replaced by onClick
        <button className="btn btn-outline-primary" onClick={
            //The code from original App.js inserted here:
            () => {
                if (globalEditor != null) {
                    ProcAndPlay(globalEditor)
                }
            }
        }>
            Proc & Play
        </button>
    );
};

export default ProcessButton;