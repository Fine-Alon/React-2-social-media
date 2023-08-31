export const updateObjInArr = (startArr, objPropName, secondId, newObjAtribute) => {
    return startArr.map(obj => {
        if (obj[objPropName] === secondId) {
            return {...obj, ...newObjAtribute}
        }
        return obj;
    })
}