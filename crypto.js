// https://medium.com/javascript-in-plain-english/6-useful-node-js-internal-modules-b3748c89c899

// 1. One-way encryption
// > Hash
const crypto = require('crypto');

console.log('base64:', crypto.createHash('sha512').update('password').digest('base64'));
// base64: sQnzu7wkTrgkQZF+0G1hi5AI3Qmzvv0bXgc5THBqi7mAsdd4Xll27ASbRt9fEyavWi6m0QP9B8
// lThf+rDKy8hg==
console.log('hex:', crypto.createHash('sha512').update('password').digest('hex'));
// hex: b109f3bbbc244eb82441917ed06d618b9008dd09b3befd1b5e07394c706a8bb980b1d7785e597
// 6ec049b46df5f1326af5a2ea6d103fd07c95385ffab0cacbc86
console.log('base64:', crypto.createHash('sha512').update('another password').digest('base64'));
// base64: OQ3BGSirE9o4ruKs+kwx43TCX/leAU5wO/D4IAQlLfppai4YsjoBbptGYiKFURkaWoenzb/FPe+Uy8K3Ufa77Q==




// > pbkdf2 (string + salt)

// const crypto = require('crypto');

crypto.randomBytes(64, (err, buf) => {
    const salt = buf.toString('base64');
    console.log('salt:', salt);
//     salt: mLjnCvQoCTVwKuxBbLIuVowWz+PQL+itbMjxNmhVkd30+nFpQ9RHbmqXajVQVqyjNX98Osaf0Nwc
//     WeoHHNIceg==    
    crypto.pbkdf2('password', salt, 100000, 64, 'sha512', (err, key) => {
        console.log('password:', key.toString('base64'));
//         password: /ypKwHUODb9G4VL6QBw7XAl5jrTZHtSqDeVTKmz5P8ZxZPo7vUwKCqPFPf5Va6lJHInh6zXe
//         hRaFAA9Cj/KBxQ==        

    })
})



// 2. Two-way encryption
// cipher

// const crypto = require('crypto');

const cipher = crypto.createCipher('aes-256-cbc', 'key12');
let result = cipher.update('a sentence to encrypt', 'utf8', 'base64');
result += cipher.final('base64');
console.log('encryption:', result);
// encryption: lxiXXOtkXXfz5+GczTE61DRCsU0c1+ANaBjwbuLwnxc=

const decipher = crypto.createDecipher('aes-256-cbc', 'key12');
let result2 = decipher.update(result, 'base64', 'utf8');
result2 += decipher.final('utf8');
console.log('decryption:', result2);
// decryption: a sentence to encrypt