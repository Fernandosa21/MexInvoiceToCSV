// const fs = require('fs')
// https://spin.atomicobject.com/create-export-react-frontend/
const createFile = (fileData, fileName) => {
    const blob = new Blob([fileData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = fileName;
    link.href = url;
    console.log(link)
    link.click();
}

export default createFile;