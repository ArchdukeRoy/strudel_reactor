import changeReverb from '../../utils/audioBarLogic/reverbLogic';
import ProcAndPlay from '../../utils/buttonLogic/ProcAndPlay';
import { useState } from 'react';

const ReverbSlider = ({ globalEditor }) => {
    const [reverb, setReverb] = useState(0);

    return (
        <div className="d-flex align-items-center gap-3" style={{ minWidth: '180px' }}>
            <label htmlFor="reverbRange" className="form-label mb-0">Reverb: {reverb}%</label>
            {/*call the volume function and put the text area and volume values in*/}
            <input type="range" className="form-range" min="0" max="200" id="reverbRange" style={{ height: '30px' }} value={reverb}
                onChange={e => setReverb(Number(e.target.value))}
                onMouseUp={e => {
                changeReverb(document.getElementById('proc'), e.target.value / 100);
                ProcAndPlay(globalEditor);
                setReverb(Number(e.target.value))
            }} />
        </div>
    )
}
export default ReverbSlider