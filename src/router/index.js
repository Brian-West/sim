import Vue from 'vue'
import Router from 'vue-router'
import Cover from '@/components/Cover'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Cover',
      component: Cover
    },
    {
      path: '/student/login',
      component: resolve => require(['../components/StudentLogin.vue'], resolve)
    },
    {
      path: '/student/profile',
      component: resolve => require(['../components/StudentProfile.vue'], resolve)
    },
    {
      path: '/student/edit',
      component: resolve => require(['../components/StudentEdit.vue'], resolve)
    },
    {
      path: '/student/push',
      component: resolve => require(['../components/StudentPush.vue'], resolve)
    },
    {
      path: '/teacher/login',
      component: resolve => require(['../components/TeacherLogin.vue'], resolve)
    },
    {
      path: '/teacher/profile',
      component: resolve => require(['../components/TeacherProfile.vue'], resolve)
    },
    {
      path: '/teacher/class',
      component: resolve => require(['../components/TeacherClass.vue'], resolve)
    },
    {
      path: '/teacher/score',
      component: resolve => require(['../components/TeacherScore.vue'], resolve)
    },
    {
      path: '/teacher/address',
      component: resolve => require(['../components/TeacherAddress.vue'], resolve)
    },
    {
      path: '/teacher/organization',
      component: resolve => require(['../components/TeacherOrganization.vue'], resolve)
    },
    {
      path: '/teacher/student',
      component: resolve => require(['../components/TeacherStudent.vue'], resolve)
    },
    {
      path: '/teacher/report',
      component: resolve => require(['../components/TeacherReport.vue'], resolve)
    },
    {
      path: '/master/login',
      component: resolve => require(['../components/MasterLogin.vue'], resolve)
    },
    {
      path: '/master/profile',
      component: resolve => require(['../components/MasterProfile.vue'], resolve)
    },
    {
      path: '/master/requests',
      component: resolve => require(['../components/MasterRequests.vue'], resolve)
    },
    {
      path: '/master/refuse',
      component: resolve => require(['../components/MasterRefuse.vue'], resolve)
    },
    {
      path: '/master/class',
      component: resolve => require(['../components/MasterClass.vue'], resolve)
    },
    {
      path: '/master/student',
      component: resolve => require(['../components/MasterStudent.vue'], resolve)
    },
    {
      path: '/master/modify',
      component: resolve => require(['../components/MasterModify.vue'], resolve)
    },
    {
      path: '/master/organization',
      component: resolve => require(['../components/MasterOrganization.vue'], resolve)
    },
    {
      path: '/master/archive',
      component: resolve => require(['../components/MasterArchive.vue'], resolve)
    },
    {
      path: '/master/address',
      component: resolve => require(['../components/MasterAddress.vue'], resolve)
    },
    {
      path: '/master/push',
      component: resolve => require(['../components/MasterPush.vue'], resolve)
    },
    {
      path: '/admin/login',
      component: resolve => require(['../components/AdminLogin.vue'], resolve)
    },
    {
      path: '/admin/profile',
      component: resolve => require(['../components/AdminProfile.vue'], resolve)
    },
    {
      path: '/admin/request',
      component: resolve => require(['../components/ArchiveRequests.vue'], resolve)
    },
    {
      path: '/admin/refuse',
      component: resolve => require(['../components/AdminRefuse.vue'], resolve)
    },
    {
      path: '/admin/upload/student',
      component: resolve => require(['../components/AdminUploadStudent.vue'], resolve)
    },
    {
      path: '/admin/upload/user',
      component: resolve => require(['../components/AdminUploadUser.vue'], resolve)
    }
  ]
})
