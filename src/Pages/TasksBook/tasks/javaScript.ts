import {ITask, setDateTask} from "./typeTask";

export const DATA: ITask[] = [
    {
        number: 1,
        level: 1,
        date: setDateTask("23.11.2022"),
        description: "задачи JS",
        notes: ["Первая заметка", "Вторая азметка"],
        example: {
            inData: [1, 2, 3, 4],
            outData: [5, 6, 7, 8],
        },
    },
    {
        number: 2,
        level: 50,
        date: setDateTask("22.11.2022"),
        description: "задачи JS2",
        notes: ["Первая заметка 12", "Вторая азметка 12"],
        example: {
            inData: [1, 2, 5, 4],
            outData: [5, 2, 7, 8],
        },
    },
];
