import "./AnimateText.css";
import { useEffect, useState } from "react";

type Props = {
  words: string[];
  offsetRight?: number;
};

type IWord = {
  letter: string;
  state: string;
};

function splitLetters(word: string): IWord[] {
  const letters = word.split("").map((letter) => {
    return {
      letter: letter,
      state: "",
    };
  });
  return letters;
}

export default function AnimateText({
  words,
  offsetRight = 16,
}: Props): JSX.Element {
  const [numberActiveWord, setNumberActiveWord] = useState<number>(0);
  const [wordsFromLetters, setWordsFromLetters] = useState(
    words.map((word) => {
      return splitLetters(word);
    })
  );

  const animateLetterOut = (i: number, number: number) => {
    setTimeout(function () {
      let newWordsFromLetters = wordsFromLetters.slice(0);
      newWordsFromLetters[number][i].state = "out";
      setWordsFromLetters(newWordsFromLetters);
    }, i * 80);
  };

  const animateLetterIn = (i: number, number: number) => {
    setTimeout(function () {
      let newWordsFromLetters = wordsFromLetters.slice(0);
      newWordsFromLetters[number][i].state = "in";
      setWordsFromLetters(newWordsFromLetters);
    }, 340 + i * 80);
  };

  // Функция, меняющая слова
  const changeWord = (activeNumber: number) => {
    const nextNumber =
      activeNumber === wordsFromLetters.length - 1 ? 0 : activeNumber + 1;

    let oldWord = wordsFromLetters[activeNumber];
    let newWord = wordsFromLetters[nextNumber];

    for (let i = 0; i < oldWord.length; i++) {
      animateLetterOut(i, activeNumber);
    }

    for (let i = 0; i < newWord.length; i++) {
      let newWordsFromLetters = wordsFromLetters.slice(0);
      newWordsFromLetters[nextNumber][i].state = "";
      setWordsFromLetters(newWordsFromLetters);
      animateLetterIn(i, nextNumber);
    }

    if (wordsFromLetters.length - 1 === activeNumber) {
      setNumberActiveWord(0);
    } else {
      setNumberActiveWord((prevState) => prevState + 1);
    }
    setTimeout(() => changeWord(nextNumber), 3000);
  };

  useEffect(() => {
    changeWord(numberActiveWord);
  }, []);

  const prevWord =
    numberActiveWord === 0 ? wordsFromLetters.length - 1 : numberActiveWord - 1;
  return (
    <div className="AnimateText" style={{ marginLeft: offsetRight + "px" }}>
      {wordsFromLetters.map((word, i) => (
        <p
          key={i}
          className={`AnimateText__word ${
            i === numberActiveWord ? "AnimateText__word_active" : ""
          } ${i === prevWord ? "AnimateText__word_prev" : ""}`}
        >
          {word.map((item, j) => {
            return (
              <span
                key={j}
                className={`AnimateText__letter ${
                  i === numberActiveWord && item.state === "in"
                    ? "AnimateText__letter_in"
                    : ""
                } ${item.state === "out" ? "AnimateText__letter_out" : ""}`}
              >
                {item.letter}
              </span>
            );
          })}
        </p>
      ))}
    </div>
  );
}
