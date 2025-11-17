import changeVolume from '../../utils/audioBarLogic/volumeLogic';
import ProcAndPlay from '../../utils/buttonLogic/ProcAndPlay';

const VolumeSlider = ({globalEditor }) => {
    return (
        <div className="d-flex align-items-center gap-3" style={{ minWidth: '180px' }}>
            <label htmlFor="volumeRange" className="form-label mb-0">Volume: </label>
            {/*call the volume function and put the text area and volume values in*/}
            <input type="range" className="form-range" min="0" max="100" id="volumeRange" style={{ height: '30px' }} onMouseUp={e => {
                changeVolume(document.getElementById('proc'), e.target.value / 100);
                ProcAndPlay(globalEditor)
            }} />
        </div>
    )
}
export default VolumeSlider