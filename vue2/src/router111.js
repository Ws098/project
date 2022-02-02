import VueRouter from 'vue-router'

import productList from './page/productList/productList.vue'
import productDetail from './page/productDetail/productDetail.vue'
import yetou from './page/productList/yetou.vue'
import notFount from './page/productDetail/404.vue'



const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/123',
            redirect: '/'
        },
        {
            path: '/',
            components: {
                default: productList,
                a: productList,
                b: productList
            }
        },
        {
            path: '/detail',
            name: 'detail',
            component: productDetail,
            meta: { title: '121' }
        },
        {
            path: '/yetou',
            component: yetou
        },
        {
            path: '*',
            component: notFount
        }
    ]
})


router.beforeEach((to, from, next) => {
    // if (to.path !== '/yetou') {
    //     next({ path: 'yetou' })
    // } else { next() }
    next()
})

export default router;