// 0. If using a module system (e.g. via vue-cli), import Vue and VueRouter and then call `Vue.use(VueRouter)`.

// 1. Define route components.
// These can be imported from other files
const about = Vue.component('about', require('./components/about.vue'));
const bio = Vue.component('bio', require('./components/bio.vue'));
const manufacturers = Vue.component('manufacturers', require('./components/manufacturers.vue'));
const design = Vue.component('design', require('./components/design.vue'));
const contact = Vue.component('contact', require('./components/contact.vue'));

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/about', component: about },
  { path: '/bio', component: bio },
  { path: '/manufacturers', component: manufacturers},
  { path: '/design-tools', component: design},
  { path: '/contact-us', component: contact}

]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  router,
  data: {
    
  }
}).$mount('#app')