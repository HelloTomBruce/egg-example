module.exports = app => {
    app.once('server', server => {
        console.log('app start')
    })
    app.on('err', (err, ctx) => {
        console.log('has error')
    })
    app.on('request', ctx => {
        console.log('request')
    })
    app.on('response', (ctx) => {
        console.log('response')
    })
}