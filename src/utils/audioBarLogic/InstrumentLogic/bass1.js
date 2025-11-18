import fixTextArea from "../../fixTextarea";

const bass1 = (textarea) => {
    if (!textarea) return;

    //var if string needs to be added or not
    let exists = false;

    //the code for the sounds
    const b1String = [
        '',
        "bass1:",
        "note(\"<[c#2] [c#1] [d1] [e1] [b0] [g1] [c1] [a0]>\")",
        ".s('gm_synth_bass_2').fast(8)",
        '//._scope()'
    ];

    //if empty put in the whole block
    if (!textarea) {
        let empt = []
        empt.push(...b1String);
        textarea.value = empt.join('\n');
        fixTextArea(textarea)
        return;
    }

    //break process string into lines so can read 
    const lines = textarea.value.split('\n');

    //loop over to see which line drums1:
    const newLines = lines.map(line => {
        if (line.startsWith('bass1:')) {
            //if line found change cpsString value
            exists = true;
            //insert prop as cps
            return `_bass1:`;
        } else if (line.startsWith('_bass1:')) {
            //if line found change cpsString value
            exists = true;
            //insert prop as cps
            return `bass1:`;
        }
        return line;
    });

    //if the string to set cps doesnt exist then add string with value 
    if (!exists) {
        //make sure cps is at the top if needed to be added
        newLines.push(...b1String);
    }

    //put it back to 1 string then feed into preprocess area
    textarea.value = newLines.join('\n');
    fixTextArea(textarea)
}

export default bass1
