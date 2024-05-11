
import simplifyObject from './simplifyObject';

const getReducedInvoice = (totalJSON) => totalJSON.map(item => {
    const importantInfo = { ...item['cfdi:Comprobante'] }
    return simplifyObject(importantInfo, undefined, true)
})

export default getReducedInvoice;