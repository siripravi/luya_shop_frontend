import { createRouter, createWebHistory } from "vue-router";
import PokemonList from "../views/PokemonList.vue";
import Pokemon from "../views/Pokemon.vue";
import PokemonDetails from "../views/PokemonDetails.vue";
import NotFound from "../views/NotFound.vue";
import valid_pokemon from "../data/valid-pokemon.json";

const routes = [
  {
    path: "/menu",
    name: "PokemonList",
    component: PokemonList,
  },
  {
    path: "/api/cart",
    name: "ShopCart",
    component: () => import('../views/ShopCart.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: "/pokemon/:name",
    name: "Pokemon",
    component: Pokemon,
    prefetch: true,
  },
  {
    path: "/pokemon/:name/:specie_id/details",
    name: "PokemonDetails",
    component: PokemonDetails,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to) => {
  if (
    to.params &&
    to.params.name &&
    valid_pokemon.indexOf(to.params.name) === -1
  ) {
    return "/404";
  }

  if (
    (to.params &&
      to.params.name &&
      to.params.specie_id &&
      valid_pokemon.indexOf(to.params.name) === -1 &&
      to.params.specie_id < 0) ||
    to.params.specie_id > 101
  ) {
    return "/404";
  }
});

export default router;