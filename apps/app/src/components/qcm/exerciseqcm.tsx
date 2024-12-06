import { useState, useEffect } from 'react';
import { QcmOption } from './qcmoption';
import FinalPage from './finalpage';
import { Button } from '@chakra-ui/react';

// Utility function to shuffle an array
const shuffleArray = (array: any[]) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const ExerciseQcm: React.FC<{
  json: {
    title: string;
    question: string;
    items: { type: string; value: string }[];
    answers: number[];
    explication: string;
  }[];
}> = ({ json }) => {
  const [actualQuestion, setQuestion] = useState<number>(0);
  const [goodAnswers, setGoodAnswers] = useState<number>(0);
  const [isSubmitted, setSubmitted] = useState<boolean>(false);
  const [selectedAnswer, setSelected] = useState<{
    type: string;
    value: string;
  } | null>(null);
  const [isCorrect, setCorrect] = useState<boolean>(false);
  const [isFinish, setIsFinish] = useState<boolean>(false);
  const [shuffledItems, setShuffledItems] = useState<{ type: string; value: string }[]>([]);

  const question = json[actualQuestion];

  // Shuffle answers on component mount and whenever the question changes
  useEffect(() => {
    setShuffledItems(shuffleArray(question.items));
  }, [actualQuestion]);

  const selectAnswer = (answer: { type: string; value: string }) => {
    if (!isSubmitted) {
      setSelected(answer);
    }
  };

  const validateButton = () => {
    if (selectedAnswer) {
      setSubmitted(true);
      const originalIndex = question.items.findIndex(item => item.value === selectedAnswer.value);
      if (question.answers.includes(originalIndex)) {
        setCorrect(true);
        setGoodAnswers(goodAnswers + 1);
      } else {
        setCorrect(false);
      }
    }
  };

  return (
    <div className={'flex justify-center'}>
      <div className={'flex flex-col links-exercice'}>
        {!isFinish && (
          <div>
            <p className="text-center">
              {actualQuestion + 1} / {json.length}
            </p>
            <h1 className="text-xl font-bold">{question.title}</h1>
            <h2 className="text-lg">{question.question}</h2>
            <div className={'grid grid-cols-2 gap-2 mt-4'}>
              {shuffledItems.map((value, index) => (
                <QcmOption
                  key={index}
                  value={value}
                  handleAnswer={selectAnswer}
                />
              ))}
            </div>
          </div>
        )}

        {!isSubmitted && !isFinish && (
          <button
            onClick={() => validateButton()}
            className="text-lg bg-slate-400 p-2 mt-5 dark:bg-slate-200 dark:text-black rounded"
          >
            Valider
          </button>
        )}

        {isSubmitted && actualQuestion + 1 < json.length && !isFinish && (
          <div className="mt-5">
            <p className={isCorrect ? 'text-green-400' : 'text-red-600'}>
              {isCorrect ? 'Bonne réponse' : 'Mauvaise réponse'}
            </p>
            <p>{question.explication}</p>
            <button
              onClick={() => {
                setQuestion(actualQuestion + 1);
                setSubmitted(false);
                setSelected(null);
                setCorrect(false);
              }}
              className="text-lg bg-slate-400 p-2 mt-5 dark:bg-slate-200 dark:text-black rounded"
            >
              Suivant
            </button>
          </div>
        )}
        {isSubmitted && actualQuestion + 1 === json.length && !isFinish && (
          <div>
            <p className={isCorrect ? 'text-green-400' : 'text-red-600'}>
              {isCorrect ? 'Bonne réponse' : 'Mauvaise réponse'}
            </p>
            <p>{question.explication}</p>
            <button
              onClick={() => {
                setIsFinish(true);
              }}
              className="mt-5 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium shadow-lg hover:bg-blue-700 transition"
            >
              Voir le résultat
            </button>
          </div>
        )}
        {isFinish && (
          <div>
            <FinalPage score={goodAnswers} total={json.length} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ExerciseQcm;
