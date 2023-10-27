import i18next from 'i18next';
// import DocumentationNavigation from '../main/documentation/DocumentationNavigation';

import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';
import authRoles from '../auth/authRoles';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);





let admin = [
  {
    id: 'pages.all_pages',
    title: 'All Pages',
    type: 'collapse',
    icon: 'material-outline:directions_car',
    // icon: 'heroicons-outline:exclamation-circle',
    children: [
      {
        id: 'pages.home',
        title: 'Home Page',
        type: 'item',
        url: '/pages/home_page',
      },
      {
        id: 'pages.model',
        title: 'Model Page',
        type: 'item',
        url: '/pages/model_page',
      },
      {
        id: 'pages.about_us',
        title: 'About Us',
        type: 'item',
        url: '/pages/about_us',
      },
      {
        id: 'pages.privacy_policy',
        title: 'Privacy Policy',
        type: 'item',
        url: '/pages/privacy_policy',
      },
      {
        id: 'pages.terms_conditions',
        title: 'Terms & Conditons',
        type: 'item',
        url: '/pages/terms',
      },
    ],
  },
  {
    id: 'pages.add_new_car',
    title: 'Add New Car',
    type: 'item',
    icon: 'material-outline:directions_car',
    url: '/pages/add_new_car'
    // icon: 'heroicons-outline:exclamation-circle',
  },
  {
    id: 'pages.spec',
    title: 'Add Spec & Feat',
    type: 'item',
    icon: 'material-outline:directions_car',
    url: '/pages/spec'
    // icon: 'heroicons-outline:exclamation-circle',
  },
  {
    id: 'pages.manage',
    title: 'Manage',
    type: 'collapse',
    icon: 'material-outline:directions_car',
    // icon: 'heroicons-outline:exclamation-circle',
    children: [
      {
        id: 'pages.manage_brand',
        title: 'Manage Brand',
        type: 'item',
        url: '/pages/manage_brand',
      },
      {
        id: 'pages.manage_model',
        title: 'Manage Model',
        type: 'item',
        url: '/pages/manage_model',
      },
      {
        id: 'pages.manage_varient',
        title: 'Manage Varient',
        type: 'item',
        url: '/pages/manage_varient',
      },
      {
        id: 'pages.manage_price',
        title: 'Manage Price',
        type: 'item',
        url: '/pages/manage_price',
      },
      {
        id: 'pages.manage_footer',
        title: 'Manage Footer',
        type: 'item',
        url: '/pages/manage_footer',
      }
    ],
  },
  {
    id: 'pages.masters',
    title: 'Masters',
    type: 'collapse',
    icon: 'material-outline:directions_car',
    // icon: 'heroicons-outline:exclamation-circle',
    children: [
      {
        id: 'pages.brand_master',
        title: 'Brand Master',
        type: 'item',
        url: '/pages/brand_master',
      },
      {
        id: 'pages.post_office_master',
        title: 'Post Office Master',
        type: 'item',
        url: '/pages/post_office_master',
      },
      {
        id: 'pages.dealer_master',
        title: 'Dealer Master',
        type: 'item',
        url: '/pages/dealer_master',
      },
    ],
  },

  {
    id: 'pages.user',
    title: 'Users',
    type: 'collapse',
    icon: 'heroicons-outline:user-group',
    children: [
      {
        id: 'pages.user.add',
        title: 'Add User',
        type: 'item',
        url: '/pages/user/add',
      },
      {
        id: 'pages.user.manage',
        title: 'Manage User',
        type: 'item',
        url: '/pages/user/manage',
      },
    ],
  },
  {
    id: 'pages.inquiries',
    title: 'Inquiries',
    type: 'item',
    icon: 'material-outline:event_note',
    url: '/pages/inquiries',
  },
  {
    id: 'pages.my-profile',
    title: 'My Profile',
    type: 'item',
    icon: 'heroicons-outline:user-circle',
    url: '/pages/my-profile',
  },
  {
    id: 'sign-out',
    title: 'Log Out',
    type: 'item',
    auth: authRoles.user,
    url: 'sign-out',
    icon: 'exit_to_app',
  },

]

let manager = [

  {
    id: 'pages.manage',
    title: 'Manage',
    type: 'collapse',
    icon: 'material-outline:directions_car',
    // icon: 'heroicons-outline:exclamation-circle',
    children: [
      {
        id: 'pages.manage_brand',
        title: 'Manage Brand',
        type: 'item',
        url: '/pages/manage_brand',
      },
      {
        id: 'pages.manage_model',
        title: 'Manage Model',
        type: 'item',
        url: '/pages/manage_model',
      },
      {
        id: 'pages.manage_varient',
        title: 'Manage Varient',
        type: 'item',
        url: '/pages/manage_varient',
      },
      {
        id: 'pages.manage_price',
        title: 'Manage Price',
        type: 'item',
        url: '/pages/manage_price',
      },
      {
        id: 'pages.manage_footer',
        title: 'Manage Footer',
        type: 'item',
        url: '/pages/manage_footer',
      }
    ],
  },

  {
    id: 'pages.my-profile',
    title: 'My Profile',
    type: 'item',
    icon: 'heroicons-outline:user-circle',
    url: '/pages/my-profile',
  },
  {
    id: 'sign-out',
    title: 'Log Out',
    type: 'item',
    auth: authRoles.user,
    url: 'sign-out',
    icon: 'exit_to_app',
  },

]

let adder = [

  {
    id: 'pages.add_new_car',
    title: 'Add New Car',
    type: 'item',
    icon: 'material-outline:directions_car',
    url: '/pages/add_new_car'
    // icon: 'heroicons-outline:exclamation-circle',
  },
  {
    id: 'pages.spec',
    title: 'Add Spec & Feat',
    type: 'item',
    icon: 'material-outline:directions_car',
    url: '/pages/spec'
    // icon: 'heroicons-outline:exclamation-circle',
  },
  {
    id: 'pages.my-profile',
    title: 'My Profile',
    type: 'item',
    icon: 'heroicons-outline:user-circle',
    url: '/pages/my-profile',
  },
  {
    id: 'sign-out',
    title: 'Log Out',
    type: 'item',
    auth: authRoles.user,
    url: 'sign-out',
    icon: 'exit_to_app',
  },

]

let user = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")).urole : null


const navigationConfig = [
  {
    id: 'pages',
    title: 'Pages',
    subtitle: 'Get On Road Price Pages',
    type: 'group',
    icon: 'heroicons-outline:document',
    children: admin
  },
];


if (user === "admin") {
  navigationConfig[0].children = admin
} else if (user === "manager") {
  navigationConfig[0].children = manager
} else if (user === "editor") {
  navigationConfig[0].children = adder
}



export default navigationConfig;
