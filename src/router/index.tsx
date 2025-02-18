/*
 * @Author:
 * @Date: 2025-02-13 15:49:17
 * @LastEditors: Do not edit
 * @LastEditTime: 2025-02-17 14:18:49
 * @Description:
 * @FilePath: \react-project\src\router\index.tsx
 */
import React, { lazy, Suspense } from 'react'
import type { RouteObject } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import Layout from '../Layout/index'
import { HomeOutlined, InfoCircleOutlined } from '@ant-design/icons'
interface MetaConfig {
  title: string
  requiresAuth: boolean
  icon?: React.ReactNode
}

type CustomRoute = Omit<RouteObject, 'children' | 'index'> & {
  meta?: MetaConfig
  children?: CustomRoute[]
  index?: false
}

const Home = lazy(() => import('../pages/Home/index'))
const About = lazy(() => import('../pages/About/index'))
const Products = lazy(() => import('../pages/Products/index'))
const ProductDetail = lazy(() => import('../pages/ProductDetail/index'))
const NotFound = lazy(() => import('../pages/NotFound/index'))

const withSuspense = (Component: React.LazyExoticComponent<any>) => (
  <Suspense fallback={<div className="loading-page">Loading...</div>}>
    <Component />
  </Suspense>
)

const routes: CustomRoute[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: withSuspense(Home),
        meta: {
          title: '首页',
          requiresAuth: false,
          icon: <HomeOutlined />,
        },
      },
      {
        path: '/about',
        element: withSuspense(About),
        meta: {
          title: '关于',
          requiresAuth: false,
          icon: <InfoCircleOutlined />,
        },
      },
      {
        path: '/products',
        element: withSuspense(Products),
        meta: {
          title: '产品列表',
          requiresAuth: true,
          icon: <InfoCircleOutlined />,
        },
        children: [
          {
            path: '/products/productDetail',
            element: withSuspense(ProductDetail),
            meta: {
              title: '产品详情',
              requiresAuth: true,
            },
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: withSuspense(NotFound),
    meta: {
      title: '404',
      requiresAuth: false,
    },
  },
]

const router = createBrowserRouter(routes)
console.log(router)

export default router

