import { IProject, setDateProject } from "./typeProject";

export const DATA: IProject[] = [
  {
    name: "Простой калькулятор",
    description:
      "Калькулятор, который состоит из простых html элементов. Минимальный акцент на дизайн, максимальный на функционал",
    dateCreate: setDateProject("28.12.2022"),
    level: 2,
    number: 1,
    tags: ["JavaScript", "Html"],
    notes: ["Первая заметка", "Вторая заметка"],
    materials: [
      {
        title: "ссылка номер 1",
        src: "vk.com",
      },
      {
        title: "ссылка номер 2",
        src: "vk.com",
      },
    ],
    links: [
      {
        title: "ссылка номер 1",
        src: "vk.com",
      },
      {
        title: "ссылка номер 2",
        src: "vk.com",
      },
    ],
  },
];
