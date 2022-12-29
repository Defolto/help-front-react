import { getUrlProjectMaterial, IProject, setDateProject } from "./typeProject";

export const DATA: IProject[] = [
  {
    name: "Простой калькулятор",
    description:
      "Калькулятор, который состоит из простых html элементов. Минимальный акцент на дизайн, максимальный на функционал",
    dateCreate: setDateProject("28.12.2022"),
    level: 2,
    number: 1,
    tags: ["JavaScript", "Html"],
    notes: [
      "При делении на ноль, ответ должен быть адекватным",
      "Доступны следующие операции: умножение, деление, сложение, вычитание и возведение в степень",
    ],
    materials: [
      {
        title: "Макет",
        src: getUrlProjectMaterial("application", 1, "maket.jpg"),
      },
    ],
    links: [],
  },
];
