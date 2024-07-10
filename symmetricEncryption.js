// Encryption is the process of making a message confidential (like a hash), 
// while allowing it to be reversible (decrypted) with the proper key. 
// Each time a message is encrypted it is randomized to produce a different output. 
// In symmetric encryption, the same key is used to encrypt and decrypt the message.


const {createCipheriv,createDecipheriv,randomBytes}  = require("crypto")

const message = "Stay Hungry, Stay Foolish"
const key = randomBytes(32)
const iv = randomBytes(16)
// console.log(key)
// console.log(iv)

const cipher = createCipheriv('aes256',key,iv);

const encrpytedMessage = cipher.update(message,'utf-8','hex')+cipher.final("hex")

console.log(`Encrypted Message:${encrpytedMessage}`)

const decipher = createDecipheriv('aes256',key,iv)
// const encrpytedMessage = "cfe598f461b969fb501182e2a39713cdeb8449c1747f44f62d8160b2136e21e3"

const decryptedMessage = decipher.update(encrpytedMessage,'hex','utf-8')+decipher.final('utf-8')

console.log(`Decrypted Message : ${decryptedMessage.toString('utf-8')}`)
