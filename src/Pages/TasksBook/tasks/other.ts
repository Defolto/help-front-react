import { ITask, setDateTask } from "./typeTask";

export const DATA: ITask[] = [
  {
    number: 1,
    level: 1,
    date: setDateTask("19.11.2022"),
    description: "Общие задачи",
    notes: ["Первая заметка", "Вторая азметка"],
    example: {
      inData: [1, 2, 3, 4],
      outData: [5, 6, 7, 8],
    },
  },
  {
    number: 2,
    level: 50,
    date: setDateTask("18.11.2022"),
    description: "Общие задачи2",
    notes: ["Первая заметка 12", "Вторая азметка 12"],
    example: {
      inData: [1, 2, 5, 4],
      outData: [5, 2, 7, 8],
    },
  },
  {
    number: 3,
    level: 99,
    date: setDateTask("17.11.2022"),
    description: "Общие задачи3",
    notes: [" 12Первая заметка", "12 Вторая азметка"],
    example: {
      inData: [10, 2, 3, 4],
      outData: [5, 60, 7, 8],
    },
  },
];
