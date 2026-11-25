export interface Feature {
  icon: string;
  title: string;
  description: string;
  accent: 'ai' | 'x' | 'neutral';
}

export interface AgentRole {
  icon: string;
  name: string;
  mission: string;
  target: string;
}

export interface StackItem {
  icon: string;
  name: string;
  detail: string;
}

export const features: Feature[] = [
  {
    icon: 'ri-cpu-line',
    title: 'Moteur natif Rust 100 % autonome',
    description:
      "Zéro dépendance Python ou Aider CLI : streaming SSE/NDJSON unifié sur 7 fournisseurs, raisonnement natif des 4 familles de modèles (o1, DeepSeek reasoning_content, Claude thinking, Gemini thought), prompt caching, retry exponentiel et support multimodal (images).",
    accent: 'ai',
  },
  {
    icon: 'ri-edit-2-line',
    title: 'Édition chirurgicale fuzzy',
    description:
      "Applicateur SEARCH/REPLACE tolérant à 4 niveaux (exact, espaces, réindentation, similarité Levenshtein), stratégie adaptative whole/diff et boucle multi-tours d'auto-réparation.",
    accent: 'x',
  },
  {
    icon: 'ri-team-line',
    title: 'Orchestration multi-agents',
    description:
      "3 rôles spécialisés — architecte/orchestrateur, designer UX/UI · codeur · refactoring et reviewer — routables indépendamment vers Ollama ou le cloud, avec le cartographe 0-tok embarqué dans le moteur, auto-correction de compilation (cargo check / vue-tsc) et trace d'exécution détaillée.",
    accent: 'ai',
  },
  {
    icon: 'ri-map-2-line',
    title: 'Repo-Map & outils natifs',
    description:
      "Indexation multi-langages budgétée en tokens, respect natif de .gitignore / .aiderignore, et outils agentiques intégrés : read_file, search_code, write_file, run_command…",
    accent: 'neutral',
  },
  {
    icon: 'ri-global-line',
    title: 'Agents web natifs',
    description:
      "En plein pipeline, les agents peuvent chercher sur le web (web_search, parsing DuckDuckGo/Bing) et lire des pages entières (fetch_url, HTML nettoyé en markdown) pour fonder leurs décisions sur des sources à jour.",
    accent: 'ai',
  },
  {
    icon: 'ri-cloud-line',
    title: 'Hybride local & cloud',
    description:
      "Ollama en local avec diagnostic temps réel et démarrage automatique, plus Gemini, OpenAI, Anthropic, DeepSeek, OpenRouter, Groq, Cerebras et Mistral avec découverte auto des modèles.",
    accent: 'x',
  },
  {
    icon: 'ri-layout-3-line',
    title: 'Espace de travail 3 panneaux',
    description:
      "Menu multi-projets avec conversations auto-titrées, discussion temps réel avec mentions @file / @tool / @mcp et pièces jointes, tiroir de code redimensionnable en split 50/50.",
    accent: 'neutral',
  },
  {
    icon: 'ri-git-branch-line',
    title: 'Git diff, undo granulaire & artefacts',
    description:
      "Revue des fichiers modifiés ligne par ligne, annulation ciblée par fichier, restauration globale ou par checkpoint, et prévisualisation intégrée du code, HTML et SVG générés.",
    accent: 'ai',
  },
  {
    icon: 'ri-dashboard-3-line',
    title: 'HUD temps réel & audit',
    description:
      "Télémétrie matérielle native (CPU, GPU, RAM, température), barre de contexte stackée par sous-agent avec compactage /compact, suivi journalier des quotas de tokens API et export complet de la trace de conversation (audit).",
    accent: 'x',
  },
  {
    icon: 'ri-database-2-line',
    title: 'MCP & mémoire projet',
    description:
      "Serveurs MCP stdio (SQLite, PostgreSQL ou personnalisés) invoqués en boucle agentique, contexte global permanent du projet et mémoire dédiée par conversation.",
    accent: 'neutral',
  },
  {
    icon: 'ri-git-pull-request-line',
    title: "Git & PR pilotés par l'IA",
    description:
      "Gestion de branches complète (création, checkout, fetch/push, branches protégées), commit + PR en un clic avec validation projet auto-détectée et rejouable, titre et bump semver proposés, connexion GitHub en un clic (OAuth Device Flow) et gestion des issues — sans quitter l'IDE.",
    accent: 'x',
  },
];

export const agents: AgentRole[] = [
  {
    icon: 'ri-radar-line',
    name: 'Cartographe 0-tok',
    mission: 'Construit la repo-map légère sans brûler de tokens — embarqué dans le moteur de >AIx STUDIO.',
    target: 'Moteur natif',
  },
  {
    icon: 'ri-compasses-2-line',
    name: 'Architecte & Orchestrateur',
    mission: "Conçoit l'architecture et pilote le pipeline complet jusqu'à la synthèse.",
    target: 'Cloud ou local',
  },
  {
    icon: 'ri-palette-line',
    name: 'Designer UX/UI · Codeur · Refactoring',
    mission: "Définit l'expérience utilisateur, écrit le code, le restructure et le nettoie.",
    target: 'Cloud ou local',
  },
  {
    icon: 'ri-flask-line',
    name: 'Reviewer',
    mission: 'Valide la qualité du code et la bonne exécution des tests automatiques.',
    target: 'Local',
  },
];

export const stack: StackItem[] = [
  { icon: 'ri-vuejs-line', name: 'Vue 3.5', detail: 'Interface réactive en TypeScript strict' },
  { icon: 'ri-brush-line', name: 'Tailwind CSS', detail: 'Design system utilitaire sur mesure' },
  { icon: 'ri-smartphone-line', name: 'Tauri v2', detail: 'Binaire desktop natif ultra-léger' },
  { icon: 'ri-rust-line', name: 'Rust 2021', detail: 'Moteur IA, patcher et repo-map natifs' },
  { icon: 'ri-brain-line', name: 'Ollama', detail: 'LLM locaux 8K–16K optimisés GPU' },
  { icon: 'ri-cloud-line', name: '7 fournisseurs cloud', detail: 'Gemini, OpenAI, Anthropic, DeepSeek…' },
];

export const providers: string[] = [
  'Gemini', 'OpenAI', 'Anthropic', 'DeepSeek', 'OpenRouter', 'Groq', 'Cerebras', 'Mistral', 'Ollama local',
];

export const downloads = [
  {
    os: 'macOS',
    detail: 'Universal (Apple Silicon & Intel) — .dmg',
    icon: 'ri-apple-fill',
    href: 'https://github.com/vAIx-Studio/get-vAIx-Studio/releases',
    label: 'Télécharger pour macOS',
  },
  {
    os: 'Windows',
    detail: 'x64 — .msi / .exe',
    icon: 'ri-windows-fill',
    href: 'https://github.com/vAIx-Studio/get-vAIx-Studio/releases',
    label: 'Télécharger pour Windows',
  },
];
