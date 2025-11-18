import scopeToggle from '../../utils/audioBarLogic/scopeToggleLogic';
import ProcAndPlay from '../../utils/buttonLogic/ProcAndPlay';


const ScopeToggleButton = ({ globalEditor }) => {
    const textarea = document.getElementById('proc');

    return (
        <div className="d-flex align-items-center gap-2 mb-2">
            <button className="btn btn-outline-dark"
                //call scope the process and play
                onClick={() => {
                    scopeToggle(textarea);
                    ProcAndPlay(globalEditor)
                }}>
                Sound Visualiser Toggle
            </button>
        </div>
    )
}
export default ScopeToggleButton