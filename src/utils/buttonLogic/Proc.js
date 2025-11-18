import fixTextArea from "../fixTextarea";

//Proc moved to its own class that accepts the globalEditor param, functions and uses logic same as the original with ammended cases for missing imports of samples
function Proc(globalEditor) {
    let textareaID = document.getElementById('proc');
    let textarea = textareaID.value;

    if (!textarea) {
        globalEditor.setCode("");
        return
    };

    //import string
    const impString = [
        "samples('github:algorave-dave/samples')",
        "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')",
        "samples('https://raw.githubusercontent.com/Mittans/tidal-drum-machines/main/machines/tidal-drum-machines.json')"
    ];

    //if empty put in the whole block
    if (!textarea) {
        let empt = []
        empt.push(...impString);
        textareaID.value = empt.join('\n');
        fixTextArea(textareaID)
        return;
    }

    //break process string into lines so can read 
    const lines = textarea.split('\n');

    //for each string in impString check if it is in the push to top if not in doc
    impString.forEach(impLine => {
        //returns true or false if match to the string is found or not
        const exists = lines.some(line => line.includes(impLine));
        //if no match found add impLine to top
        if (!exists) {
            lines.unshift(impLine);
        }
    });

    //put it back to 1 string then feed into preprocess area
    let proc_text = lines.join('\n');
    textareaID.value = proc_text;
    fixTextArea(textareaID)


    globalEditor.setCode(proc_text);
    }

export default Proc