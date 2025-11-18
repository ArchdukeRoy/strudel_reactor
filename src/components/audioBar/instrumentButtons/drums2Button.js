import drums2 from '../../../utils/audioBarLogic/InstrumentLogic/drum2';

const Drums2Button = ({ globalEditor }) => {
    return (
        <div className="accordion-body">
            <div className="input-group  mb-1">
                <div className="input-group-text">
                    <input className="form-check-input mt-0" type="checkbox" id="drums1Toggle" aria-label="Checkbox for Drums 2"
                        onChange={(e) => {
                            const textarea = document.getElementById('proc');
                            drums2(textarea);
                        }}
                    />
                </div>
                <span className="input-group-text">Drums set 2</span>
            </div>
        </div>

    )
}
export default Drums2Button