import { createRouter, createWebHistory } from 'vue-router';
//import Home from '../components/Home.vue';
//import About from './components/About.vue';
import PokemonList from "../views/PokemonList.vue";
const routes = [
  { path: '/pokemons', component: PokemonList },
  //{ path: '/', component: Home },
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;