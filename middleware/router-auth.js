const routerPrefix = process.env.DEPLOY_ENV === 'GH_PAGES' 
                 ? '/nuxtpwa' 
                 : ''

export default function ({ store, redirect, route }) {
  store.state.user != null && route.name == 'login' ? redirect(routerPrefix+'/dashboard') : ''
  store.state.user == null && isAdminRoute(route) ? redirect(routerPrefix+'/login') : ''
}

function isAdminRoute(route) {
  if (route.matched.some(record => record.path == routerPrefix+'/dashboard')) {
    return true
  }
}