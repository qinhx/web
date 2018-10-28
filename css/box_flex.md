# 弹性盒子

__凡是用弹性盒子都必须加上浏览器核心语句  -webkit- ;  -moz-; -ms-__

只有对父元素display属性值为box 才能对子元素进行分配

子元素按比例进行分配，如果子元素有声明大小，则剩下的按比例进行分配

**如果子元素有对宽度进行定义，则宽度优先**

使用弹性盒子的加上指定浏览器核心 -webkit-box   -webkit-box-flex 

可能是因为是新技术，之前并没有这个属性，所以需要用加上这个

##### 控制子元素方向 (orient)

有 -webkit-box-orient:vertical horizontal  默认值是inline-axis 与horizontal 效果一样  inherit 继承父元素属性

##### 控制元素对齐

box-align center start end baseline stretch(拉长)

