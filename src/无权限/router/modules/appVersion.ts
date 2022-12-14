import { RouteRecordRaw } from 'vue-router';
import { Layout } from '@/router/constant';
import { TableOutlined } from '@vicons/antd';
import { renderIcon } from '@/utils/index';

/**
 * @param name 路由名称, 必须设置,且不能重名
 * @param meta 路由元信息（路由附带扩展信息）
 * @param redirect 重定向地址, 访问这个路由时,自定进行重定向
 * @param meta.disabled 禁用整个菜单
 * @param meta.title 菜单名称
 * @param meta.icon 菜单图标
 * @param meta.sort 排序越小越排前
 *
 * */
const routes: Array<RouteRecordRaw> = [
  {
    path: '/appVersion',
    name: 'appVersion',
    component: Layout,
    meta: {
      title: 'app版本管理',
      icon: renderIcon(TableOutlined),
      sort: -3,
    //   hidden:true
    },
    children: [
      {
        path: 'index',
        name: 'appVersion_index',
        meta: {
          title: 'Android版本管理',
        },
        component: () => import('@/views/appVersion/index.vue'),
      },
    //   {
    //     path: 'ios',
    //     name: 'appVersion_ios',
    //     meta: {
    //       title: 'ios版本管理',
    //     },
    //     component: () => import('@/views/appVersion/ios.vue'),
    //   }
    ],
  },
];

export default routes;
