import {createRouter,createWebHashHistory} from 'vue-router'
import SwitchDemo from "../components/SwitchDemo.vue"
import DialogDemo from "../components/DialogDemo.vue"
import ButtonDemo from "../components/ButtonDemo.vue"
import TabsDemo from "../components/TabsDemo.vue"
import Home from '../views/Home.vue'
import Doc from '../views/Doc.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/doc', component: Doc,children: [
      {path:'switch',component: SwitchDemo},
      {path:'dialog',component: DialogDemo},
      {path:'button',component: ButtonDemo},
      {path:'tabs',component: TabsDemo}
    ] },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
