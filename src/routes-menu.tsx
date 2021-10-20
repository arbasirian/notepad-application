import React from 'react';

import {
  DashboardOutlined,
  SettingOutlined,
  BookOutlined,
  UserOutlined,
  BarChartOutlined,
  CreditCardOutlined,
  AppstoreOutlined,
} from '@ant-design/icons';

const Menu = [
  {
    title: 'Dashboard',
    slug: 'dashboard',
    path: '/',
    isParent: false,
    children: [],
    icon: <DashboardOutlined />,
  },
  {
    title: 'System',
    slug: 'system',
    isParent: true,
    icon: <SettingOutlined />,
    sections: ['Permissions'],
    children: [
      {
        sectionTitle: 'Permissions',
        title: 'Admins',
        slug: 'admins',
        path: '/admins',
        permission: 'manage_admins',
      },
      {
        sectionTitle: 'Permissions',
        title: 'Roles',
        slug: 'roles',
        path: '/roles',
        permission: 'manage_roles',
      },
    ],
  },
  {
    title: 'Catalog',
    slug: 'catalog',
    isParent: true,
    icon: <BookOutlined />,
    sections: [],
    children: [
      {
        title: 'Attributes',
        slug: 'attributes',
        path: '/attributes',
        permission: 'manage_attributes',
      },
      {
        title: 'Attributes Sets',
        slug: 'attribute-sets',
        path: '/attribute-sets',
        permission: 'manage_attribute_sets',
      },
      {
        title: 'Suppliers',
        slug: 'suppliers',
        path: '/suppliers',
        permission: 'manage_suppliers',
      },
      {
        title: 'Brands',
        slug: 'brands',
        path: '/brands',
        permission: 'manage_brands',
      },
      {
        title: 'Categories',
        slug: 'categories',
        path: '/categories',
        permission: 'manage_categories',
      },
      {
        title: 'Inventory',
        slug: 'inventory',
        path: '/inventory',
        permission: 'manage_products',
      },
      {
        title: 'Products',
        slug: 'products',
        path: '/products',
        permission: 'manage_products',
      },
      {
        title: 'Offers',
        slug: 'offers',
        path: '/offers',
        permission: 'manage_offers',
      },
    ],
  },
  {
    title: 'Customers',
    slug: 'customers',
    path: '/customers',
    isParent: false,
    icon: <UserOutlined />,
    permission: 'manage_customers',
    sections: [],
    children: [],
  },
  {
    title: 'Sales',
    slug: 'sales',
    isParent: true,
    icon: <CreditCardOutlined />,
    sections: [],
    children: [
      {
        title: 'Promotions',
        slug: 'promotions',
        path: '/promotions',
        permission: 'manage_promotions',
      },
      {
        title: 'Orders',
        slug: 'orders',
        path: '/orders',
        permission: 'manage_orders',
      },

      {
        title: 'Invoices',
        slug: 'invoices',
        path: '/invoices',
        permission: 'manage_invoices',
      },
      {
        title: 'Shipments',
        slug: 'shipments',
        path: '/shipments',
        permission: 'manage_shipments',
      },
      {
        title: 'Gift Cards',
        slug: 'gift-cards',
        path: '/gift-cards',
        permission: 'manage_gift_cards',
      },
    ],
  },
  {
    title: 'Reports',
    slug: 'reports',
    isParent: true,
    icon: <BarChartOutlined />,
    sections: ['Sales', 'Inventory'],
    children: [
      {
        title: 'Attribute Set',
        slug: 'attribute-set-reports',
        path: '/attribute-set-reports',
        permission: 'manage_attribute_sets',
        sectionTitle: 'Sales',
      },
      {
        title: 'Products',
        slug: 'products-reports',
        path: '/products-reports',
        permission: 'manage_products',
        sectionTitle: 'Sales',
      },
      {
        title: 'Sellers',
        slug: 'sellers-reports',
        path: '/sellers-reports',
        permission: 'manage_admins',
        sectionTitle: 'Sales',
      },
      {
        title: 'Category',
        slug: 'category-reports',
        path: '/category-reports',
        permission: 'manage_categories',
        sectionTitle: 'Sales',
      },
      {
        title: 'Inventory',
        slug: 'inventory-reports',
        path: '/inventory-reports',
        permission: 'manage_products',
        sectionTitle: 'Inventory',
      },
    ],
  },
  {
    title: 'CMS',
    slug: 'cms',
    isParent: true,
    icon: <AppstoreOutlined />,
    sections: [],
    children: [
      {
        title: 'Sliders',
        slug: 'sliders',
        path: '/sliders',
        permission: 'manage_cms',
      },
      {
        title: 'Banners',
        slug: 'banners',
        path: '/banners',
        permission: 'manage_cms',
      },
    ],
  },
];

export default Menu;
