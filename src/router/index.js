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
import D3Init from '@/components/d3_dic/d3_init'
import D3Chord from '@/components/d3_dic/d3_chord'
import D3Test from '@/components/d3_dic/d3_test'

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
        path:'d3_init',
        name: 'D3Init',
        component: D3Init
      },{
        path:'d3_chord',
        name: 'D3Chord',
        component: D3Chord
      },{
        path:'d3_test',
        name: 'D3Test',
        component: D3Test
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
