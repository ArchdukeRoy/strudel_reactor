const updateCpsValue = (cpsValue) => {
    //insert  value in pre-process
    const textarea = document.getElementById('proc');
    //if check to stop errors if pre process is empty
    if (textarea) {
        //break process string into lines so can read 
        const lines = textarea.value.split('\n');
        //if a string in the array starts with setcps then replace it with the inputted value
        const newLines = lines.map(line => line.startsWith('setcps') ? `setcps(${cpsValue}/60/4)` : line);
        //put it back to 1 string then feed into preprocess area
        textarea.value = newLines.join('\n');
    }
}

export default updateCpsValue