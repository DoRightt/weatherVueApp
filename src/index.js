import Vue from 'vue';
import App from './components/App.vue';
import './normalize.css'
import './sass/style.scss'
import axios from 'axios';

new Vue({
    el: '#app',
    render: h => h(App)
})