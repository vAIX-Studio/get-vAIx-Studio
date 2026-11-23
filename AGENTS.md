# AGENTS.md — Directives & Architecture pour vAIx Studio - Site

Ce fichier définit les directives fondamentales, l'architecture globale et les standards de développement pour tout agent IA travaillant sur le projet **vAIx Studio - Site**.

## 1. Spécifications & Objectif Initial
Site vitrine Vue3 + tailwindCSS + iconify + remix icon de >AIx Studio

## 2. Commandes de Build & Vérification
S'appuyer sur les manifestes et configurations déclarés à la racine du projet pour exécuter les commandes de compilation, d'analyse statique et de test adaptées.

## 3. Règles Fondamentales pour les Agents
1. **Zéro Régression de Types** : Respecter le typage strict requis par le projet.
2. **Gestion d'Erreurs Robuste** : Gérer explicitement toutes les erreurs et cas limites sans panique ni crash silencieux.
3. **Édition Chirurgicale** : Préserver scrupuleusement le style, l'indentation et le code existant.
4. **Structure Modulaire** : Les directives thématiques complémentaires sont réparties dans le dossier `.agents/rules/`.
