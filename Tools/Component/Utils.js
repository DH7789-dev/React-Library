export const isEmpty = (value) => {
    return (
        value === undefined ||
        value === null ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (typeof value === "string" && value.trim().length === 0)
    );
};

export const getRandomInt = (min,max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.floor(Math.random() * (max - min)) + min);
}

export const wait = (duration = 1000 ) => {
    return new Promise((resolve) => {
        window.setTimeout(resolve,duration);
    })
}



export const sum = (a, b) => {
    return a + b;
}

export const getCurrentDate = (separator='') => {

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
}

export const isTypeOf = (type,variable) => {
    if(typeof variable === type){
        return true;
    }
    return false;
}

