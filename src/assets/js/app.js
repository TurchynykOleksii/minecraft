import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  pagination: {
    el: ".mncrft__teachers--pagination",
    clickable: true,
  },
});