import type { Command } from "./types";

export const COMMANDS: Command[] = [
  {
    name: "new",
    description: "Démarrer une nouvelle conversation",
    value: "/new",
  },
  {
    name: "agents",
    description: "Changer d'agent",
    value: "/agents",
  },
  {
    name: "models",
    description: "Choisir le modèle d'IA",
    value: "/models",
  },
  {
    name: "sessions",
    description: "Parcourir les sessions précédentes",
    value: "/sessions",
  },
  {
    name: "theme",
    description: "Changer le thème de couleurs",
    value: "/theme",
  },
  {
    name: "login",
    description: "Se connecter via le navigateur",
    value: "/login",
  },
  {
    name: "logout",
    description: "Se déconnecter du compte",
    value: "/logout",
  },
  {
    name: "upgrade",
    description: "Acheter des crédits supplémentaires",
    value: "/upgrade",
  },
  {
    name: "usage",
    description: "Ouvrir le portail de facturation",
    value: "/usage",
  },
  {
    name: "exit",
    description: "Quitter l'application",
    value: "/exit",
    action: (ctx) => {
      ctx.exit();
    },
  },
];
