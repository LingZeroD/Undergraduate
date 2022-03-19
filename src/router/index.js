import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from "../views/Main/Main";
import Select from "../views/Select";
import Main_student from "../views/Main/Main_student";



Vue.use(VueRouter)

const routes = [
    {
        path: '/', name: '_home' ,component: Select,
        meta: {title: '身份选择'},
    },
    {
        path: '/teacher', name: '_home' , redirect:'/teacher/home',component: Main,
        meta: {arrow: true, menu: false, icon: 'folder', title: '首页'},
        children: [
            {
                path: 'home', name: 'home', meta: {title: '首页'},
                component: () => import( '../views/manage/Manger_message'),
            },
            {
                path: 'money', name: 'money', meta: {title: '助学金管理'},
                component: () => import( '../views/manage/Money_manage'),
            },
            {
                path: 'student_message', name: 'student_m', meta: {title: '学生信息管理'},
                component: () => import( '../views/manage/Student_messgae'),
            },
            {
                path: 'student_score', name: 'student', meta: {title: '学生成绩管理'},
                component: () => import( '../views/manage/Student_grades'),
            },
            {
                path: 'party', name: 'party', meta: {title: '入党审批'},
                component: () => import( '../views/manage/Party_manage'),
            },
            {
                path: 'cadre', name: 'cadre', meta: {title: '班干管理'},
                component: () => import( '../views/manage/Students_cadre'),
            },
        ]
    },
    {
        path: '/student', name: '_home' ,component: Main_student,
        meta: {title: '首页'},
        children: [
            {
                path: 'money', name: 'money', meta: {title: '奖学金申请'},
                component: () => import( '../views/student/Money_apply'),
            },
            {
                path: 'party', name: 'party', meta: {title: '奖学金申请'},
                component: () => import( '../views/student/Party_apply'),
            },
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
router.beforeEach((to, from, next) => {

    if(to.meta.title)
        window.document.title = to.meta.title
    else
        window.document.title = to.matched[0].meta.title
    next()
})
export default router
