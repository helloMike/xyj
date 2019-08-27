import Vue from 'vue'
import Router from 'vue-router'
import wyjd from '@/pages/wyjd'
import agentCenter from '@/pages/agent-center'
import zzbm from '@/pages/zzbm'
import addCertificate from '@/pages/add-certificate'
import faceVerification from '@/pages/face-verification'
import nannyInfo from '@/pages/nanny-info'
import housekeepingAgent from '@/pages/housekeeping-agent'
import myNanny from '@/pages/my-nanny'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
      // 我要接单
    {
      path: '/wyjd',
      name: 'wyjd',
      component: wyjd
    },
    //  经纪人个人中心
    {
      path: '/agent-center',
      name: 'agentCenter',
      component: agentCenter
    },
    //  自助报名
    {
      path: '/zzbm',
      name: 'zzbm',
      component: zzbm
    },
    //  添加身份证
    {
      path: '/addCertificate',
      name: 'addCertificate',
      component: addCertificate
    },
    //  人脸验证
    {
      path: '/faceVerification',
      name: 'faceVerification',
      component: faceVerification
    },
    //  保姆信息
    {
      path: '/nannyInfo',
      name: 'nannyInfo',
      component: nannyInfo
    },
    //  家政经纪人
    {
      path: '/housekeepingAgent',
      name: 'housekeepingAgent',
      component: housekeepingAgent
    },
    //  家政经纪人
    {
      path: '/myNanny',
      name: 'myNanny',
      component: myNanny
    }
  ]
})
