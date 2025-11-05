import Proc from '../../utils/buttonLogic/Proc';

const ProcessButton = ({ globalEditor }) => {
    return (
        //Setup button replaced by onClick
        <button className="btn btn-outline-primary" onClick={
            //The code from original App.js inserted here:
            () => {Proc(globalEditor)}
        }>
            Pre-Process
        </button>
    );
};

export default ProcessButton;