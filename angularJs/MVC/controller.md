### angularJs——COntroller

```html
<!DOCTYPE html>
<html lang="en" ng-app="a">
<head>
    <meta charset="UTF-8">
    <title>计算器</title>
    <script type="text/javascript"src="../angular.js"></script>
</head>
<body ng-controller="calc">
    <div>单价：<input type="number" ng-model="price"></div>
    <div>数量：<input type="number" ng-model="num"></div>
    <div>总价：{{totalPrice()}}</div>
<script type="text/javascript">
    function calcControl($scope) {
        $scope.price =10;
        $scope.num =2;
        $scope.totalPrice = function () {
            return $scope.price * $scope.num;
        }
    }
    var app =angular.module("a",[]);
    app.controller("calc",calcControl);
</script>
</body>
</html>
```

ng-app 实例化一个作用域

ng-controller 查找控制器

在下面的js function中，我们看到了 

```html
function calcControl($scope) {
    $scope.price =10;
    $scope.num =2;
    $scope.totalPrice = function () {
        return $scope.price * $scope.num;
    }
}
```
申明作用域 $scope

    var app =angular.module("a",[]);
    app.controller("calc",calcControl);
这两句就有意思了，var app =angular.module("a",[])

**是指我们之前申明的在 

<html ng-app="a"> 

.....

</html>

的作用域的实例化

而 app.controller("calc",calcControl)则是将实例化一个 名为calc的calcControl控制器.

在<body ng-controller="calc">中将使用我们所实例化的calc控制器

