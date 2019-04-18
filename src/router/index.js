import Vue from 'vue'
import Router from 'vue-router'
import ParkPage from '../components/ParkPage.vue'
import TreePage from '../components/TreePage.vue'
import List from '../components/List.vue'
import Splash from '../components/Splash.vue'

import { apiRequestPromise } from '../services/bootstrap-park-data'

Vue.use(Router)
export default new Router({
    routes: [{
            path: '/',
            name: 'Splash',
            component: Splash,
        },
        {
            path: '/parks',
            name: 'Parks',
            component: List,
            beforeEnter: (to, from, next) => {
              console.log('called');
                apiRequestPromise.then(() => {
                  console.log('complete')
                  next();
                })
            }
        },
        {
            path: '/park/:parkId',
            name: 'Park',
            component: ParkPage,
            props: (route) => ({
                name: route.query.title
            })
        },
        {
            path: '/tree/:title/:treeId/',
            name: 'TreePage',
            component: TreePage,
            props: (route) => ({
                backLink: route.query.back
            })
        }
    ]
})
