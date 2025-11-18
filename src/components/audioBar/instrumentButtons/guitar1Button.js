import guitar1 from '../../../utils/audioBarLogic/InstrumentLogic/guitar1';

const Guitar1Button = ({ }) => {
    return (
        <div className="accordion-body">
            <div className="input-group mb-1">
                <div className="input-group-text">
                    <input className="form-check-input mt-0" type="checkbox" id="guitar1Toggle" aria-label="Checkbox for Guitar 2"
                        onChange={(e) => {
                            const textarea = document.getElementById('proc');
                            guitar1(textarea);
                        }}
                    />
                </div>
                <span className="input-group-text">Guitar set 1</span>
            </div>
        </div>
    )
}
export default Guitar1Button