import crypto from "crypto";

let encrypt;
let decrypt;
let hash;

encrypt = (str, key, {iv = null, algorithm = 'aes256', output = 'hex'} = {}) => {
    let encryptor;
    let result;

    key = new Buffer(key);

    if (iv === null) {
        encryptor = crypto.createCipher(algorithm, key);
    } else {
        iv = new Buffer(iv);
        encryptor = crypto.createCipher(algorithm, key, iv);
    }

    encryptor.update(str, 'utf8');
    result = encryptor.final(output);
    encryptor = null;

    return result;
};

decrypt = (str, key, {iv = null, algorithm = 'aes256', input = 'hex'} = {}) => {
    let decryptor;
    let result;

    key = new Buffer(key);

    if (iv === null) {
        decryptor = crypto.createDecipher(algorithm, key);
    } else {
        iv = new Buffer(iv);
        decryptor = crypto.createDecipher(algorithm, key, iv);
    }

    decryptor.update(str, input);
    result = decryptor.final('utf8');
    decryptor = null;

    return result;
};

hash = (str, algorithm = 'sha512') => {
    let hasher;

    hasher = crypto.createHash(algorithm);
    hasher.update(str, 'utf8');

    return hasher.digest('hex');
};

export default {
    encrypt,
    decrypt,
    hash
};
