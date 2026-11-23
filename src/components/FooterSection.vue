<script setup lang="ts">
const year = new Date().getFullYear();
const logoUrl = `${import.meta.env.BASE_URL}assets/logo-vaix-horizontal.svg`;
</script>

<template>
  <footer class="border-t border-white/10 py-10">
    <div class="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
      <div class="flex items-center gap-3">
        <img :src="logoUrl" alt=">AIx STUDIO" class="h-7 dark:brightness-0 dark:invert" />
      </div>
      <nav class="flex items-center gap-6 text-sm text-slate-400">
        <a href="#fonctionnalites" class="hover:text-white transition-colors">Fonctionnalités</a>
        <a href="#agents" class="hover:text-white transition-colors">Agents</a>
        <a href="#stack" class="hover:text-white transition-colors">Stack</a>
        <a href="#telecharger" class="hover:text-white transition-colors">Télécharger</a>
        <a href="https://github.com/vAIx-Studio/get-vAIx-Studio" target="_blank" rel="noopener" class="hover:text-white transition-colors">GitHub</a>
      </nav>
      <p class="text-slate-500 text-sm">© {{ year }} >AIx STUDIO — Pair-programming IA natif.</p>
    </div>
  </footer>
</template>
