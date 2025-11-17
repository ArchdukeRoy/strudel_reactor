const updateCpsValue = (cpsValue) => {
    //insert  value in pre-process
    const textarea = document.getElementById('proc');
    //if check to stop errors if pre process is empty
    if (textarea) {
        //var if string needs to be added or not
        let cpsString = false;

        //break process string into lines so can read 
        const lines = textarea.value.split('\n');

        //loop over to see which line has set cps
        const newLines = lines.map(line => {
            if (line.startsWith('setcps')) {
                //if line found change cpsString value
                cpsString = true;
                //insert prop as cps
                return `setcps(${cpsValue}/60/4)`;
            } return line;
        });

        //if the string to set cps doesnt exist then add string with value 
        if (!cpsString) {
            //make sure cps is at the top if needed to be added
            newLines.unshift(`setcps(${cpsValue}/60/4)`);
        }

        //put it back to 1 string then feed into preprocess area
        textarea.value = newLines.join('\n');
    }
}

export default updateCpsValue