const generateRandomString = (length, characters) => {
    let result = '';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export const generateRandomAlpha = length => {
    return generateRandomString(length, 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz');
}

export const generateRandomAlphaNumeric = length => {
    return generateRandomString(length - 1, 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz') + generateRandomNumeric(1);
}

export const generateRandomNumeric = length => {
    return Number(generateRandomString(1, '123456789') + generateRandomString(length-1, '0123456789'));
}

export const generateRandomEmail = () => {
    return generateRandomAlphaNumeric(12) + '@gmail.com';
}



