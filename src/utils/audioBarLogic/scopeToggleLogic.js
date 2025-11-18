const scopeToggle = (textarea) => {
    //if empty do nothing
    if (!textarea) return;

    //break process string into lines so can read 
    const lines = textarea.value.split('\n');

    //loop to find matching strings and switch if necessary
    const newLines = lines.map(line => {
        if (line.startsWith('//._scope()')) {
            return ('._scope()');
        } else if (line.startsWith('._scope()')) {
            return ('//._scope()');
        }
        return line;
    });
    //put it back to 1 string then feed into preprocess area
    textarea.value = newLines.join('\n');
}

export default scopeToggle
