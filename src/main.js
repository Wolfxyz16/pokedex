import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
/*
import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

const app = createApp(App)
app.use(router);

app.mount('#app')
import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

const app = createApp(App)
app.use(router);

app.mount('#app')
*/
/*

import { createApp } from 'vue/dist/vue.esm-bundler';
import App from './App.vue'
import Home from './components/PokemonCard.vue'

const app = createApp({})
app.component('Home', Home)
app.component('App', App);

app.mount('#app')

*/

import { createApp } from 'vue/dist/vue.esm-bundler';
import Cartas from './components/Cartas.vue'
import App from './App.vue'

const app = createApp({})

app.component('App', App)
app.component('Cartas', Cartas)

app.mount('#app')
