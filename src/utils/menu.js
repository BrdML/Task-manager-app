import { list, check, todo, home } from "./icons";

const menu = [
  {
    id: 1,
    title: "Toutes les Tâches",
    icon: home,
    link: "/",
  },
  {
    id: 2,
    title: "Important!",
    icon: list,
    link: "/important",
  },
  {
    id: 3,
    title: "Terminé!",
    icon: check,
    link: "/completed",
  },
  {
    id: 4,
    title: "A Faire",
    icon: todo,
    link: "/incomplete",
  },
];

export default menu;