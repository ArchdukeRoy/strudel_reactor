import ProcessText from "./ProcessText";

//Proc moved to its own class that accepts the globalEditor param, functions and uses logic same as the original
function Proc(globalEditor) {
        let proc_text = document.getElementById('proc').value;
        ProcessText(proc_text);
        globalEditor.setCode(proc_text);
    }

export default Proc