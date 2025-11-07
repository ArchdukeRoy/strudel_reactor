const changeVolume = (textarea, volume) => {
    if (!textarea) return;
    //make text area a list of strings per line
    const lines = textarea.value.split('\n');
    //if string matches then insert new volume
    const newLines = lines.map(line =>
        line.startsWith('all(x => x.gain') ? `all(x => x.gain(${volume}))` : line
    );

    //if no volume line exists insert in
    if (!lines.some(line => line.startsWith('all(x => x.gain'))) {
        newLines.push(`all(x => x.gain(${volume}))`);
    }

    //put line back in/new line
    textarea.value = newLines.join('\n');
}

export default  changeVolume