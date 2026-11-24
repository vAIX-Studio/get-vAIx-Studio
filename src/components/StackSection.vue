<script setup lang="ts">
import { stack } from '../data/site';
</script>

<template>
  <section id="stack" class="relative py-20 sm:py-28">
    <div class="container-vaix">
      <div class="mx-auto max-w-2xl text-center">
        <p v-reveal class="badge mb-5">Stack technique</p>
        <h2 v-reveal="80" class="section-title">
          Du <span class="text-gradient-ai">Rust natif</span> à l'interface
        </h2>
      </div>

      <div class="mt-12 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(s, i) in stack"
          :key="s.name"
          v-reveal="(i % 3) * 90"
          class="card flex items-center gap-4"
        >
          <i :class="[s.icon, 'shrink-0 text-3xl text-vaix-cyan sm:text-4xl']"></i>
          <div class="min-w-0">
            <p class="font-bold text-white">{{ s.name }}</p>
            <p class="text-sm text-slate-400">{{ s.detail }}</p>
          </div>
        </div>
      </div>

      <div v-reveal class="card mt-8 flex flex-col items-center gap-4 text-center sm:mt-10 md:flex-row md:justify-between md:text-left">
        <div class="min-w-0">
          <p class="font-bold text-white">Modèle local recommandé</p>
          <p class="mt-1 break-words font-mono text-xs text-slate-400 sm:text-sm">
            qwen2.5-coder:7b-instruct-q5_K_M — 16K de contexte 100 % en VRAM sur 8 Go avec Flash Attention + KV cache q8_0
          </p>
        </div>
        <a
          href="https://ollama.com/library/qwen2.5-coder"
          target="_blank"
          rel="noopener"
          class="btn-secondary w-full shrink-0 justify-center !px-6 !py-3 text-sm sm:w-auto"
        >
          <i class="ri-external-link-line"></i> Voir sur Ollama
        </a>
      </div>
    </div>
  </section>
</template>
