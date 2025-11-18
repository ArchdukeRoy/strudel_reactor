import bass1 from '../../../utils/audioBarLogic/InstrumentLogic/bass1';

const Bass1Button = ({ }) => {
    return (
        //boostrap accordian + check button format
        <div className="accordion-body">
            <div className="input-group mb-1">
                <div className="input-group-text">
                    <input className="form-check-input mt-0" type="checkbox" id="drums1Toggle" aria-label="Checkbox for Drums 1"
                        //call logic for specific instrument
                        onChange={(e) => {
                            const textarea = document.getElementById('proc');
                            bass1(textarea);
                        }}
                    />
                </div>
                <span className="input-group-text">Bass set 1</span>
            </div>
        </div>

    )
}
export default Bass1Button