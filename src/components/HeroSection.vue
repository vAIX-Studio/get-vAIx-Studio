<script setup lang="ts">
import { downloads, providers } from '../data/site';
</script>

<template>
  <section id="top" class="relative flex min-h-screen items-center overflow-hidden pt-[72px]">
    <!-- Fond : grille + halos animés -->
    <div class="bg-grid absolute inset-0"></div>
    <div class="animate-float-slow absolute -top-32 left-1/4 h-[480px] w-[480px] rounded-full bg-vaix-blue/25 blur-[140px]"></div>
    <div class="animate-float-slower absolute right-[8%] top-1/3 h-[420px] w-[420px] rounded-full bg-vaix-violet/20 blur-[140px]"></div>
    <div class="absolute bottom-0 left-[12%] h-[300px] w-[300px] rounded-full bg-vaix-pink/15 blur-[120px]"></div>

    <div class="container-vaix relative z-10 grid items-center gap-14 py-24 lg:grid-cols-[1.15fr_0.85fr]">
      <div>
        <div v-reveal class="badge mb-7">
          <span class="relative flex h-2.5 w-2.5">
            <span class="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-emerald-400"></span>
            <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
          </span>
          IDE desktop de pair-programming IA — moteur natif Rust
        </div>

        <h1 v-reveal="80" class="font-display text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl xl:text-7xl">
          Codez avec une IA<br />
          <span class="text-gradient-ai">qui pense</span><br/>
          <span class="text-gradient-x">en équipe.</span>
        </h1>

        <p v-reveal="160" class="mt-7 max-w-xl text-lg leading-relaxed text-slate-400">
          <strong class="text-slate-200">&gt;AIx STUDIO</strong> embarque un moteur d'édition de code
          100&nbsp;% natif en Rust, une orchestration de 3 agents spécialisés, et un mode hybride
          Ollama local + fournisseurs cloud — le tout dans une app desktop macOS &amp; Windows.
        </p>

        <div v-reveal="240" class="mt-10 flex flex-wrap items-center gap-4">
          <a
            v-for="dl in downloads"
            :key="dl.os"
            :href="dl.href"
            target="_blank"
            rel="noopener"
            class="btn-primary"
          >
            <i :class="[dl.icon, 'text-xl']"></i>
            {{ dl.label }}
          </a>
          <a href="#fonctionnalites" class="btn-secondary">
            <i class="ri-compass-3-line text-xl"></i>
            Découvrir
          </a>
        </div>

        <!-- Marquee fournisseurs -->
        <div v-reveal="320" class="mt-14 max-w-xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
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

      <!-- Visuel : fenêtre d'app stylisée -->
      <div v-reveal="200" class="relative hidden lg:block">
        <div class="card !border-white/10 !bg-ink-900/80 shadow-2xl">
          <!-- Barre de fenêtre -->
          <div class="flex items-center gap-2 border-b border-white/[0.06] pb-4">
            <span class="h-3 w-3 rounded-full bg-vaix-red"></span>
            <span class="h-3 w-3 rounded-full bg-vaix-orange"></span>
            <span class="h-3 w-3 rounded-full bg-emerald-400"></span>
            <span class="ml-3 rounded-md bg-white/5 px-3 py-1 font-mono text-xs text-slate-400">~/mon-projet — &gt;AIx STUDIO</span>
          </div>
          <!-- Corps 3 panneaux -->
          <div class="mt-4 grid grid-cols-[0.9fr_1.4fr_1fr] gap-3">
            <div class="rounded-xl bg-white/[0.03] p-3">
              <p class="mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">Projets</p>
              <div v-for="n in ['api-gateway', 'landing-v3', 'cli-tools']" :key="n" class="mb-1.5 flex items-center gap-1.5 font-mono text-[11px] text-slate-400">
                <i class="ri-folder-2-line text-vaix-blue"></i>{{ n }}
              </div>
            </div>
            <div class="rounded-xl bg-white/[0.03] p-3">
              <p class="mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">Discussion</p>
              <div class="mb-2 rounded-lg bg-vaix-blue/10 p-2 text-[11px] leading-snug text-slate-300">
                Refactore le module <span class="font-mono text-vaix-cyan">auth.rs</span> en async.
              </div>
              <div class="rounded-lg border border-vaix-violet/30 bg-vaix-violet/10 p-2 text-[11px] leading-snug text-slate-300">
                <span class="font-bold text-vaix-cyan">Codeur</span> — 3 fichiers modifiés, diff appliqué ✓
              </div>
              <p class="mt-2 font-mono text-[11px] text-slate-500">En attente…<span class="animate-blink text-vaix-cyan">▌</span></p>
            </div>
            <div class="rounded-xl bg-white/[0.03] p-3">
              <p class="mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">HUD · Contexte</p>
              <div class="space-y-2">
                <div v-for="b in [['Architecte', '62%', 'from-vaix-cyan to-vaix-blue'], ['Codeur', '41%', 'from-vaix-pink to-vaix-orange'], ['Reviewer', '18%', 'from-emerald-400 to-teal-500']]" :key="b[0]" class="text-[10px]">
                  <div class="mb-1 flex justify-between text-slate-400"><span>{{ b[0] }}</span><span>{{ b[1] }}</span></div>
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
          src="/assets/logo-vaix.svg"
          alt=""
          class="animate-float-slow absolute -right-8 -top-10 w-28 drop-shadow-[0_0_35px_rgba(83,139,246,0.45)]"
        />
      </div>
    </div>

    <!-- Vague de séparation -->
    <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-ink-950 to-transparent"></div>
  </section>
</template>
