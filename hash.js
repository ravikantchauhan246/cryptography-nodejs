const {createHash} = require("crypto")

//Create a string hash

function hash(str){
    return createHash('sha256').update(str).digest("binary") // generally the has value is in Buffer => which is used for representing binary values <Buffer a2 s1 .....>
}

// Compare two hashed password

let password = "hello world"

const hash1  = hash(password);

console.log(hash1)

password = "hello world"

const hash2 = hash(password)

console.log(hash2)

const match = hash1 === hash2

console.log(match ? "password matched":"password does not match")