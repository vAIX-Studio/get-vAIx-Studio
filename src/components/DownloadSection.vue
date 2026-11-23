<script setup lang="ts">
import { downloads } from "../data/site";
</script>

<template>
  <section id="telecharger" class="relative py-24 sm:py-32 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/30 to-transparent"></div>
    <div class="relative max-w-5xl mx-auto px-6 text-center">
      <p class="text-vaix-cyan font-semibold tracking-[0.3em] uppercase text-xs mb-4">Téléchargement</p>
      <h2 class="font-display text-3xl sm:text-5xl font-extrabold text-white mb-4">
        Prêt à coder avec votre <span class="text-gradient-ai">équipage IA</span> ?
      </h2>
      <p class="text-slate-400 max-w-2xl mx-auto mb-12">
        Binaires natifs pour macOS Universal et Windows x64, publiés automatiquement à chaque release.
      </p>

      <div class="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <a
          v-for="d in downloads"
          :key="d.os"
          :href="d.href"
          target="_blank"
          rel="noopener"
          class="group relative flex items-center gap-5 p-6 rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-vaix-cyan/40 transition-all duration-300 text-left"
        >
          <span class="text-4xl text-vaix-cyan"><i :class="d.icon"></i></span>
          <span class="flex-1">
            <span class="block text-white font-bold text-lg">{{ d.os }}</span>
            <span class="block text-slate-400 text-sm">{{ d.detail }}</span>
          </span>
          <span class="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-slate-300 group-hover:bg-vaix-cyan group-hover:text-ink-950 group-hover:border-vaix-cyan transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5"><path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>
        </a>
      </div>

      <p class="mt-8 text-slate-500 text-sm">
        Besoin d'Ollama en local ? <a href="https://ollama.com/download" target="_blank" rel="noopener" class="text-vaix-cyan hover:underline">ollama.com/download</a>
        · Modèle recommandé : <code class="px-2 py-1 rounded bg-white/5 text-emerald-300 text-xs font-mono">qwen2.5-coder:7b-instruct-q5_K_M</code>
      </p>
    </div>
  </section>
</template>
