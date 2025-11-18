const fixTextarea = (textarea) => {
    //resize text area based on whats inside
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
};

export default fixTextarea