import convert from 'xml-js';

const getTotalJSON = (files) => {
  console.log(files)
  return files.map(item => JSON.parse(convert
    .xml2json(item, { compact: true, spaces: 4 })))};

export default getTotalJSON;