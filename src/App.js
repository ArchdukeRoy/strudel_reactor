//Original Imports
import './App.css';
import { useEffect, useRef, useState } from "react";
import { StrudelMirror } from '@strudel/codemirror';
import { evalScope } from '@strudel/core';
import { drawPianoroll } from '@strudel/draw';
import { initAudioOnFirstClick } from '@strudel/webaudio';
import { transpiler } from '@strudel/transpiler';
import { getAudioContext, webaudioOutput, registerSynthSounds } from '@strudel/webaudio';
import { registerSoundfonts } from '@strudel/soundfonts';
import { stranger_tune } from './tunes';
import console_monkey_patch, { getD3Data } from './console-monkey-patch';

//Utils Imports
import handleD3Data from './utils/buttonLogic/handleD3Data';
import Proc from './utils/buttonLogic/Proc';
import ProcAndPlay from './utils/buttonLogic/ProcAndPlay';

//Component Imports
import PlayButton from './components/PlayButton';
import StopButton from './components/StopButton';
import ProcessButton from './components/ProcessButton';
import ProcAndPlayButton from './components/ProcAndPlayButton';

//global variable changed in favour of useState so that setupButtons are redundant and can be removed
//let globalEditor = null;

export default function StrudelDemo() {

    const hasRun = useRef(false);
    //initialise useState variable
    const [globalEditor, setEditor] = useState(null);

    //
    const [cpsValue, setCpsValue] = useState(140); // default BPM

useEffect(() => {

    if (!hasRun.current) {
        document.addEventListener("d3Data", handleD3Data);
        console_monkey_patch();
        hasRun.current = true;
        //Code copied from example: https://codeberg.org/uzu/strudel/src/branch/main/examples/codemirror-repl
            const canvas = document.getElementById('roll');
            canvas.width = canvas.width * 2;
            canvas.height = canvas.height * 2;
            const drawContext = canvas.getContext('2d');
            const drawTime = [-2, 2]; // time window of drawn haps

                //replace global editor with use state equivalent
                const editor = new StrudelMirror({
                defaultOutput: webaudioOutput,
                getTime: () => getAudioContext().currentTime,
                transpiler,
                root: document.getElementById('editor'),
                drawTime,
                onDraw: (haps, time) => drawPianoroll({ haps, time, ctx: drawContext, drawTime, fold: 0 }),
                prebake: async () => {
                    initAudioOnFirstClick(); // needed to make the browser happy (don't await this here..)
                    const loadModules = evalScope(
                        import('@strudel/core'),
                        import('@strudel/draw'),
                        import('@strudel/mini'),
                        import('@strudel/tonal'),
                        import('@strudel/webaudio'),
                    );
                    await Promise.all([loadModules, registerSynthSounds(), registerSoundfonts()]);
                },
                });

        //feed intialised editor variable into useState
        //can now use "globalEditor"
        setEditor(editor);
            
        document.getElementById('proc').value = stranger_tune
        Proc(editor)
    }

}, []);


return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <h2 className="text-center">Strudel Demo</h2>
                {/*<!-- Button trigger modal -->*/}
                <button type="button" class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Settings</button>
                {/* <!-- Modal -->*/}
                <div class="modal fade" id="exampleModalCenter" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalCenterTitle">Settings</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="container">
                                    <div class="row text-center justify-content-center">
                                        <div class="col-6 d-flex justify-content-center align-items-center mb-3">
                                            <span className="me-2">Save: </span>
                                            <button type="button" class="btn btn-outline-dark me-2">Button 1</button>
                                        </div>
                                        <div class="col-6 d-flex justify-content-center align-items-center mb-3">
                                            <span className="me-2">Upload: </span>
                                            <button type="button" class="btn btn-outline-dark me-2">Button 2</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <main>
            <div className="container-fluid">
                <div className="row g-0">
                    {/*process*/}
                    <div className="col-md-6 d-flex flex-column border-end">
                        <div className="bg-light border-bottom p-2 d-flex justify-content-between align-items-center">
                            <span className="fw-bold">Pre-Process text:</span>
                            <nav className="d-flex gap-1">
                                <ProcessButton globalEditor={globalEditor} />
                                <ProcAndPlayButton globalEditor={globalEditor} />
                                <PlayButton globalEditor={globalEditor} />
                                <StopButton globalEditor={globalEditor} />
                            </nav>
                        </div>
                        <textarea className="form-control flex-grow-1 rounded-0" id="proc" style={{ maxHeight: '400px', overflowY: 'auto', overflowX: 'auto', whiteSpace: 'pre' }}></textarea>
                    </div>
                    {/*output*/}
                    <div className="col-md-6 d-flex flex-column">
                        <div className="bg-light border-bottom p-2 d-flex justify-content-between align-items-center">
                            <span className="fw-bold">Output:</span>
                            <nav className="d-flex gap-1">
                                <PlayButton globalEditor={globalEditor} />
                                <StopButton globalEditor={globalEditor} />
                            </nav>
                        </div>
                        <div className="flex-grow-1" style={{ maxHeight: '400px', overflowY: 'auto', overflowX: 'auto', whiteSpace: 'pre' }}>
                            <div id="editor" />
                            <div id="output" />
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <nav className="navbar" style={{ backgroundColor: '#f0f0f0' }}>
                <div className="container-fluid d-flex align-items-center gap-3 flex-wrap justify-content-start">
                    {/*Radio*/}
                    <div className="form-check d-flex align-items-center gap-3">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={ProcAndPlay} defaultChecked />
                        <label className="form-check-label mb-0" htmlFor="flexRadioDefault1">p1: ON</label>
                    </div>
                    <div className="form-check d-flex align-items-center gap-3">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onChange={ProcAndPlay} />
                        <label className="form-check-label mb-0" htmlFor="flexRadioDefault2">p1: HUSH</label>
                    </div>
                    {/*Volume*/}
                    <div className="d-flex align-items-center gap-3" style={{ minWidth: '180px' }}>
                        <label htmlFor="volumeRange" className="form-label mb-0">Volume: </label>
                        <input type="range" className="form-range" min="0" max="100" id="volumeRange" style={{ height: '30px' }} />
                    </div>
                    {/*Speed*/}
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Speed</button>
                        <ul className="dropdown-menu">
                            <li><button className="dropdown-item" type="button">0.50x</button></li>
                            <li><button className="dropdown-item" type="button">0.75x</button></li>
                            <li><button className="dropdown-item" type="button">1.00x</button></li>
                            <li><button className="dropdown-item" type="button">1.50x</button></li>
                            <li><button className="dropdown-item" type="button">1.75x</button></li>
                        </ul>
                    </div>
                    {/*Instruments*/}
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Instruments</button>
                        <ul className="dropdown-menu p-2" style={{ minWidth: '250px' }}>
                            {/*onClick to stop the according from closing drowdown on click*/}
                            <div className="accordion accordion-flush" id="accordionFlushExample" onClick={e => e.stopPropagation()}>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">Piano</button>
                                    </h2>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">bvhjcvgh</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">Drums</button>
                                    </h2>
                                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">bhbgjyhubv</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">Bass</button>
                                    </h2>
                                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">jnbjhbh</div>
                                    </div>
                                </div>
                            </div>
                        </ul>
                    </div>
                    {/*BPM control*/}
                    <div className="d-flex align-items-center gap-2 mb-2">
                        <label htmlFor="bpmIn" className="mb-0">BPM:</label>
                        <input type="number" id="bpmIn" className="form-control" value={cpsValue} onChange={(e) => setCpsValue(Number(e.target.value))} style={{ width: '80px' }} />
                        <button className="btn btn-outline-dark"
                            onClick={() => {
                                //insert  value in pre-process
                                const textarea = document.getElementById('proc');
                                //if check to stop errors if pre process is empty
                                if (textarea) {
                                    //break process string into lines so can read 
                                    const lines = textarea.value.split('\n');
                                    //if a string in the array starts with setcps then replace it with the inputted value
                                    const newLines = lines.map(line => line.startsWith('setcps') ? `setcps(${cpsValue}/60/4)` : line);
                                    //put it back to 1 string then feed into preprocess area
                                    textarea.value = newLines.join('\n');
                                }
                            }}>
                            Update CPS
                        </button>
                    </div>

                </div>
            </nav>
            <canvas id="roll"></canvas>
        </main >
    </div >
);


}