import createFile from './CreateFile';
import format from './format';

const JSONtoCSV = (array) => {
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
    //TODO: change file name, probably change it to "Facturas desde ${orderedInvoices[0].date} hasta ${orderedInvoices[orderedInvoices.lenght - 1].date}" or something similar
    return createFile(text, 'test.csv')
};

export default JSONtoCSV;