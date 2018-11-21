import Home from '../pages/Home.vue'
import Explorer from '../pages/Explorer.vue'
import Cart from '../pages/Cart'
import Me from '../pages/Me'
import bookDetail from '../pages/bookdateil'
import checkOut from '../pages/checkOut'
import proFile from '../pages/proFile'
import orders from '../pages/orders'
const Router =[
  {name:'home',path:'/home',component:Home},
  {name:'explorer', path:'/Explorer',component:Explorer},
  {name:'me',path:'/Me',component:Me},
  {name:'cart',path:'/Cart',component:Cart},
  {name:'checkOut',path:'/checkOut',component:checkOut},
  {name:'proFile',path:'/proFile',component:proFile},
  {name:'orders',path:'/orders',component:orders},
  {name:'bookDetail',path:'/books/:id',component:bookDetail},
];
export  {
  Router
}
