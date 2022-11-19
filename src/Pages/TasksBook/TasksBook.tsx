import "./TasksBook.css";
import Nav from "../../Components/Nav/Nav";
import { useState } from "react";
import SearchIcon from "./icons/SearchIcon";
import Slider from "../../Components/Slider/Slider";

export type ITypeTask = "Все" | "Вёрстка" | "JavaScript" | "Общие";

const TASKS: ITypeTask[] = ["Все", "Вёрстка", "JavaScript", "Общие"];
const DEFAULT_SELECT_TYPE_TASKS: ITypeTask = "Все";

export default function TasksBook(): JSX.Element {
  const [selectTypeTasks, setSelectTypeTasks] = useState<ITypeTask>(
    DEFAULT_SELECT_TYPE_TASKS
  );
  const [minHardLevel, setMinHardLevel] = useState<number>(0);
  const [maxHardLevel, setMaxHardLevel] = useState<number>(100);

  return (
    <div className="TasksBook">
      <Nav
        items={TASKS}
        activeItem={selectTypeTasks}
        onSelect={setSelectTypeTasks}
      />
      <div className="TasksBook__filter">
        <div className="TasksBook__filterHard">
          <p>
            Сложность от {minHardLevel} до {maxHardLevel}
          </p>
          <Slider
            width={180}
            valueFrom={minHardLevel}
            valueTo={maxHardLevel}
            //@ts-ignore разобраться с типизацией
            changeFrom={setMinHardLevel}
            //@ts-ignore разобраться с типизацией
            changeTo={setMaxHardLevel}
          />
        </div>
        <div className="TasksBook__filterSort">
          <select>
            <option>По возрастанию сложности</option>
            <option>По убыванию сложности</option>
            <option>Сначала новее</option>
            <option>Сначала старее</option>
          </select>
        </div>
        <div className="TasksBook__filterFind">
          <input placeholder="Номер задачи" type="number" />
          <SearchIcon />
        </div>
      </div>
      <div className="TasksBook__tasks">
        <div className="TasksBook__task">
          <div className="TasksBook__taskHeader">
            <p className="TasksBook__taskHard">Сложность 12</p>
            <p className="TasksBook__taskNumber">№1</p>
          </div>

          <div className="TasksBook__taskBody">
            <div className="TasksBook__task_column">
              <div className="TasksBook__taskDescription">
                <p>Описание</p>
                <p>
                  Полное описание какой-то задачи, чтобы оно занимало ровно
                  половину от ширины экрана. Однако этот пример должен в самой
                  лучшей форме описывать всё то, что нужно для решения задачи.
                  Понимаю, что пишу полную фигню, но надо просто занять как
                  можно больше места.
                </p>
              </div>
              <div className="TasksBook__taskRemarks">
                <p>Описание</p>
                <ul>
                  <li>Первое замечание</li>
                  <li>Второе замечание</li>
                  <li>Третье замечание</li>
                </ul>
              </div>
            </div>
            <div className="TasksBook__task_column">
              <p>Пример</p>
            </div>
          </div>
        </div>
        <div className="TasksBook__task">
          <div className="TasksBook__taskHeader">
            <p className="TasksBook__taskHard">Сложность 12</p>
            <p className="TasksBook__taskNumber">№1</p>
          </div>

          <div className="TasksBook__taskBody">
            <div className="TasksBook__task_column">
              <div className="TasksBook__taskDescription">
                <p>Описание</p>
                <p>
                  Полное описание какой-то задачи, чтобы оно занимало ровно
                  половину от ширины экрана. Однако этот пример должен в самой
                  лучшей форме описывать всё то, что нужно для решения задачи.
                  Понимаю, что пишу полную фигню, но надо просто занять как
                  можно больше места.
                </p>
              </div>
              <div className="TasksBook__taskRemarks">
                <p>Описание</p>
                <ul>
                  <li>Первое замечание</li>
                  <li>Второе замечание</li>
                  <li>Третье замечание</li>
                </ul>
              </div>
            </div>
            <div className="TasksBook__task_column">
              <p>Пример</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
