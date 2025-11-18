import guitar2 from '../../../utils/audioBarLogic/InstrumentLogic/guitar2';

const Guitar2Button = ({ }) => {
    return (
        //boostrap accordian + check button format
        <div className="accordion-body">
            <div className="input-group mb-1">
                <div className="input-group-text">
                    <input className="form-check-input mt-0" type="checkbox" id="guitar1Toggle" aria-label="Checkbox for Guitar 2"
                        //call logic for specific instrument
                        onChange={(e) => {
                            const textarea = document.getElementById('proc');
                            guitar2(textarea);
                        }}
                    />
                </div>
                <span className="input-group-text">Guitar set 2</span>
            </div>
        </div>
    )
}
export default Guitar2Button