const processENV = process.env.TEST_ENV
const env = processENV || 'dev'
console.log('Test Environment is: ' + env)


const config = {
    apiUrl: 'https://dummyjson.com',
    userName: 'emilys',
    userPassword: 'emilyspass'
}

if(env === 'qa'){
    config.userName = 'sophiab',
    config.userPassword = 'sophiabpass'
}

if(env === 'prod'){
    config.userName = 'michaelw',
    config.userPassword = 'michaelwpass'
}

export {config}