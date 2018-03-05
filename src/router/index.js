import Vue from 'vue'
import Router from 'vue-router'
import Hotel from '@/components/hotel'
import HotelB from '@/components/hotelB'
import Menu from '@/components/menu'
import D3First from '@/components/d3/d3First'
import D3Second from '@/components/d3/d3Second'

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
