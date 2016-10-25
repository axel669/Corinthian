import crypto from "crypto";

let encrypt;
let decrypt;
let hash;

/**
    @type Object
    @name secure
    @desc An object with security related functions.
*/

/**
    @type Function
    @name encrypt
    @parent secure
    @static
    @desc
        Encrypts a string using the given options.
    @param {String} data
        The data to encrypt.
    @param {String, Buffer} key
        The encryption key.
    @param {Object} options
        @property {String, Buffer} [optional] iv
            The initial vector to use for encryption.
        @property {String} [optional] algorithm
            The encryption algorithm to use. Default is AES256.
        @property {String} [optional] input
            The form that the input is in. Default is utf8 string.
        @property {String} [optional] output
            The form that the output should be in. Default is hex.
*/
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
    str = null;
    key.fill(0);

    return result;
};

/**
    @type Function
    @name decrypt
    @parent secure
    @static
    @desc
        Decrypts a string using the given options.
    @param {String} data
        The data to encrypt.
    @param {String, Buffer} key
        The encryption key.
    @param {Object} options
        @property {String, Buffer} [optional] iv
            The initial vector to use for encryption.
        @property {String} [optional] algorithm
            The decryption algorithm to use. Default is AES256.
        @property {String} [optional] input
            The form that the input should be in. Default is hex.
        @property {String} [optional] output
            The form that the output is in. Default is utf8 string.
*/
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
    str = null;
    key.fill(0);

    return result;
};

/**
    @type Function
    @name hash
    @parent secure
    @static
    @desc
        Returns a hash of the string using the given algorithm.
    @param {String} str
        The string to hash.
    @param {String} [optional] algorithm
        The hashing algorithm to use. Default is SHA512.
*/
hash = (str, algorithm = 'sha512') => {
    let hasher;

    hasher = crypto.createHash(algorithm);
    hasher.update(str, 'utf8');
    str = null;

    return hasher.digest('hex');
};

export default {
    encrypt,
    decrypt,
    hash
};
