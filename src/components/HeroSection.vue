<script setup lang="ts">
import { downloads, providers } from '../data/site';

const logoUrl = `${import.meta.env.BASE_URL}assets/logo-vaix.svg`;
</script>

<template>
  <section id="top" class="relative flex min-h-screen w-full max-w-full items-center overflow-hidden pt-[72px]">
    <!-- Fond : grille + halos animés -->
    <div class="bg-grid absolute inset-0"></div>
    <div class="animate-float-slow absolute -top-32 left-1/4 h-[260px] w-[260px] max-w-[70vw] rounded-full bg-vaix-blue/25 blur-[110px] sm:h-[480px] sm:w-[480px] sm:blur-[140px]"></div>
    <div class="animate-float-slower absolute right-[8%] top-1/3 h-[220px] w-[220px] max-w-[60vw] rounded-full bg-vaix-violet/20 blur-[100px] sm:h-[420px] sm:w-[420px] sm:blur-[140px]"></div>
    <div class="absolute bottom-0 left-[12%] h-[180px] w-[180px] max-w-[50vw] rounded-full bg-vaix-pink/15 blur-[90px] sm:h-[300px] sm:w-[300px] sm:blur-[120px]"></div>

    <div class="container-vaix relative z-10 grid w-full max-w-full grid-cols-1 items-center gap-12 py-16 sm:py-24 xl:grid-cols-[1.15fr_0.85fr]">
      <div class="min-w-0 w-full text-center xl:text-left">
        <div v-reveal class="badge mb-6 max-w-full sm:mb-7">
          <span class="relative flex h-2.5 w-2.5 shrink-0">
            <span class="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-emerald-400"></span>
            <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
          </span>
          <span class="min-w-0 break-words text-left normal-case tracking-normal sm:text-center sm:uppercase sm:tracking-widest">IDE desktop de pair-programming IA — moteur natif Rust</span>
        </div>

        <h1 v-reveal="80" class="break-words font-display text-3xl font-black leading-[1.12] tracking-tight text-white [hyphens:auto] sm:text-5xl sm:leading-[1.1] xl:text-[4.25rem] xl:leading-[1.08]">
          Codez avec une IA<br />
          <span class="text-gradient-ai">qui pense</span><br/>
          <span class="text-gradient-x">en équipe.</span>
        </h1>

        <p v-reveal="160" class="mx-auto mt-6 max-w-xl break-words text-base leading-relaxed text-slate-400 sm:mt-7 sm:text-lg xl:mx-0">
          <strong class="text-slate-200">&gt;AIx STUDIO</strong> embarque un moteur d'édition de code
          100&nbsp;% natif en Rust, une orchestration de 3 agents spécialisés, et un mode hybride
          Ollama local + fournisseurs cloud — le tout dans une app desktop macOS &amp; Windows.
        </p>

        <div v-reveal="240" class="mt-8 flex w-full max-w-full flex-col items-stretch justify-center gap-4 sm:mt-10 sm:w-auto sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center xl:justify-start">
          <a
            v-for="dl in downloads"
            :key="dl.os"
            :href="dl.href"
            target="_blank"
            rel="noopener"
            class="btn-primary w-full min-w-0 justify-center !px-4 !py-3.5 text-sm sm:w-auto sm:!px-8 sm:!py-4 sm:text-base"
          >
            <i :class="[dl.icon, 'shrink-0 text-xl']"></i>
            <span class="min-w-0 truncate">{{ dl.label }}</span>
          </a>
          <a href="#fonctionnalites" class="btn-secondary w-full min-w-0 justify-center !px-4 !py-3.5 text-sm sm:w-auto sm:!px-8 sm:!py-4 sm:text-base">
            <i class="ri-compass-3-line shrink-0 text-xl"></i>
            <span class="min-w-0">Découvrir</span>
          </a>
        </div>

        <!-- Marquee fournisseurs -->
        <div v-reveal="320" class="mx-auto mt-12 w-full max-w-xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] sm:mt-14 xl:mx-0">
          <div class="animate-marquee flex w-max items-center gap-3">
            <span
              v-for="(p, i) in [...providers, ...providers]"
              :key="i"
              class="whitespace-nowrap rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-1.5 text-xs font-semibold text-slate-400"
            >
              {{ p }}
            </span>
          </div>
        </div>
      </div>

      <!-- Visuel : fenêtre d'app stylisée (grand écran uniquement) -->
      <div v-reveal="200" class="relative hidden min-w-0 xl:block">
        <div class="card !border-white/10 !bg-ink-900/80 shadow-2xl">
          <!-- Barre de fenêtre -->
          <div class="flex min-w-0 items-center gap-2 border-b border-white/[0.06] pb-4">
            <span class="h-3 w-3 shrink-0 rounded-full bg-vaix-red"></span>
            <span class="h-3 w-3 shrink-0 rounded-full bg-vaix-orange"></span>
            <span class="h-3 w-3 shrink-0 rounded-full bg-emerald-400"></span>
            <span class="ml-3 min-w-0 truncate rounded-md bg-white/5 px-3 py-1 font-mono text-xs text-slate-400">~/mon-projet — &gt;AIx STUDIO</span>
          </div>
          <!-- Corps 3 panneaux -->
          <div class="mt-4 grid grid-cols-[0.9fr_1.4fr_1fr] gap-3">
            <div class="min-w-0 rounded-xl bg-white/[0.03] p-3">
              <p class="mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">Projets</p>
              <div v-for="n in ['api-gateway', 'landing-v3', 'cli-tools']" :key="n" class="mb-1.5 flex min-w-0 items-center gap-1.5 font-mono text-[11px] text-slate-400">
                <i class="ri-folder-2-line shrink-0 text-vaix-blue"></i><span class="truncate">{{ n }}</span>
              </div>
            </div>
            <div class="min-w-0 rounded-xl bg-white/[0.03] p-3">
              <p class="mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">Discussion</p>
              <div class="mb-2 break-words rounded-lg bg-vaix-blue/10 p-2 text-[11px] leading-snug text-slate-300">
                Refactore le module <span class="font-mono text-vaix-cyan">auth.rs</span> en async.
              </div>
              <div class="break-words rounded-lg border border-vaix-violet/30 bg-vaix-violet/10 p-2 text-[11px] leading-snug text-slate-300">
                <span class="font-bold text-vaix-cyan">Codeur</span> — 3 fichiers modifiés, diff appliqué ✓
              </div>
              <p class="mt-2 font-mono text-[11px] text-slate-500">En attente…<span class="animate-blink text-vaix-cyan">▌</span></p>
            </div>
            <div class="min-w-0 rounded-xl bg-white/[0.03] p-3">
              <p class="mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">HUD · Contexte</p>
              <div class="space-y-2">
                <div v-for="b in [['Architecte', '62%', 'from-vaix-cyan to-vaix-blue'], ['Codeur', '41%', 'from-vaix-pink to-vaix-orange'], ['Reviewer', '18%', 'from-emerald-400 to-teal-500']]" :key="b[0]" class="text-[10px]">
                  <div class="mb-1 flex justify-between gap-1 text-slate-400"><span class="truncate">{{ b[0] }}</span><span class="shrink-0">{{ b[1] }}</span></div>
                  <div class="h-1.5 overflow-hidden rounded-full bg-white/5">
                    <div class="hud-bar h-full rounded-full bg-gradient-to-r" :class="b[2]" :style="{ width: b[1] }"></div>
                  </div>
                </div>
              </div>
              <p class="mt-3 font-mono text-[10px] text-emerald-400">● GPU 100% · 16K ctx · 0 erreur</p>
            </div>
          </div>
        </div>
        <!-- Logo flottant -->
        <img
          :src="logoUrl"
          alt=""
          class="animate-float-slow absolute -top-10 right-0 w-24 max-w-full drop-shadow-[0_0_35px_rgba(83,139,246,0.45)] 2xl:-right-8 2xl:w-28"
        />
      </div>
    </div>

    <!-- Vague de séparation -->
    <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-ink-950 to-transparent"></div>
  </section>
</template>
