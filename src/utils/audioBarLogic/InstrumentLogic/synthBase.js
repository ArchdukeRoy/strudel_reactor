import fixTextArea from "../../fixTextarea";

const synthBase1 = (textarea) => {
    if (!textarea) return;

    //var if string needs to be added or not
    let exists = false;

    //the code for the sounds
    const d1String = [
        "",
        "synthBase1:",
        "sound(\"bd*2,<pink pink pink brown*2>*8\")",
        ".decay(.04).sustain(0)",
        '//._scope()'
    ];

    //if empty put in the whole block
    if (!textarea) {
        let empt = []
        empt.push(...d1String);
        textarea.value = empt.join('\n');
        fixTextArea(textarea)
        return;
    }

    //break process string into lines so can read 
    const lines = textarea.value.split('\n');

    //loop over to see which line drums1:
    const newLines = lines.map(line => {
        if (line.startsWith('synthBase1:')) {
            //if line found change cpsString value
            exists = true;
            //insert prop as cps
            return `_synthBase1:`;
        } else if (line.startsWith('_synthBase1:')) {
            //if line found change cpsString value
            exists = true;
            //insert prop as cps
            return `synthBase1:`;
        }
        return line;
    });

    //if the string to set cps doesnt exist then add string with value 
    if (!exists) {
        //make sure cps is at the top if needed to be added
        newLines.push(...d1String);
    }

    //put it back to 1 string then feed into preprocess area
    textarea.value = newLines.join('\n');
    fixTextArea(textarea)
}

export default synthBase1
