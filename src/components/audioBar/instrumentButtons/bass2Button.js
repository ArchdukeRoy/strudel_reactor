import bass2 from '../../../utils/audioBarLogic/InstrumentLogic/bass2';

const Bass2Button = ({ }) => {
    return (
        //boostrap accordian + check button format
        <div className="accordion-body">
            <div className="input-group mb-1">
                <div className="input-group-text">
                    <input className="form-check-input mt-0" type="checkbox" id="drums1Toggle" aria-label="Checkbox for Drums 1"
                        //call logic for specific instrument
                        onChange={(e) => {
                            const textarea = document.getElementById('proc');
                            bass2(textarea);
                        }}
                    />
                </div>
                <span className="input-group-text">Bass set 2</span>
            </div>
        </div>

    )
}
export default Bass2Button