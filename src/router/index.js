import Vue from 'vue'
import VueRouter from 'vue-router'
import LogIn from '../components/login'
import Second from '../components/Second.vue'
import Home from '../components/Home.vue'
import ControlVisibilityAndDeficiencyDashboard from '../components/ControlVisibilityAndDeficiencyDashboard.vue'
import RiskAndLossExposureScore from '../components/RiskAndLossExposureScore.vue'
import RiskProfileAndMaturityScoreDashboard from '../components/RiskProfileAndMaturityScoreDashboard.vue'
import ThreatIndicatorAndExposureDashBoard from '../components/ThreatIndicatorAndExposureDashBoard.vue'
import EditThreatIndicators from '../components/EditThreatIndicators.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/editThreatIndicators',
    name: 'EditThreatIndicators',
    component: EditThreatIndicators
  },
  {
    path: '/threatIndicatorAndExposureDashBoard',
    name: 'ThreatIndicatorAndExposureDashBoard',
    component: ThreatIndicatorAndExposureDashBoard
  },
  {
    path: '/controlVisibilityAndDeficiencyDashboard',
    name: 'ControlVisibilityAndDeficiencyDashboard',
    component: ControlVisibilityAndDeficiencyDashboard
  },
  {
    path: '/riskProfileAndMaturityScoreDashboard',
    name: 'RiskProfileAndMaturityScoreDashboard',
    component: RiskProfileAndMaturityScoreDashboard
  },
  
  {
    path: '/riskAndLossExposureScore',
    name: 'RiskAndLossExposureScore',
    component: RiskAndLossExposureScore
  },
  {
    path: '/',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/second',
    name: 'Second',
    component: Second
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
