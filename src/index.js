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


