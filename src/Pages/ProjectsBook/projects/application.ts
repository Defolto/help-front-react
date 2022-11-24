import { IProject, setDateProject } from "./typeProject";

export const DATA: IProject[] = [
  {
    name: "Приложение для погоды",
    description: "Простое описание проекта",
    dateCreate: setDateProject("24.11.2022"),
    level: 20,
    number: 1,
    tags: ["React", "JavaScript", "Html"],
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
