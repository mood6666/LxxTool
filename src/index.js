/**
 * @作者    xiongjin@douyu.tv
 * @时间    2017/9/20
 */

// 把类似    {aaa: 1111, bbbb: 2222} 这样的数据转成 [{name: aaa, value: 111}, {name: bbbb, value: 222222}]
// 目标api   flatObject(obj)

function flatObject(obj) {
    return Object.keys(obj).map((item) => {
        return {
            name: item,
            value: obj[item],
        }
    });
}

function isPlainObject(value) {
    return Object.getPrototypeOf(value) === null || Object === value.constructor;
}

function objToUrl(obj) {
    return Object.keys(obj).filter((x) => {
        if (typeof obj[x] === 'object') {
            console.warn(`objToUrl出现了object,key为（${x}）`);
            return false;
        }
        return obj[x];
    }).map(x => `${x}=${obj[x]}`).join('&');
}






















