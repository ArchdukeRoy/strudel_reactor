import Proc from "./Proc";

//ProcAndPlay moved to its own class that accepts the globalEditor param, functions and uses logic same as the original
function ProcAndPlay(globalEditor) {

    const textarea = document.getElementById('proc');
    // PLACEHOLDER: && (globalEditor.repl.state.started === false)) how to check if something is running
    if (globalEditor != null) {
        globalEditor.stop();
        Proc(globalEditor)
        //only plays if not null
        if (textarea.value) {
            globalEditor.evaluate();
        }
    } else {
        Proc(globalEditor)
    }
}

export default ProcAndPlay