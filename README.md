# LxxTool.js
javascript常用小工具库（Commonly used widgets library，lightweight， simple Api）

### flatObject
    (obj) =====> (arr)
     
    例如 {
        aaa: 1111,
        bbb: 2222
    }   
     
    输出 [{
        name: aaa,
        value: 111,
    }, {
        name: bbb,
        value: 2222
    }]
    
### isPlainObject
    isPlainObject({})    
    // => true
     
    isPlainObject(Object.create(null));
    // => true
     
    isPlainObject(new Function());
    // => false

### objToUrl
    var aaa = {
        aaa: 1111,
        bbb: 2222,
    }
    
    objToUrl(aaa);
    // aaa=111&bbb=222
    