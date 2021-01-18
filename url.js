const url = require('url');

const URL = url.URL;
const myURL = new URL('http://robpowers.net');
console.log('new URL():', myURL);
// new URL(): URL {
//     href:
//      'https://www.integralist.co.uk/posts/cognito/#authentication-vs-authorization',
//     origin: 'https://www.integralist.co.uk',
//     protocol: 'https:',
//     username: '',
//     password: '',
//     host: 'www.integralist.co.uk',
//     hostname: 'www.integralist.co.uk',
//     port: '',
//     pathname: '/posts/cognito/',
//     search: '',
//     searchParams: URLSearchParams {},
//     hash: '#authentication-vs-authorization' }

console.log('url.format():', url.format(myURL));
// url.format(): https://www.integralist.co.uk/posts/cognito/#authentication-vs-authorization
console.log('--------');
const parsedUrl = url.parse('http://robpowers.net');
console.log('url.parse():', parsedUrl);
// url.parse(): Url {
//     protocol: 'https:',
//     slashes: true,
//     auth: null,
//     host: 'www.integralist.co.uk',
//     port: null,
//     hostname: 'www.integralist.co.uk',
//     hash: '#authentication-vs-authorization',
//     search: null,
//     query: null,
//     pathname: '/posts/cognito/',
//     path: '/posts/cognito/',
//     href:
//      'https://www.integralist.co.uk/posts/cognito/#authentication-vs-authorization'}
console.log('url.format():', url.format(parsedUrl));
// url.format(): https://www.integralist.co.uk/posts/cognito/#authentication-vs-authorization