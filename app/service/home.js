const Service = require('egg').Service

class HomeService extends Service {
    async index() {
        const dataList = await new Promise((resolve) => {
            setTimeout(() => {
                const dataList = {
                    list: [
                        { id: 1, title: 'this is news 1', url: '/news/1', time: 1590651522 },
                        { id: 2, title: 'this is news 2', url: '/news/2', time: 1590651522 }
                    ]
                };
                resolve(dataList)
            })
        })
        return dataList
    }
}

module.exports = HomeService