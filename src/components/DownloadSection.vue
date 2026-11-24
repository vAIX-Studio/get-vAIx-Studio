<script setup lang="ts">
import { downloads } from "../data/site";
</script>

<template>
  <section id="telecharger" class="relative overflow-hidden py-20 sm:py-28 lg:py-32">
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/30 to-transparent"></div>
    <div class="relative mx-auto max-w-5xl px-4 text-center sm:px-6">
      <p v-reveal class="badge mb-5">Téléchargement</p>
      <h2 v-reveal="80" class="section-title !text-3xl sm:!text-5xl">
        Prêt à coder avec votre <span class="text-gradient-ai">équipage IA</span> ?
      </h2>
      <p v-reveal="160" class="mx-auto mt-5 max-w-2xl text-base text-slate-400 sm:text-lg">
        Binaires natifs pour macOS Universal et Windows x64, publiés automatiquement à chaque release.
      </p>

      <div v-reveal="240" class="mx-auto mt-10 grid max-w-3xl gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6">
        <a
          v-for="d in downloads"
          :key="d.os"
          :href="d.href"
          target="_blank"
          rel="noopener"
          class="group relative flex w-full items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-left transition-all duration-300 hover:border-vaix-cyan/40 hover:bg-white/[0.08] sm:gap-5 sm:p-6"
        >
          <span class="shrink-0 text-3xl text-vaix-cyan sm:text-4xl"><i :class="d.icon"></i></span>
          <span class="min-w-0 flex-1">
            <span class="block truncate text-base font-bold text-white sm:text-lg">{{ d.os }}</span>
            <span class="block text-xs text-slate-400 sm:text-sm">{{ d.detail }}</span>
          </span>
          <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-slate-300 transition-all duration-300 group-hover:border-vaix-cyan group-hover:bg-vaix-cyan group-hover:text-ink-950 sm:h-10 sm:w-10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-5 w-5"><path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>
        </a>
      </div>

      <p v-reveal="320" class="mt-8 px-2 text-xs leading-relaxed text-slate-500 sm:text-sm">
        Besoin d'Ollama en local ?
        <a href="https://ollama.com/download" target="_blank" rel="noopener" class="text-vaix-cyan hover:underline">ollama.com/download</a>
        · Modèle recommandé :
        <code class="mt-1 inline-block rounded bg-white/5 px-2 py-1 font-mono text-[11px] text-emerald-300 sm:mt-0 sm:text-xs">qwen2.5-coder:7b-instruct-q5_K_M</code>
      </p>
    </div>
  </section>
</template>
