import Vue from 'vue';
import App from './components/App.vue';
import './normalize.css'
import './sass/style.scss'
import Router from 'vue-router'
import MainComponent from './components/MainComponent.vue';
import WeatherTomorrowComponent from './components/WeatherTomorrowComponent.vue';
import WeatherTenDaysComponent from './components/WeatherTenDaysComponent.vue';
import WeatherTwoWeeksComponent from './components/WeatherTwoWeeksComponent.vue';
import WeatherThreeDaysComponent from './components/WeatherThreeDaysComponent.vue';

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name:'MainComponent',
            component: MainComponent
        },
        {
            path: '/tomorrow',
            name:'WeatherTomorrowComponent',
            component: WeatherTomorrowComponent,
        },
        {
            path: '/threedays',
            name:'WeatherThreeDaysComponent',
            component: WeatherThreeDaysComponent,
        },
        {
            path: '/tendays',
            name:'WeatherTenDaysComponent',
            component: WeatherTenDaysComponent,
        },
        {
            path: '/twoweeks',
            name:'WeatherTwoWeeksComponent',
            component: WeatherTwoWeeksComponent,
        }
    ]
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})