function changeVolume(textarea, volume) {
    if (!textarea) return;

    // Break process string into lines so can read
    const lines = textarea.value.split('\n');

    // If a string in the array starts with all(x => x.gain then replace it with the inputted value
    const newLines = lines.map(line =>
        line.startsWith('all(x => x.gain') ? `all(x => x.gain(${volume}))` : line
    );

    // If no existing line was replaced, add a new one
    if (!lines.some(line => line.startsWith('all(x => x.gain'))) {
        newLines.push(`all(x => x.gain(${volume}))`);
    }

    // Put it back to 1 string then feed into preprocess area
    textarea.value = newLines.join('\n');
}

export default  changeVolume