const {scryptSync,randomBytes,timingSafeEqual} = require("crypto")

function signup(email,password){
    const salt = randomBytes(16).toString("hex");
    const hashedPassword = scryptSync(password,salt,32).toString("hex");

    const user = {email,password: `${salt}:${hashedPassword}`}

    users.push(user)

    return user
}

function login(email,password){
    const user = users.find(x=> x.email === email);

    const[salt,key] = user.password.split(":")
    const hashedBuffer  = scryptSync(password,salt,32)

    const keyBuffer = Buffer.from(key,"hex")
    const match = timingSafeEqual(hashedBuffer,keyBuffer)

    if(match){
        return "login success!"
    }else{
        return "login fail"
    }


}
const users = []

const user = signup("ravikant@chauhan","password")

console.log(user)

const result = login("ravikant@chauhan","password")

console.log(result)