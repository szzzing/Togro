import {createRouter, createWebHashHistory} from 'vue-router'
import LoginPage from '@/page/LoginPage'

const routes = [
    {
        path: '/',
        component: LoginPage,
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    // 라우터 선택 효과
    linkActiveClass: "route-active",
    linkExactActiveClass: "route-active",
    // 페이지 이동 시 스크롤 탑 적용
    scrollBehavior() {
        return { top: 0 }
    },
    routes
})

export default router;