const guitar1 = (textarea) => {
    if (!textarea) return;

    //var if string needs to be added or not
    let exists = false;

    //the code for the sounds
    const g1String = [
        '',
        'guitar1:',
        'note("<[e2, b2, e3] [g2, b2, d3] [a2, e3, a3] [b2, f#3, b3] [e2, b2] [c3, g3] [g2, d3] [d3, a3]>")',
        '.s(\'gm_acoustic_guitar_nylon\').fast(8)',
        '//_scope()'
    ];
    //break process string into lines so can read 
    const lines = textarea.value.split('\n');

    //loop over to see which line drums1:
    const newLines = lines.map(line => {
        if (line.startsWith('guitar1:')) {
            //if line found change cpsString value
            exists = true;
            //insert prop as cps
            return `_guitar1:`;
        } else if (line.startsWith('_guitar1:')) {
            //if line found change cpsString value
            exists = true;
            //insert prop as cps
            return `guitar1:`;
        }
        return line;
    });

    //if the string to set cps doesnt exist then add string with value 
    if (!exists) {
        //make sure cps is at the top if needed to be added
        newLines.push(...g1String);
    }

    //put it back to 1 string then feed into preprocess area
    textarea.value = newLines.join('\n');
}

export default guitar1
