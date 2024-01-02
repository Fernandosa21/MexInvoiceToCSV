const createFile = require('./CreateFile')

const JSONtoCSV = (array, path) => {
    const headers = array
        .map(item => Object.keys(item))
        .reduce((acc, item) => {
            return [
                ...acc,
                ...item.filter(a => acc.indexOf(a) === -1)
            ]
        },[]);
    const text = `${headers.join(',')}\n${
        array.reduce((acc, item) => {
            return `${acc}${
                headers
                    .map(header => item[header])
                    .join(',')
            }\n`
        },'')
    }`;
    createFile(text,path)
};

module.exports = JSONtoCSV;