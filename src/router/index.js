//import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ServicesView from '@/views/ServicesView.vue'
import ContactView from '@/views/ContactView.vue'
import SinglePageView from '@/views/SinglePageView.vue'
import AllProjects from '@/views/AllProjects.vue'
import Dashboard from '@/views/Dashboard.vue'
export const routes = [
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
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  }
]

