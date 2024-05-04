const createFile = require('./CreateFile');
const format = require('./format')

const JSONtoCSV = (array, path) => {
    const headers = array
        .map(item => Object.keys(item))
        .reduce((acc, item) => {
            return [
                ...acc,
                ...item.filter(a => acc.indexOf(a) === -1)
            ]
        },[])
        .map(item => format(item));
    const text = `${headers.join(',')}\n${
        array.reduce((acc, item) => {
            return `${acc}${
                headers
                    .map(header => format(item[header]))
                    .join(',')
            }\n`
        },'')
    }`;
    createFile(text,path)
};

module.exports = JSONtoCSV;