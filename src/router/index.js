import Vue from 'vue'
import Router from 'vue-router'
import Hotel from '@/components/hotel'
import HotelB from '@/components/hotelB'
import Menu from '@/components/menu'
import D3First from '@/components/d3/d3First'
import D3Second from '@/components/d3/d3Second'
import D3Three from '@/components/d3/d3Three'
import D3Four from '@/components/d3/d3Four'
import D3Circles from '@/components/d3_dic/d3_circles'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Menu',
      component: Menu,
      children:[
      {
        path: '',
        redirect: { name: 'Hotel' }
      },{
        path:'d3_first',
        name: 'D3First',
        component: D3First
      },{
        path:'d3_second',
        name: 'D3Second',
        component: D3Second
      },{
        path:'d3_three',
        name: 'D3Three',
        component: D3Three
      },{
        path:'d3_four',
        name: 'D3Four',
        component: D3Four
      },{
        path:'d3_circles',
        name: 'D3Circles',
        component: D3Circles
      },{
        path:'A',
        name: 'Hotel',
        component: Hotel
      },{
        path:'B',
        name: 'HotelB',
        component: HotelB
      }]
    }
  ]
})
