import updateCpsValue from '../../utils/audioBarLogic/BPMLogic';
import ProcAndPlay from '../../utils/buttonLogic/ProcAndPlay';
import { useState } from "react";

const BPM = ({ globalEditor }) => {
    //sets default bpm
    const [cpsValue, setCpsValue] = useState(140);

    return (
        <div className="d-flex align-items-center gap-2 mb-2">
            <label htmlFor="bpmIn" className="mb-0">BPM:</label>
            <input type="number" id="bpmIn" className="form-control" value={cpsValue} onChange={(e) => setCpsValue(Number(e.target.value))} style={{ width: '80px' }} />
            <button className="btn btn-outline-dark"
                //call update then proc and play to hear the changes you make
                onClick={() => {
                    updateCpsValue(cpsValue);
                    ProcAndPlay(globalEditor)
                }}>
                Update CPS
            </button>
        </div>
    )
}
export default BPM