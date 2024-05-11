
import simplifyObject from './simplifyObject';

const getReducedArray = (reducedInvoices) => reducedInvoices.reduce((totalAcc, item) => {
  const newTotalAcc = [...totalAcc];
  const objectAttributes = Object.keys(item);
  const extraHeaders = [];
  const arrayAttributes = objectAttributes
    .filter(a => Array.isArray(item[a]))
    .reduce((acc, a) => {
      const extraTag = a.split(':')[1] || a;
      const newAcc = [...acc];
      const reducedArray = item[a].map(b => simplifyObject(b, extraTag));
      newAcc.push(reducedArray);
      reducedArray.forEach(element => Object.keys(element).forEach((tag) => {
        if (extraHeaders.indexOf(tag) === -1) {
          extraHeaders.push(tag)
        }
      }))

      return newAcc;
    }, [])
  extraHeaders.forEach(element => {
    objectAttributes[element] = '';
  })
  return [
    ...newTotalAcc,
    objectAttributes.reduce((acc, element) => {
      const newAcc = { ...acc };
      newAcc[element] = Array.isArray(item[element]) ? '' : item[element]
      return newAcc;
    }, {}),
    ...arrayAttributes.reduce((acc, element) => {
      return [
        ...acc,
        ...element,
      ];
    }, []),
  ]
}, []);

export default getReducedArray;