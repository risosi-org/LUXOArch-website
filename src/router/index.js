//import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ServicesView from '@/views/ServicesView.vue'
import ContactView from '@/views/ContactView.vue'
import SinglePageView from '@/views/SinglePageView.vue'
import AllProjects from '@/views/AllProjects.vue'
import Dashboard from '@/views/Dashboard.vue'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import ProjectsTable from '@/views/Dashboard/ProjectsTable.vue'
import ProjectsForm from '@/views/Dashboard/ProjectsForm.vue'
import ResetPass from '@/views/Dashboard/ResetPass.vue'
import ResetPassRes from '@/views/Dashboard/ResetPassRes.vue'
import SingleProject from '@/views/SingleProject.vue'
const mainRoutes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView
  },
  {
    path:"project/:id",
    name:"id",
    component:SingleProject
  },
  {
    path: '/allprojects',
    name: 'all projects',
    component: AllProjects
  },
  {
    path: '/services',
    name: 'services',
    component: ServicesView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/minecraft',
    name: 'funnnnnnnnn',
    component: SinglePageView
  }
]

export const routes = [
  {
    path:"/",
    name:"base",
    component: DefaultLayout,
    children:mainRoutes
  },
  {
    path: '/dashboard',
    name: 'dashboard layout',
    component: DashboardLayout,
    children:[
      {
        path:"",
        name:"das",
        component:Dashboard
      },
      {
        path:"projects",
        name:"table",
        component:ProjectsTable
      },
      {
        path:"projects/edit",
        name:"edit",
        component:ProjectsForm
      },
      {
        path:"settings",
        name:'reset',
        component:ResetPass
      },
      {
        path:"reset_password",
        name:'reset ok',
        component:ResetPassRes
      }
    ]
  },
  {
    path:"/forget_password",
    name:"forg",
    component:ResetPass
  }
]