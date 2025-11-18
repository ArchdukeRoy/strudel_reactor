import fixTextArea from "../../fixTextarea";

const drums2 = (textarea) => {
    if (!textarea) return;

    //var if string needs to be added or not
    let exists = false;

    //the code for the sounds
    const d2String = [
        '',
        "drums2:",
        "sound(`",
        "[-  -  -  - ] [-  -  -  - ] [-  -  -  - ] [oh:1 oh:1 oh:1 oh:1],",
        "[- - - -] [- - - -] [hh hh hh hh] [hh:5 hh:5 hh:5 hh:5],",
        "[-  -  - -] [- -  -  - ] [cp cp cp cp ] [ - - - -],",
        "[-  -  - -] [- -  -  - ] [bd bd bd bd ] [ bd bd bd bd],",
        "[bd:7 bd:7 bd:7 bd:7] [bd:5 bd:6 bd:7 bd:7] [bd:7 bd:7 bd:7 bd:7] [bd:5 bd:6 bd:7 bd:7]",
        "`).bank(\"RolandTR808\").slow(2)",
        ".ply(\"<1 1 0 0>\")",
        '//._scope()'
    ];

    //if empty put in the whole block
    if (!textarea) {
        let empt = []
        empt.push(...d2String);
        textarea.value = empt.join('\n');
        fixTextArea(textarea)
        return;
    }

    //break process string into lines so can read 
    const lines = textarea.value.split('\n');

    //loop over to see which line drums1:
    const newLines = lines.map(line => {
        if (line.startsWith('drums2:')) {
            //if line found change cpsString value
            exists = true;
            //insert prop as cps
            return `_drums2:`;
        } else if (line.startsWith('_drums2:')) {
            //if line found change cpsString value
            exists = true;
            //insert prop as cps
            return `drums2:`;
        }
        return line;
    });

    //if the string to set cps doesnt exist then add string with value 
    if (!exists) {
        //make sure cps is at the top if needed to be added
        newLines.push(...d2String);
    }

    //put it back to 1 string then feed into preprocess area
    textarea.value = newLines.join('\n');
    fixTextArea(textarea)
}

export default drums2
