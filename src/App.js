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
import NavBar from './components/NavBar/navbar'

import VolumeSlider from './components/audioBar/volumeSlider'
import InstrumentsDropdown from './components/audioBar/InstrumentsDropdown'
import BPM from './components/audioBar/BPM'

import PlayButton from './components/ProcessButtons/PlayButton';
import StopButton from './components/ProcessButtons/StopButton';
import ProcessButton from './components/ProcessButtons/ProcessButton';
import ProcAndPlayButton from './components/ProcessButtons/ProcAndPlayButton';

//global variable changed in favour of useState so that setupButtons are redundant and can be removed
//let globalEditor = null;

export default function StrudelDemo() {

    const hasRun = useRef(false);
    //initialise useState variable
    const [globalEditor, setEditor] = useState(null);

    //sets default volume
    const [volume, setVolume] = useState(1);

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
        <NavBar/>
        <main>
            <div className="container-fluid">
                <div className="row g-0">
                    {/*preprocess*/}
                    <div className="col-md-6 d-flex flex-column border-end">
                        <div className="bg-light border-bottom p-2 d-flex justify-content-between align-items-center">
                            <img src="/iconImages/pre.png" alt="" style={{ height: "35px" }}/>
                            <nav className="d-flex gap-1">
                                <ProcessButton globalEditor={globalEditor} />
                                <ProcAndPlayButton globalEditor={globalEditor} />
                                <PlayButton globalEditor={globalEditor} />
                                <StopButton globalEditor={globalEditor} />
                            </nav>
                        </div>
                        <textarea className="form-control flex-grow-1 rounded-0" id="proc" style={{ maxHeight: '400px', overflowY: 'auto', overflowX: 'auto', whiteSpace: 'pre', caretColor: 'black' }}></textarea>
                    </div>
                    {/*output*/}
                    <div className="col-md-6 d-flex flex-column">
                        <div className="bg-light border-bottom p-2 d-flex justify-content-between align-items-center">
                            <img src="/iconImages/out.png" alt="" style={{ height: "35px" }}/>
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
                    {/*Volume*/}
                        <VolumeSlider globalEditor={globalEditor}/>
                    <div>
                    </div>
                    {/*Instruments*/}
                    <InstrumentsDropdown/>
                    {/*BPM control*/}
                    <BPM globalEditor={globalEditor} />
                </div>
            </nav>
            <canvas id="roll"></canvas>
        </main >
    </div >
);


}