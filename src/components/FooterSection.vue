<script setup lang="ts">
const year = new Date().getFullYear();
const logoUrl = `${import.meta.env.BASE_URL}assets/logo-vaix-horizontal.svg`;

const links = [
  { href: '#fonctionnalites', label: 'Fonctionnalités' },
  { href: '#agents', label: 'Agents' },
  { href: '#stack', label: 'Stack' },
  { href: '#telecharger', label: 'Télécharger' },
  { href: 'https://github.com/vAIx-Studio/get-vAIx-Studio', label: 'GitHub', external: true },
];
</script>

<template>
  <footer class="border-t border-white/10 py-10">
    <div class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center sm:px-6 sm:flex-row sm:text-left lg:px-10">
      <div class="flex items-center gap-3">
        <img :src="logoUrl" alt=">AIx STUDIO" class="h-7 w-auto max-w-full" />
      </div>
      <nav class="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-slate-400 sm:gap-6">
        <a
          v-for="link in links"
          :key="link.label"
          :href="link.href"
          v-bind="link.external ? { target: '_blank', rel: 'noopener' } : {}"
          class="transition-colors hover:text-white"
        >
          {{ link.label }}
        </a>
      </nav>
      <p class="text-xs text-slate-500 sm:text-sm">© {{ year }} >AIx STUDIO — Pair-programming IA natif.</p>
    </div>
  </footer>
</template>
