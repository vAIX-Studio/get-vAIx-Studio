<script setup lang="ts">
import { agents } from '../data/site';
</script>

<template>
  <section id="agents" class="relative overflow-hidden py-20 sm:py-28">
    <div class="animate-float-slower absolute left-[-10%] top-1/4 h-[260px] w-[260px] rounded-full bg-vaix-violet/15 blur-[110px] sm:h-[380px] sm:w-[380px] sm:blur-[130px]"></div>
    <div class="container-vaix relative">
      <div class="grid items-start gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-end">
        <div>
          <p v-reveal class="badge mb-5">Pipeline multi-agents</p>
          <h2 v-reveal="80" class="section-title">
            <span class="text-gradient-x">3 agents</span> orchestrés,<br class="hidden sm:block" /> 1 cartographe embarqué
          </h2>
          <p v-reveal="160" class="mt-5 text-base text-slate-400 sm:text-lg">
            Le <strong class="text-slate-200">Cartographe 0-tok</strong> est embarqué directement dans le moteur de
            &gt;AIx STUDIO. Les 3 rôles spécialisés sont routables indépendamment vers Ollama ou un fournisseur
            cloud : l'orchestrateur enchaîne les étapes, auto-corrige la compilation et trace chaque décision.
          </p>
          <div v-reveal="240" class="mt-8 flex flex-wrap gap-3">
            <span class="badge !normal-case !tracking-normal"><i class="ri-check-line text-emerald-400"></i> Auto-correction cargo check / vue-tsc</span>
            <span class="badge !normal-case !tracking-normal"><i class="ri-check-line text-emerald-400"></i> Trace d'exécution par étape</span>
            <span class="badge !normal-case !tracking-normal"><i class="ri-check-line text-emerald-400"></i> Routage hybride local / cloud</span>
          </div>
        </div>

        <ol class="relative space-y-3">
          <li
            v-for="(a, i) in agents"
            :key="a.name"
            v-reveal="i * 70"
            class="card group flex items-center gap-3 !p-4 sm:gap-4 sm:!p-5"
          >
            <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-vaix-blue to-vaix-violet font-mono text-sm font-bold text-white">
              {{ String(i + 1).padStart(2, '0') }}
            </span>
            <div class="min-w-0 flex-1">
              <p class="flex items-center gap-2 font-bold text-white">
                <i :class="[a.icon, 'shrink-0 text-vaix-cyan']"></i>
                <span class="truncate sm:whitespace-normal">{{ a.name }}</span>
              </p>
              <p class="mt-0.5 text-sm leading-snug text-slate-400">{{ a.mission }}</p>
            </div>
            <span class="hidden shrink-0 rounded-full bg-white/5 px-3 py-1 text-[11px] font-semibold text-slate-400 sm:block">
              {{ a.target }}
            </span>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>
