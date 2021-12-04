const { createHmac } = require('crypto')

const key = 'secretkeysomethingsomething';
const message = 'Hello World!';

const hmac = createHmac('sha256', key).update(message).digest('hex')

console.log(hmac);

const key2 = 'someotherkey'
const hmac2 = createHmac('sha256', key2).update(message).digest('hex')

console.log(hmac2)