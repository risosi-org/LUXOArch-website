import './assets/main.css'

import App from './App.vue'
import {routes} from './router'
import { ViteSSG } from 'vite-ssg'
export const createApp = ViteSSG(App, { routes ,scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // Restore the saved scroll position when using back/forward navigation
      return savedPosition;
    } else if (to.hash) {
      // Scroll to a specific element with ID when the route has a hash
      return {
        el: to.hash,
        behavior: 'smooth', // Optional for smooth scrolling
      };
    } else {
      // Default: Scroll to the top
      return { top: 0 };
    }
  }})