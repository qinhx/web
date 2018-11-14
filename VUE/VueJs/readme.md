# 			VUE.js学习记录

+ 基础特性

  + 模板

  ```javascript
      <script type="x-template" id="tp1">'
          <div id=""wrapper>
              <div class="tp1">
                  <p>this is a tpl from script tag</p>
              </div>
              <div class="tp1">
                  <p>this is a tpl from script tag</p>
              </div>
          </div>
      </script>
  ```

我们通过` script`标签来进行模板定义 里面的模板必须有一个父标签，否则只会选取第一个标签中的

``````javascript
<SCRIPT type="text/javascript">
        var app = new Vue({
            el:'#app',//元素中的html将被换成#tp1中的 html 内容
            template:'#tp1',
        })
</SCRIPT>
``````

```javascript
<div id = "app">
    <p>123</p>
</div>
```
**最后我们在chrome中看到的文档树将是** 

```javascript
    <div id=""wrapper>
        <div class="tp1">
            <p>this is a tpl from script tag</p>
        </div>
        <div class="tp1">
            <p>this is a tpl from script tag</p>
        </div>
    </div> 
```
+ + 自定义组件

    ```javascript
    <script type="text/javascript">
        Vue.component("message",{
            props:['content','title'],//属性
            data:function () {//数据
                return {
                    name:'gavin'
                }
            },
            template: "<div><p>{{title}}</p>" +
                "<h1>{{content}}<small>{{name}}</small></h1>" +
                "</div>"
        })
        new Vue({ el: '#app' })//这一句必须要，是为了指明 vue的作用域
    </script>
    ```


+ + methods

  ```javascript
  var vm = new Vue({
      el: '#app',
      data:{a:1},
      methods:{"Ealter":function () {
              alert(this.a)
          }
      }
  })
  ```

​	注意**是methods** 不是**method** 二者区别是**method**是网络请求的参数有` get post` 

+ + 数据绑定

  ```javascript
  <div id="app">
      <span v-bind:id = "'id-'+id">{{name}}</span>
      <p>{{index !== 0 ? names[0]:names[1]}}</p>
      <p v-for = "nam in names">{{nam}}</p>
      <ul v-for = "item in items">
          <li>{{item|json}}</li>
          <li>{{item.name}}<span>{{item.version}}</span></li>
      </ul>
      <img v-bind:src="src"/>
  </div>

  <script type="text/javascript">
      var vm = new Vue({
          el:"#app",
          data:{
              name:"Vue",
              id:1,
              src:"../assets/img/a.png",
              index:0,
              names:["vue1","vue2"],
              items:[
                  {name:"css",version:"1.0"},
                  {name:"js",version:"3.0"},
                  {name:"html",version:"2.0"}
              ]
          }
      })
  </script>
  ```

**在绑定的时候用了v-bind: 就不能用{{}}来绑定了** 

+ 指令
+ 过滤器
+ 过渡
+ 组件
+ Vue.js常用插件
+ Vue.js工程实例
+ 状态管理：vuex
+ 跨平台开发:weex
+ Vue.js 2.0 新特性