<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue';

const scrolled = ref(false);
const open = ref(false);

const logoUrl = `${import.meta.env.BASE_URL}assets/logo-vaix-horizontal.svg`;

const links = [
  { href: '#fonctionnalites', label: 'Fonctionnalités' },
  { href: '#agents', label: 'Agents' },
  { href: '#stack', label: 'Stack' },
  { href: '#telecharger', label: 'Télécharger' },
];

function onScroll() {
  scrolled.value = window.scrollY > 24;
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') open.value = false;
}

function closeMenu() {
  open.value = false;
}

watch(open, (isOpen) => {
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('keydown', onKeydown);
  onScroll();
});
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
  window.removeEventListener('keydown', onKeydown);
  document.body.style.overflow = '';
});
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-500"
    :class="scrolled || open ? 'border-b border-white/[0.06] bg-ink-950/80 backdrop-blur-xl' : 'bg-transparent'"
  >
    <nav class="container-vaix flex h-[72px] items-center justify-between">
      <a href="#top" class="flex items-center gap-3" aria-label=">AIx STUDIO — retour en haut">
        <img :src="logoUrl" alt=">AIx STUDIO" class="h-7 w-auto max-w-full" />
      </a>

      <!-- Navigation desktop -->
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

      <!-- Bouton hamburger (mobile uniquement) -->
      <button
        type="button"
        class="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-xl text-white transition-colors hover:bg-white/5 md:hidden"
        :aria-expanded="open"
        aria-controls="menu-mobile"
        :aria-label="open ? 'Fermer le menu' : 'Ouvrir le menu'"
        @click="open = !open"
      >
        <i :class="open ? 'ri-close-line' : 'ri-menu-line'"></i>
      </button>
    </nav>

    <!-- Panneau mobile -->
    <div
      v-if="open"
      id="menu-mobile"
      class="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-white/[0.06] bg-ink-950/95 px-6 py-4 backdrop-blur-xl md:hidden"
    >
      <a
        v-for="link in links"
        :key="link.href"
        :href="link.href"
        class="block border-b border-white/[0.04] py-3.5 text-sm font-medium text-slate-300 transition-colors last:border-0 hover:text-white"
        @click="closeMenu"
      >
        {{ link.label }}
      </a>
      <a
        href="#telecharger"
        class="mt-3 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-vaix-cyan via-vaix-blue to-vaix-violet px-5 py-3 text-sm font-bold text-white shadow-glow"
        @click="closeMenu"
      >
        <i class="ri-download-2-line text-base"></i>
        Télécharger
      </a>
    </div>
  </header>
</template>
