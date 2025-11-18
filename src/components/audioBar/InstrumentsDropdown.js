import Drums1Button from './instrumentButtons/drums1Button';
import Drums2Button from './instrumentButtons/drums2Button';
import Guitar1Button from './instrumentButtons/guitar1Button';
import Guitar2Button from './instrumentButtons/guitar2Button';
import Bass1Button from './instrumentButtons/bass1Button';
import Bass2Button from './instrumentButtons/bass2Button';
import SynthBase1Button from './instrumentButtons/synthBaseButton';
import Piano1Button from './instrumentButtons/piano1Button';

const InstrumentsDropdown = ({ globalEditor }) => {
    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Sounds</button>
            <ul className="dropdown-menu p-2" style={{ minWidth: '250px' }}>
                {/*onClick to stop the accordian from closing drowdown on click*/}
                <div className="accordion accordion-flush" id="accordionFlushExample" onClick={e => e.stopPropagation()}>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">Guitar</button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            {/*TODO - replace text with buttons to enable different Piano options*/}
                            <Guitar1Button />
                            <Guitar2Button />
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">Drums</button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <Drums1Button />
                            <Drums2Button />
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">Other</button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            {/*TODO - replace text with buttons to enable different Bass options*/}
                            <Bass1Button />
                            <Bass2Button />
                            <SynthBase1Button />
                            <Piano1Button />
                        </div>
                    </div>
                </div>
            </ul>
        </div>
    )
}
export default InstrumentsDropdown