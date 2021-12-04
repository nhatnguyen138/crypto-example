const { createHash } = require('crypto')

// Create a string hash

function hash(input) {
  return createHash('sha256').update(input).digest('base64')
}

// Compare two hashed passwords

let password = 'thisisthepassword'
const hash1 = hash(password)
console.log(hash1)


password = 'isthisthepassword'
const hash2 = hash(password)
const match = hash1 === hash2

console.log(match ? '✔️  password match' : '❌  password does not match')
