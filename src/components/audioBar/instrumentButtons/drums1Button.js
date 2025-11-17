import drums1 from '../../../utils/audioBarLogic/InstrumentLogic/drum1';

const Drums1Button = ({ globalEditor }) => {
    return (
        <div className="accordion-body">
            <div className="input-group">
                <div className="input-group-text">
                    <input
                        className="form-check-input mt-0" type="checkbox" id="drums1Toggle" aria-label="Checkbox for Drums 1"
                        onChange={(e) => {
                            const textarea = document.getElementById('proc');
                            drums1(textarea);
                        }}
                    />
                </div>
                <span className="input-group-text">Enable Drums 1</span>
            </div>
        </div>

    )
}
export default Drums1Button