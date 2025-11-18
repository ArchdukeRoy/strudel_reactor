import changeVolume from '../../utils/audioBarLogic/volumeLogic';
import ProcAndPlay from '../../utils/buttonLogic/ProcAndPlay';
import { useState } from 'react';

const ReverbSlider = ({ globalEditor }) => {
    const [volume, setVolume] = useState(100);

    return (
        <div className="d-flex align-items-center gap-3" style={{ minWidth: '180px' }}>
            <label htmlFor="volumeRange" className="form-label mb-0">Volume: {volume}%</label>
            {/*call the volume function and put the text area and volume values in*/}
            <input type="range" className="form-range" min="0" max="200" id="volumeRange" style={{ height: '30px', accentColor: 'blue' }} value={volume}
                onChange={e => setVolume(Number(e.target.value))}
                onMouseUp={e => {
                changeVolume(document.getElementById('proc'), e.target.value / 100);
                ProcAndPlay(globalEditor);
                setVolume(Number(e.target.value))
            }} />
        </div>
    )
}
export default ReverbSlider