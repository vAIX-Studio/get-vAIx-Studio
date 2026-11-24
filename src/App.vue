<script setup lang="ts">
import { onMounted, ref } from "vue";
import NavBar from "./components/NavBar.vue";
import HeroSection from "./components/HeroSection.vue";
import FeaturesSection from "./components/FeaturesSection.vue";
import AgentsSection from "./components/AgentsSection.vue";
import StackSection from "./components/StackSection.vue";
import DownloadSection from "./components/DownloadSection.vue";
import FooterSection from "./components/FooterSection.vue";

const visible = ref(false);
onMounted(() => {
  requestAnimationFrame(() => (visible.value = true));
});
</script>

<template>
  <div
    class="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[#070b14] text-slate-200 antialiased selection:bg-cyan-400/30 transition-opacity duration-700"
    :class="visible ? 'opacity-100' : 'opacity-0'"
  >
    <div class="pointer-events-none fixed inset-0 w-full max-w-[100vw] overflow-hidden bg-grid opacity-60"></div>
    <div class="pointer-events-none fixed -top-40 left-1/2 h-[500px] w-[900px] max-w-[140vw] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[140px]"></div>

    <NavBar />
    <main class="relative w-full max-w-full overflow-x-clip">
      <HeroSection />
      <FeaturesSection />
      <AgentsSection />
      <StackSection />
      <DownloadSection />
    </main>
    <FooterSection />
  </div>
</template>
