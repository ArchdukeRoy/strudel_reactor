const changeReverb = (textarea, reverb) => {
    if (!textarea) return;

    //make text area a list of strings per line
    const lines = textarea.value.split('\n');
    //if string matches then insert new reverb
    const newLines = lines.map(line => {
        if (line.startsWith('all(x => x.room')) {
            return (`all(x => x.room(${reverb}))`);
        }
        return line;
    });

    //if no volume line exists insert in at the top
    if (!lines.some(line => line.startsWith('all(x => x.room'))) {
        newLines.unshift(`all(x => x.room(${reverb}))`);
    }

    //put line back in/new line
    textarea.value = newLines.join('\n');
}

export default changeReverb