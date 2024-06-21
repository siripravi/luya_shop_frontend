export { renderers } from '../renderers.mjs';

const page = () => import('../chunks/prerender_BBTMv_bo.mjs').then(n => n.k);

export { page };
