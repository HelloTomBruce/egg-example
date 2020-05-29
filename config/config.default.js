exports.keys = 'egg-example'

exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
        '.tpl': 'nunjucks'
    }
}

exports.middleware = [
    'robot'
]

exports.robot = {
    ua: [
        /Baiduspider/i
    ]
}

