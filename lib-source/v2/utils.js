const warningFunc = errorMessage =>
    () => console.warn(errorMessage);

export default {
    warningFunc,
    transferProps(sources) {
        const dest = {};

        for (const [destName, source] of Object.entries(sources)) {
            // debugger;
            const [sourceObj, props] = source;
            const copy = {};

            if (sourceObj !== null) {
                for (const [sourceProp, destProp] of Object.entries(props)) {
                    if (sourceObj[sourceProp] !== undefined) {
                        copy[destProp] = sourceObj[sourceProp];
                    }
                }

                if (Object.keys(copy).length > 0) {
                    dest[destName] = copy;
                }
            }
        }

        return dest;
    }
};
