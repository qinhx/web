# 《你所不知道javaScript》  (下卷)



### 第五部分 起步上路

1. 深入编程
2. 深入JavaScript
3. 深入“你不知道的JavaScript" 系列

### 第六部分 ES6 及更新版本

1. ES？ 现在与未来
2. 语法
3. 代码组织
4. 异步流控制
5. 集合
6. 新增 api
7. 元编程
8. ES6之后

## 闭包

``````javascript
function makeClosures(arr, fn) {
    var result = [];
    arr.forEach(function(e){
        result.push(function(num){
            fn(num)
        })(e);
    });
    return result;
}
``````

fn(arr[i]) = result[i]()