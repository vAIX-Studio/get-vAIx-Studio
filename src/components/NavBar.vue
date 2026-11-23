<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const scrolled = ref(false);
const open = ref(false);

const links = [
  { href: '#fonctionnalites', label: 'Fonctionnalités' },
  { href: '#agents', label: 'Agents' },
  { href: '#stack', label: 'Stack' },
  { href: '#telecharger', label: 'Télécharger' },
];

function onScroll() {
  scrolled.value = window.scrollY > 24;
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
});
onUnmounted(() => window.removeEventListener('scroll', onScroll));
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-500"
    :class="scrolled ? 'border-b border-white/[0.06] bg-ink-950/80 backdrop-blur-xl' : 'bg-transparent'"
  >
    <nav class="container-vaix flex h-[72px] items-center justify-between">
      <a href="#top" class="flex items-center gap-3">
        <img src="/assets/logo-vaix-horizontal.svg" alt=">AIx STUDIO" class="h-7 w-auto" />
      </a>

      <div class="hidden items-center gap-8 md:flex">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="text-sm font-medium text-slate-400 transition-colors hover:text-white"
        >
          {{ link.label }}
        </a>
      </div>

      <div class="hidden md:block">
        <a
          href="#telecharger"
          class="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-vaix-cyan via-vaix-blue to-vaix-violet px-5 py-2.5 text-sm font-bold text-white shadow-glow transition-all duration-300 hover:scale-105 hover:shadow-glow-lg"
        >
          <i class="ri-download-2-line text-base"></i>
          Télécharger
        </a>
      </div>

      <button
        class="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-xl text-white md:hidden"
        aria-label="Menu"
        @click="open = !open"
      >
        <i :class="open ? 'ri-close-line' : 'ri-menu-line'"></i>
      </button>
    </nav>

    <div v-if="open" class="border-t border-white/[0.06] bg-ink-950/95 px-6 py-4 backdrop-blur-xl md:hidden">
      <a
        v-for="link in links"
        :key="link.href"
        :href="link.href"
        class="block py-3 text-sm font-medium text-slate-300"
        @click="open = false"
      >
        {{ link.label }}
      </a>
    </div>
  </header>
</template>
