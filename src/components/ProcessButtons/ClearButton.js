import Proc from '../../utils/buttonLogic/Proc';
import fixTextarea from '../../utils/fixTextarea';

const ClearButton = ({ globalEditor }) => {
    return (
        //Setup button replaced by onClick
        <button className="btn btn-outline-secondary" onClick={() => {
            //The code from original App.js inserted here:
            const textarea = document.getElementById('proc');
            if (textarea) {
                //stops music
                globalEditor.stop()
                //set editor to empty
                textarea.value = "";
                //fixes  issue where text area would only update after 2nd click for clear
                requestAnimationFrame(() => {
                    fixTextarea(textarea);
                });
                //process
                Proc(globalEditor);
            }
        }
        }>
            Clear
        </button>
    );
};

export default ClearButton;