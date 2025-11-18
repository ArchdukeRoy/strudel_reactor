import fixTextArea from "../../fixTextarea";

const guitar2 = (textarea) => {
    //var if string needs to be added or not
    let exists = false;

    //the code for the sounds
    const g2String = [
        '',
        'guitar2:',
        'note("<[f#2, c#3, f#3] [a2, c3, f3] [d2, a2, d3] [e2, g2, b2] [b2, d3, g3] [g2, c3, e3] [c2, e3, g3] [a2, d3, f#3]>")',
        '.s(\'gm_electric_guitar_muted\')',
        '.release(0.125).decay("<0.4>")',
        '.fast(8)',
        '.ply("<0 0 1 1>")',
        '//._scope()'
    ];

    //if empty put in the whole block
    if (!textarea) {
        let empt = []
        empt.push(...g2String);
        textarea.value = empt.join('\n');
        fixTextArea(textarea)
        return;
    }

    //break process string into lines so can read 
    const lines = textarea.value.split('\n');

    //loop over to see which line drums1:
    const newLines = lines.map(line => {
        if (line.startsWith('guitar2:')) {
            //if line found change cpsString value
            exists = true;
            //insert prop as cps
            return (`_guitar2:`);
        } else if (line.startsWith('_guitar2:')) {
            //if line found change cpsString value
            exists = true;
            //insert prop as cps
            return (`guitar2:`);
        }
        return line;
    });

    //if the string to set cps doesnt exist then add string with value 
    if (!exists) {
        //make sure cps is at the top if needed to be added
        newLines.push(...g2String);
    }

    //put it back to 1 string then feed into preprocess area
    textarea.value = newLines.join('\n');
    fixTextArea(textarea)
}

export default guitar2
