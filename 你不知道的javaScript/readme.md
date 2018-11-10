# 《你所不知道javaScript》  (上卷)

### 第一部分  作用域和闭包

1. 作用域是什么

   - **引擎**从头到尾负责整个javaScript的编译和执行过程

   - **编译器**  负责语法分析和代码生成

   - **作用域** 负责收集并维护由所有声明的标识符组成的一系列查询 并实施一套非常严格的规则确定当前执行代码对这些标识符的访问权限。

        var a = 2;

     **编译过程**  遇到 var a 编译器会查找在作用域里面是否有一个 名为为a的变量存在同一个作用域里面，如果存在变量a 则忽略变量声明 否则将在该作用域里声明一个变量a

     接下来 编译器会生成引擎执行时所需的代码，这些代码用来处理a = 2这个赋值操作。

     引擎运行时会查询作用域是否有一个a变量 如果有就 使用这个变量，没有就会抛出异常

   - **LHS 和RHS** 

     - **LHS** 左侧赋值操作   a = 2 就是一个典型
     - **RHS** 右侧赋值操作 console.log(a) 右侧查询

   - **作用域嵌套**  

     - ```
       <script type="text/javascript">    
           function foo(a) {        
           // body...     
           console.log(typeof b)     
           console.log(a+b);      
           }       
           var b = 3;   
           foo(2)//5 
        </script>
       ```

       ​**在上面代码中 foo(a)函数作用域 中的 b 变量是在 其父函数作用域中进行申明的 在子作用域中查询不到时便会在父作用域中查询** 

   - 词法作用域

     ```
     <script type="text/javascript">  
     function foo(a) {       
         var b = a*2;  
         	function bar(c) {    
        		 console.log(a+b+c)   
        		 }       
        		 bar(b*3)  
        	 }   
        	 foo(2);

     </script>
     ```

     **a b c三个变量的作用域层层嵌套  全局变量会成为自动全局对象** 

     - eval  开代码

       ```
       <script type="text/javascript">
       	function foo(a) {
       			eval(a);
       			console.log(c);
       	}
       	foo("c = 10 ");
       </script>
       ```

   猜猜会输出什么？ 结果是 10 这就是eval 将字符串原封不动的插入 

   **当使用严格模式的时候就会报错**  `function foo(a){"use strict"  eval(a) .....}` 

- - with

    ```
    <SCRIPT>
        function foo(obj) {
            with (obj) {
                a = 2;
            }
        }
        var o1 = {
            a:10
        }
        var o2 = {
            b:3
        }
        foo(o1)
        console.log(o1.a)//2
        foo(o2)
        console.log(o2.a)//undefine
        console.log(a);//2
    </SCRIPT>
    ```

    ​	你可能会惊讶 我去 为什么最后一个 console.log(a) 会打印出2 ？

   **解释： foo(o1) 时，with会将o1 中的a 赋值为 2 然后我们执行foo(o2)时，会发现 o2 中没有 a ，所以在console.log(o2.a)时 会出现undefine不过此时，因为wiith(obj){a = 2 } 会导致创建了一个全局变量 a = 2 这就是为什么最后一个会打印出 2的原因，(非严格模式中)**

###### 使用with 或eval 的后果 性能下降  使用它们就相当于半路杀出个程咬金，把之前安排好的东东全部打乱了，性能肯定下降。

1. 函数作用域和块作用域

   1. 函数中作用域

   2. 隐藏内部实现

   3. 规避冲突

   4. 全局命名空间

   5. 模块管理

      ```
      <script type="text/javascript">  
      	var a = 2;  
          function  foo() {     
          var a =3;      
          console.log(a)  
          }  
          foo();//污染了foo这个命名 (全局命名空间)而且要调用 foo()才能执行    console.log(a) 
       </script>
       更好的处理方法：var a = 2;  
       (function foo(){//匿名函数    
       var  a = 3;//内部变量不污染外部变量  
       console.log(a)})();//()是执行里面的函数
       console.log(a);
      ```

      - 块作用域 

        ```
        <script>   
        	for(var i = 0 ;i<10;i++)  
            console.log(i)   
            console.log(i)  
            for (let j = 0;j<10;j++){   
            console.log("j: " +j);
            }    console.log(j) 
            console.log("i:"+i);

           const  b = {  
          	a:5,      
            c:6     
            }     
            console.log(b.a);     
            b.a = 8;     
            console.log(b.a);
        </script>
        ```

      ​有结果可知，用var 进行变量申明 会扩散到全局 而使用let 则仅仅在变量所申明的作用块里面 在使用const 时指的是所指向的变量不能改变 例如const b = 2 ;而上面的却能够改变 是因为b.a b.c 并没有改变 意思就是 b的指针并没有改变

2. 提升 

   如下代码 有点意思的

   ```
   <script type="text/javascript">
       foo();
       function foo() {
           console.log(2)
       }
       console.log(a)
       var a = 10;// 这句代码实际是 var a; a = 10;在编译阶段就已经申明了 var a;所以上一句会出现undifine 
       /*
       console.log(a)
       a = 10;//这是在执行阶段进行的操作,上一句我们不知道a是什么，所以 直接出现ReferenceError
       */
   </script>
   ```

   ```
   <script type="text/javascript">
        foo();
        var foo = function bar() {
               console.log(2)
           }
           /*
           var foo;
           foo();//函数申明如果不是函数表达式就要赋值，因此对foo 进行undifine 赋值 导致操作错误,出现TypeError
           foo = function bar(){
     			console.log(2)
     		}
     		*/
   }
   </script>
   ```

   ```
   <script type="text/javascript">
       foo();
       var foo;
       foo = function () {
           console.log(2)
       }
       function foo() {
           console.log(1);
       }
   </script>
   ```

   输出的是1 因为函数优先。

3. 作用域闭包

   + **有点意思** 

     ```
     <script type="text/javascript">
         function foo() {
             var a = 2;
             function bar() {//bar()是函数foo内部申明的函数
                 console.log(a)
             }
             return bar;//返回为bar 
         }
         var baz = foo();//获取到了foo的返回值，为bar函数
         baz();//调用bar函数，能够正常执行，这就是闭包
     </script>
     ```

     ​**正常情况下 在foo()执行后，js会清理掉不再使用内部作用域 ，但由于返回了bar ，因此bar占据了内部作用域，导致内部作用域没有被销毁，依然能够调用 对内部作用域的调用就是闭包**

**闭包进阶1** 

```javascript
<script type="text/javascript">
    var fn;
    function foo() {
        var a = 2;
        function bar() {
            console.log(a)
        }
        fn = bar;
    }
    function baz() {
        fn();
    }
    foo();
    baz();
</script>
```

**闭包进阶2**

```
    function wait(message) {
        setTimeout(function timer() {
            console.log(message)
        },10);
    }
    wait("hello world")
</script>
```

setTimeout为全局函数，调用了内部函数 timer();

+ **必须要有外部的封闭函数 该函数至少调用一次** 
+ **封装函数必须返回至少一个内部函数，这样内部函数才能在私有作用域中形成闭包** 

```javascript
<script type="text/javascript">
    var foo = (function CoolModule(id) {
        var publicAPI = {
            change:change,
            identify:identify1
        }
        function change() {
            publicAPI.identify = identify2;
        }
        function identify1() {
            console.log(id)
        }
        function identify2() {
            console.log(id.toUpperCase())
        }
        return publicAPI;
    })("foo module");
    foo.identify();
    foo.change();
    foo.identify();
</script>
```

+ **现代模块机制** 

```javascript
<script type="text/javascript">
    var modules = (function manage() {
        var modules = {};
        function define(name,deps,impl) {
            for (var i = 0;i<deps.length;i++){
                deps[i] = modules[deps[i]];
            }
            modules[name] = impl.apply(impl,deps);
        }
        function get(name) {
            return modules[name];
        }
        return{
            define:define,
            get:get
        }
    })();
    modules.define("bar",[],function () {
            function hello(who) {
                console.log(who)
            }
            return {hello:hello}
    })
    var bar = modules.get("bar")
    bar.hello("hippo")
</script>
```



### 第二部分  this 和对象原型

1. 关于this

   ```javascript
   <script type="text/javascript">
       var obj = {
           id:"awesome",
           cool:function coolFn(){
               console.log(this.id)
           }
       }
       var id = "not awesome";//1
       obj.cool();//awesome
       setTimeout(obj.cool,100)//not awesome 主要是因为这个的块级作用域是全局，在编译过程中会引用  1 处的id 值，如果在全局中不 声明 id 则会输出undefine  
   </script>
   ```

   出现这种情况可以考虑编译过程和执行过程，解决方法 `  setTimeout(obj.cool.call(obj),100)` 强行指向obj

   this 是 当一个函数调用的时，会创建一个一个活动记录。这个记录会包含函数在哪里被调用 函数的调用方式，传入的参数等，this就是这个记录的一个属性。

2. **this 全面解析** 

   ```javascript
   <script>
       function foo() {
           console.log(this.a)
       }
       var obj = {
           a:24,
           foo:foo
       }
       var bar = obj.foo;
       var a = "hello"
       bar()
   </script>
   ```

   输出的是 hello 

   究竟是为什么呢？答案马上揭晓

   var bar 创建了一个全局变量作用域为全局

   当bar = obj.foo 时 foo里面this 所指向的  是与bar 所在同一个作用域 因此会调用 同一个作用域里面的变量a 。

   如果我们在全局变量中没有申明 a 则会输出undefine 因为全局变量中没有 变量 a 

   你可能会说我不是在变量中 obj 中申明了 a 吗？是的，的确是申明了的但是，全局变量中只有 obj 而没有 a 。

   当我们将` bar.call(obj)` 时将作用域改变到 obj 的私有作用域中时，我们就能够看到 输出是24了

   **划重点** 这就是**显式绑定** 

   或者换一种方式 ` obj.foo()` 你也会看到输出的 24。困惑吗？没什么好困惑的，obj.foo()所在作用域本来就有a;  __划重点__ 这就是**隐式绑定** 

   **硬绑定** 应用场景之一： **包裹函数** 

   ```
   <SCRIPT type="text/javascript">
       function foo(something) {
           return this.a + something
       }
       var obj = {
           a:2
       }
       var bar = function () {
           return foo.apply(obj,arguments)
       }
       var b =bar(3)
       console.log(b);
   </SCRIPT>
   ```

   **通过new来绑定** 

   ```
   <SCRIPT type="text/javascript">
       function foo(a) {
           this.a = a;
       }
       var bar = new foo(2);
       console.log(bar.a)
   </SCRIPT>
   ```

   **优先级** 

   默认绑定的优先级 < 隐式绑定 <显式绑定

   **关键的时候到了 究竟是 new绑定>隐式绑定还是相反呢？** 

    new 绑定后是创建了一个新的对象。所以比较时，就变成了两个不同的作用域，且不会相互侵占作用域。【坏笑】

   **判断this** 

   + var bar  = new foo() new绑定
   + var bar = foo.call(obj) 显式绑定
   + var bar = obj.foo() 隐式绑定
   + var bar = foo() 默认

   **间接引用**  

   ```
   <SCRIPT type="text/javascript">
       function foo() {
           console.log(this.a)
       }
       var a = 2;
       var o= {
           a:4,
           foo:foo
       }
       o.foo()//4
       var p = {
           a:8,
       }
       p.foo = o.foo;
       p.foo();//8
   ```

   **间接绑定呜呜呜** 

   **软绑定**

   ```javascript
   <SCRIPT type="text/javascript">
       if (!Function.prototype.softBind){
           Function.prototype.softBind = function (obj) {
               var fn =this;
               var curr = [].slice.call(arguments,1);
               var bound = function () {
                   return fn.apply((!this||this===(window))?obj:this,curr.concat.apply(curr,arguments));
               };
               bound.prototype = Object.create(fn.prototype);
               return bound;
           }
       }
       function foo() {
           console.log("name"+this.a)
       }

       var obj = {a:1},
           obj2 = {a:2},
           obj3 = {a:3};
       var fooBOJ = foo.softBind(obj)
       fooBOJ();//1
       obj2.foo = foo.softBind(obj);
       obj2.foo();//2
       fooBOJ.call(obj3);//3
       setTimeout(obj2.foo,10)//1
   </SCRIPT>
   ```

   **需要好好品尝** 

   **this词法**

   ```
   <script>
       function foo() {
           return (a)=>{
               console.log(this.a)
           }
       }
       var obj1 = {a:1};
       var  obj2 = {a:2};
       var bar = foo.call(obj1);
       bar.call(obj2);//1
   </script>
   ```

   换下方法试试？

   ```
   <script>
       function foo() {
           return (a)=>{
               console.log(this.a)
           }
       }
       var a =100;
       foo.call(this)();//100<---- 重点1
       var obj1 = {a:1};
       var  obj2 = {a:2};
       foo.call(obj2)();//2<----重点1
       var bar = foo.call(obj1);<---改变点
       bar.call(obj2);//1 <-----重点2
   </script>
   ```

   **发现了好玩的事情** 再一次回到了编译过程

   **近看重点1 this 和obj2 都是全局作用域， obj2是this的子集 ，所以在  `  foo.call(obj2)();//2<----重点1` 这一句的时候，依然能够正常将作用域转换到obj2 的作用域

   但是我们看下面时

       var bar = foo.call(obj1);<---改变点
       bar.call(obj2);//1 <-----重点2
   bar 的作用域为 obj1 而obj2的作用域和obj1 的作用域为并列关系，并不是子集关系，根据胖箭头函数绑定后便无法改变 所以 输出依然是 之前绑定的obj1的作用域

   ​

3. 对象

4. 混合对象类

5. 原型

6. 行为委托




