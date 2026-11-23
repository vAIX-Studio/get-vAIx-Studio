import { createApp } from 'vue';
import App from './App.vue';
import './style.css';

/** Directive d'apparition au scroll via IntersectionObserver. */
const revealDirective = {
  mounted(el: HTMLElement, binding: { value?: number }) {
    el.classList.add('reveal');
    if (binding.value !== undefined) {
      el.style.setProperty('--reveal-delay', `${binding.value}ms`);
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add('is-visible');
            observer.unobserve(el);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );
    observer.observe(el);
  },
};

createApp(App).directive('reveal', revealDirective).mount('#app');
