const drums1 = (textarea) => {
    if (!textarea) return;

    //var if string needs to be added or not
    let exists = false;

    //the code for the sounds
    const d1String = [
        "drums1:",
        's("bd*4,bd:1 bd:2 bd:3 hh:4 hh:5 hh:6 hh:7 hh:8")',
        '.bank("RolandTR909")'
    ];

    //break process string into lines so can read 
    const lines = textarea.value.split('\n');

    //loop over to see which line drums1:
    const newLines = lines.map(line => {
        if (line.startsWith('drums1:')) {
            //if line found change cpsString value
            exists = true;
            //insert prop as cps
            return `_drums1:`;
        } else if (line.startsWith('_drums1:')) {
            //if line found change cpsString value
            exists = true;
            //insert prop as cps
            return `drums1:`;
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
}

export default drums1
