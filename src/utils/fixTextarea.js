const fixTextarea = (textarea) => {
    // changes the textarea so it is resized based on current number of lines inside
    textarea.style.height = 'auto'; // reset height so it can shrink if needed
    textarea.style.height = `${textarea.scrollHeight}px`; // set height to fit content
};

export default fixTextarea