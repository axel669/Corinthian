import crypto from "crypto";

let encrypt;
let decrypt;
let hash;

encrypt = (str, key, {iv = null, algorithm = 'aes256', output = 'hex', input = 'utf8'} = {}) => {
    let encryptor;
    let result;

    key = new Buffer(key);

    if (iv === null) {
        encryptor = crypto.createCipher(algorithm, key);
    } else {
        iv = new Buffer(iv);
        encryptor = crypto.createCipher(algorithm, key, iv);
    }

    result = encryptor.update(str, input, output);
    result += encryptor.final(output);
    encryptor = null;

    return result;
};

decrypt = (str, key, {iv = null, algorithm = 'aes256', input = 'hex', output = 'utf8'} = {}) => {
    let decryptor;
    let result;

    key = new Buffer(key);

    if (iv === null) {
        decryptor = crypto.createDecipher(algorithm, key);
    } else {
        iv = new Buffer(iv);
        decryptor = crypto.createDecipher(algorithm, key, iv);
    }

    result = decryptor.update(str, input, output);
    result += decryptor.final(output);
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
