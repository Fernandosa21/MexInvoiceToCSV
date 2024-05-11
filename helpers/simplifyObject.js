const simplifyObject = (value, extraTag) => {
    const keys = Object.keys(value)
    return keys.reduce((acc, item) => {
        const newObject = {...acc};
        if(typeof value[item] === 'object'){
            const splitTag = item.split(':')
            const checkTag = splitTag[1] ? splitTag[1] : extraTag
            if(Array.isArray(value[item])){
                newObject[`${item}`] = value[item];
                return newObject;
            }
            return {
                ...newObject,
                ...simplifyObject(value[item], checkTag)
            }
        }
        newObject[`${item}${extraTag ? ` ${extraTag}` : '' }`] = value[item];
        return newObject;
    }, {});
}
export default simplifyObject;