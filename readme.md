### js记录

通过function 定义的函数是全局的

通过var 定义的函数必须先定义再调用

ES6定义 let 和const 作用域局限于(if,for,while,{})

函数对象可以作为参数



function add(){ // 可变参数
var c=0;
for (var i=0; i<arguments.length;i++){
var c=parseInt(arguments[i]) +c ;
}
alert(Array.isArray(arguments)); //false. arguments并非数组
return c;
} 

无论函数有无参数，arguments 都作为函数的可变参数



### 闭包

**创建函数时自动保存作用域内的上下文环境供以后调用时使用，保存上下文环境的对象就是闭包**

字面值(值传递)  实参x被复制一份，复制的那一份作为参数





### Document 对象

js 是脚本解释型语言，与js的位置有关系



<nav> 标签 属于导航标签



window.promote()是在对话框进行输入类容

document.write()是在dom中写入信息

window.alter() 警告对话框

 变量有：boolean undefined array int  string null object

分支语句与其他语一样 if else ;switch case break

比较 

===绝对值相等

！== 绝对值不等

**循环语句：**

while(条件)  

for()

do{

}while()









