import { useState } from 'react';
import { QcmOption } from './qcmoption';
import { title } from 'process';
import FinalPage from './finalpage';
import { Button } from '@chakra-ui/react';

export const jsonDefault = [
  {
    title: 'Exercice QCM',
    question: 'Quelle est la couleur du cheval blanc de Henri IV ?',
    items: [
      { type: 'text', value: 'Blanc' },
      { type: 'text', value: 'Noir' },
      { type: 'text', value: 'Rouge' },
      { type: 'text', value: 'Vert' },
    ],
    answers: [0],
    explication: 'Le cheval blanc de Henri IV est blanc.',
  },
  {
    title: 'Exercice QCM',
    question: 'Quelle est la couleur du cheval blanc de Napoléon ?',
    items: [
      { type: 'text', value: 'Blanc' },
      { type: 'text', value: 'Noir' },
      { type: 'text', value: 'Rouge' },
      { type: 'text', value: 'Vert' },
    ],
    answers: [0],
    explication: 'Le cheval blanc de Napoléon est noir.',
  },
];

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

  var question = json[actualQuestion];

  const correctAnswers = question['items'].map((item) => {
    return item;
  });

  const selectAnswer = (answer: { type: string; value: string }) => {
    if (!isSubmitted) {
      setSelected(answer);
    }
  };

  const validateButton = () => {
    if (selectedAnswer) {
      setSubmitted(true);
      if (
        question['answers'].includes(correctAnswers.indexOf(selectedAnswer))
      ) {
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
            <h1 className="text-xl font-bold">{question['title']}</h1>
            <h2 className="text-lg">{question['question']}</h2>
            <div className={'grid grid-cols-2 gap-2 mt-4'}>
              {question['items'].map((value, index) => (
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
          <button onClick={() => validateButton()}>
            <p className="text-lg bg-slate-400 p-1 mt-5 dark:bg-slate-200 dark:text-black rounded">
              Valider
            </p>
          </button>
        )}

        {isSubmitted && actualQuestion + 1 < json.length && !isFinish && (
          <div className="mt-5">
            <p className={isCorrect ? 'text-green-400' : 'text-red-600'}>
              {isCorrect ? 'Bonne réponse' : 'Mauvaise réponse'}
            </p>
            <p>{question['explication']}</p>
            <button
              onClick={() => {
                setQuestion(actualQuestion + 1);
                setSubmitted(false);
                setSelected(null);
                setCorrect(false);
              }}
            >
              <p className="text-lg bg-slate-400 p-1 mt-5 dark:bg-slate-200 dark:text-black rounded">
                Suivant
              </p>
            </button>
          </div>
        )}
        {isSubmitted && actualQuestion + 1 === json.length && !isFinish && (
          <div>
            <p className={isCorrect ? 'text-green-400' : 'text-red-600'}>
              {isCorrect ? 'Bonne réponse' : 'Mauvaise réponse'}
            </p>
            <p>{question['explication']}</p>
            <Button
              onClick={() => {
                setIsFinish(true);
              }}
            >
              Voir le résultat
            </Button>
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
