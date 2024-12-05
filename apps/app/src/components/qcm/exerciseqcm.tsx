import { useState } from 'react';
import { QcmOption } from './qcmoption';

export const jsonDefault = {
  title: 'Exercice QCM',
  question: 'Quelle est la couleur du cheval blanc de Henri IV ?',
  items: [
    { type: 'text', value: 'Blanc' },
    { type: 'text', value: 'Noir' },
    { type: 'text', value: 'Rouge' },
    { type: 'text', value: 'Vert' },
  ],
  answers: [
    0,
  ],
  explication: 'Le cheval blanc de Henri IV est blanc.',
};

export const ExerciseQcm: React.FC<{ 
  json: {
    title: string,
    question: string,
    items: { type: string, value: string }[],
    answers: number[],
    explication: string
  }
}> = ({ json }) => {

  const correctAnswers = json["items"].map((item) => { return item; });

  const [isSubmitted, setSubmitted] = useState<boolean>(false);
  const [selectedAnswer, setSelected] = useState<{type: string, value: string}|null>(null);
  const [isCorrect, setCorrect] = useState<boolean>(false);

  const selectAnswer = (answer: {type: string, value: string}) => {
    if (!isSubmitted) {
      setSelected(answer);
    }
  }

  const validateButton = () => {
    if (selectedAnswer) {
      setSubmitted(true);
      if (json['answers'].includes(correctAnswers.indexOf(selectedAnswer))) {
        setCorrect(true);
      } else {
        setCorrect(false);
      }
    }
  }

  return (
    <div className={'flex justify-center'}>
      <div className={'flex flex-col links-exercice'}>
        <h1 className='text-xl font-bold'>{json['title']}</h1>
        <h2 className='text-lg'>{json['question']}</h2>
        <div className={'grid grid-cols-2 gap-2 mt-4'}>
          {json["items"].map((value, index) => (
            <QcmOption key={index} value={value} handleAnswer={selectAnswer} />
          ))}
        </div>
        {!isSubmitted && 
          <button onClick={() => validateButton()}>
            <p className='text-lg bg-slate-400 p-1 mt-5 dark:bg-slate-200 dark:text-black rounded'>Valider</p>
          </button>
        }

        {isSubmitted && 
          <div className='mt-5'>
            <p className={isCorrect ? "text-green-400" : "text-red-600" }>{ isCorrect ? 'Bonne réponse' : 'Mauvaise réponse'}</p>
            <p>{json['explication']}</p>
          </div>
        } 
      </div>
    </div>
  );
};

export default ExerciseQcm;