const Mock = require('mockjs');

const mockFiles = require.context('./modules', false, /\.js$/);

console.log('%c [ mockFiles ]-6', 'font-size:13px; background:pink; color:#bf2c9f;', mockFiles)

let mocks = [];
mockFiles.keys().forEach(key => {
    for (let item in mockFiles(key).default) {
        mocks.push(mockFiles(key).default[item])
    }
})

mocks.forEach(item => {
    Mock.mock(item.url, item.type, item.response)
})