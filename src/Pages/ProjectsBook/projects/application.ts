import { getUrlProjectMaterial, IProject, setDateProject } from "./typeProject";

export const DATA: IProject[] = [
  {
    name: "Простой калькулятор",
    description:
      "Калькулятор, который состоит из простых html элементов. Минимальный акцент на дизайн, максимальный на функционал",
    date: setDateProject("28.12.2022"),
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
  {
    name: "Крестики-нолики",
    description: "Классическая игра с возможностью игры на двоих или ботом",
    date: setDateProject("11.01.2023"),
    level: 35,
    number: 2,
    tags: ["JavaScript", "Html", "Css"],
    notes: [
      "Когда кто-то выиграл используй alert, чтобы показать победителя",
      "Искуственный интелект, это просто огромное количество if, которые рассчитывают твои ходы",
      "После окончания партии, поле должно очищаться автоматически",
      "При нажатии кнопки 'играть с ботом' она заменяется на 'играть с другом'. При повторном нажатии, вернётся прошлая кнопка",
    ],
    materials: [
      {
        title: "Макет",
        src: getUrlProjectMaterial("application", 2, "maket.jpg"),
      },
    ],
    links: [],
  },
  {
    name: "Игровой автомат",
    description:
      "Симулятор игрового автомата с рандомным выпадением разных картинок",
    date: setDateProject("11.01.2023"),
    level: 15,
    number: 3,
    tags: ["JavaScript", "Html", "Css"],
    notes: [
      "При каждой игре с баланса снимается какая-то сумма денег",
      "В случае, если совпало 3 или более, то нужно пополнять баланс",
      "Если баланс ноль, тогда игра заканчивается и даётся возможность начать заново",
    ],
    materials: [
      {
        title: "Макет",
        src: getUrlProjectMaterial("application", 3, "maket.jpg"),
      },
    ],
    links: [],
  },
];
