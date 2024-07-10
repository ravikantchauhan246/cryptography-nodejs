// HMAC is a keyed hash of data - like a hash with a password. 
// To create a HMAC you need to have the key, therefore allowing you to verify both the authenticity and originator of the data. 
// Using a different key produces a different output.

const {createHmac,createHash} = require("crypto")

const password = 'super-secret';
const message = 'hi jack';

const hashedValue = createHash('sha256').update(message).digest('hex')

const hmac = createHmac('sha256',password).update(message).digest('hex')

const match = hashedValue === hmac

console.log(match ? "Hmmm something is wrong":"My password is safe")

// console.log(hmac)