<script setup lang="ts">
import { features } from '../data/site';

const accentIcon: Record<string, string> = {
  ai: 'border-vaix-blue/40 bg-vaix-blue/10 text-vaix-cyan',
  x: 'border-vaix-pink/40 bg-vaix-pink/10 text-vaix-orange',
  neutral: 'border-white/15 bg-white/5 text-slate-300',
};
</script>

<template>
  <section id="fonctionnalites" class="relative py-28">
    <div class="container-vaix">
      <div class="mx-auto max-w-2xl text-center">
        <p v-reveal class="badge mb-5">Fonctionnalités</p>
        <h2 v-reveal="80" class="section-title">
          Un IDE pensé pour <span class="text-gradient-ai">l'ère agentique</span>
        </h2>
        <p v-reveal="160" class="mt-5 text-lg text-slate-400">
          Chaque brique de &gt;AIx STUDIO est conçue pour que 3 agents IA spécialisés produisent du code
          fiable, reviewable et réversible — sans quitter votre machine.
        </p>
      </div>

      <div class="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="(f, i) in features"
          :key="f.title"
          v-reveal="(i % 3) * 90"
          class="card group"
        >
          <div
            class="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border text-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
            :class="accentIcon[f.accent]"
          >
            <i :class="f.icon"></i>
          </div>
          <h3 class="font-display text-lg font-bold text-white">{{ f.title }}</h3>
          <p class="mt-2.5 text-sm leading-relaxed text-slate-400">{{ f.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
