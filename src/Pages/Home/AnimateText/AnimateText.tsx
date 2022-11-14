import "./AnimateText.css";
import { useState } from "react";

type Props = {
  words: string[];
  offsetRight?: number;
};

function splitLetters(word: string): JSX.Element[] {
  const letters = word.split("").map((letter, i) => {
    return (
      <span key={i} className="AnimateText__letter">
        {letter}
      </span>
    );
  });
  return letters;
}

export default function AnimateText({
  words,
  offsetRight = 6,
}: Props): JSX.Element {
  const [numberActiveWord, setNumberActiveWord] = useState<number>(0);
  const [cw, setCw] = useState<JSX.Element[]>([]);
  const [nw, setNw] = useState<JSX.Element[]>([]);

  const wordsFromLetters = words.map((word) => {
    return splitLetters(word);
  });

  const animateLetterOut = (cw: JSX.Element[], i: number) => {
    setTimeout(function () {
      cw[i].props.className = "AnimateText__letter AnimateText__letter_out";
    }, i * 80);
  };

  const animateLetterIn = (nw: JSX.Element[], i: number) => {
    setTimeout(function () {
      nw[i].props.className = "AnimateText__letter AnimateText__letter_in";
    }, 340 + i * 80);
  };

  // Функция, меняющая слова
  const changeWord = () => {
    setNumberActiveWord((prev) => {
      return prev === words.length - 1 ? 0 : prev + 1;
    });
  };

  //Начало запуска анимации
  setTimeout(changeWord, 4000);

  return (
    <div className="AnimateText" style={{ marginLeft: offsetRight + "px" }}>
      {wordsFromLetters.map((word, i) => (
        <p
          key={i}
          className={`AnimateText__word ${
            i === numberActiveWord ? "AnimateText__word_visible" : ""
          }`}
        >
          {word.map((letter) => {
            return letter;
          })}
        </p>
      ))}
    </div>
  );
}
