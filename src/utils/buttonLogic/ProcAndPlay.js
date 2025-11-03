import Proc from "./Proc";

function ProcAndPlay(globalEditor) {
    if (globalEditor != null && globalEditor.repl.state.started == true) {
        console.log(globalEditor)
        Proc(globalEditor)
        globalEditor.evaluate();
    }
}

export default ProcAndPlay