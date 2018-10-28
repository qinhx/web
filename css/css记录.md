圆角 border-radius 

阴影 box-shadow      text-shadow

渐变 gradients 

盒模型：element padding border margin

float 属性 ：none left right inherit 四个属性 inherit 继承与父元素的float属性值

clear 是清除浮动，即不允许周围有元素 属性值有 left right both

文档定位：

position: absolute relative fixed static (inherit继承父元素)

static :CSS中的元素定义 top left right bottom 都不会生效

relative： 表现与默认值一样，可以设置top 等

fixed ： 固定于浏览器窗口 ，不随网页变化 ；

absolute: 相对于上一个父元素(非static父元素) 进行定位，如果父元素都默认，则以html文档进行定位

  

**选择器**

标签选择器，对应的标签名即可

.{class}  #{id}    通配选择*

后代选择 

父元素 > 子元素  所选择的只是 子女元素，而非所有的后代元素

 父元素  子元素  父元素中的所有后代子元素

属性选择[]

伪类选择 nth-child 所有子女元素 

​		p:nth-type()  只算p元素

:root 根元素

目标伪类 :target 

url有锚时所对应的元素 如<a href = "#id_name"></a>

:target 就可以对应id 为id_name 的元素

#### 设计更加炫目的字体

@font-face{

}

text-shadow:x轴 y轴  模糊度 颜色

字体描边 text-stroke : 宽度 颜色

**字体分栏**

column-rule:样式宽度 类型 颜色

### 背景和颜色

background-size：width height / cover /contain

cover 宽度=元素宽度 高度 = auto 

contain 宽度=auto 高度 = 元素高度

background 可以多层叠加实现背景 不过要添加位置信息，不然会覆盖

背景的显示都是盒模型中的content-box 

如果要对padding 等进行填充 如下属性

background-origin：padding-box ,border-box content-box 进行填充   填充定位

background-clip：padding-box ,border-box content-box 剪裁定位

#### 颜色模式

RGBA HSLA 

#### 个性边框

边框圆角 border-radius :可以是百分数 也可以是单个参数(圆) 也可以是两个参数(椭圆) 

单个边框角 

 border-top-left-radius

 border-top-right-radius

 border-bottom-left-radius 

border-bottom-right-radius

box-shadow 边框阴影

#### 图片边框

border-image-source:url()

border-image-slice

**通过resize改变输入框的大小**

可以设置overflow的元素有resize 来设置边框大小

resize:none 用户无法改变元素尺寸 ，both等比例调整 horizontal (宽度)  vertical(高度)  

目前只有 webkit的浏览器才支持

