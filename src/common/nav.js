import dynamic from 'dva/dynamic';

// wrapper of dynamic
const dynamicWrapper = (app, models, component) => dynamic({
  app,
  models: () => models.map(m => import(`../models/${m}.js`)),
  component
});

// nav data
export const getNavData = app => [
  {
    component: dynamicWrapper(app, ['global'], () => import('../layouts/BasicLayout')),
    layout: 'BasicLayout',
    name: 'app',
    path: '',
    children: [
      {
        name: '生活',
        key: 'life',
        default_icon: 'https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg',
        selected_icon: 'https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg',
        path: 'life',
        component: dynamicWrapper(app, [], () => import('../routes/Life/index')),
        children: [
          {
            name: '团购列表',
            key: 'list',
            path: '',
            component: dynamicWrapper(app, [], () => import('../routes/Life/list'))
          },
          {
            name: '团购详情',
            key: 'detail',
            path: 'detail/:id',
            component: dynamicWrapper(app, [], () => import('../routes/Life/detail'))

          }
        ]
      },
      {
        name: '口碑',
        key: 'koubei',
        default_icon: 'https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg',
        selected_icon: 'https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg',
        path: 'koubei',
        component: dynamicWrapper(app, [], () => import('../routes/Koubei/index'))
      },
      {
        name: '朋友',
        key: 'friend',
        default_icon: 'https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg',
        selected_icon: 'https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg',
        path: 'friend',
        component: dynamicWrapper(app, [], () => import('../routes/Friend/index'))
      },
      {
        name: '我的',
        key: 'my',
        default_icon: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg',
        selected_icon: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg',
        path: 'my',
        component: dynamicWrapper(app, [], () => import('../routes/My/index'))
      }
    ]
  }
];
