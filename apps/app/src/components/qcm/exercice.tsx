import { useState } from 'react';
import { ExerciceQcm } from './qcm';

const jsonDefault = {
  'name': 'Allumer une LED',
  'type': 'EXERCICE_MCQ',
  'description': 'Arriveras-tu à allumer une LED pour Eliobot ?',
  'metadata': {
    'content': [
      {
        'type': 'MQC',
        'value': [
          {
            'type': 'TEXT',
            'value': 'pixels.brightness = 2.0\npixels.fill((0, 255, 0, 0.5))',
          },
          {
            'type': 'TEXT',
            'value': 'pixels.show()\npixels.fill((0, 0, 255, 0.5))\n',
          },
          {
            'type': 'TEXT',
            'value': 'pixels.fill((0, 255, 255, 0.5))',
          },
          {
            'type': 'TEXT',
            'value': 'pixels.fill((255, 0, 0, 0.5))\npixels.show()\n',
          },
        ],
      },
    ],
    'answers': [
      4
    ],
    'success': [
      {
        'type': 'TEXT',
        'value': 'Merci beaucoup, je peux enfin voir où je marche !',
      },
    ],
    'failure': [
      {
        'type': 'TEXT',
        'value': 'Dommage ! La bonne réponse était :',
      },
      {
        'type': 'TEXT',
        'value': 'pixels.fill((255, 0, 0, 0.5))\npixels.show()\n',
      },
      {
        'type': 'TEXT',
        'value': 'La première instruction indique qu\'on souhaite remplacer la couleur de la led par la couleur suivante : . On observe une composante rouge à 255 soit le maximum, et les autres composantes sont à 0. La luminosité est à 0.5 soit 50%. La couleur affichée sera donc du rouge.',
      },
    ],
  },
};


type ExerciceContent = {
  name: string;
  type: string;
  description: string;
  metadata: {
    content: { 
      type: string; 
      value: { 
        type: string; 
        value: string; 
      }[]; 
    }[];
    answers: number[];
    success: { 
      type: string; 
      value: string; 
    }[];
    failure: { 
      type: string; 
      value: string; 
    }[];
  };
};

export const ExerciceMultiple: React.FC<{ json: ExerciceContent, onValidate: () => void }> = ({ json = jsonDefault, onValidate }) => {

  const title = json['name'];
  const question = json['description'];
  const content = json['metadata']['content'];
  const success = json['metadata']['success'];
  const failure = json['metadata']['failure'];

  const correctAnswerIndex = json['metadata']['answers'].map(answer => answer - 1);
  const correctAnswerItem = content.find(item => item.type === 'MQC');
  const correctAnswers = correctAnswerItem ? correctAnswerIndex.map((index) => {correctAnswerItem.value[index]}) : null;

  const [selectedAnswer, setSelectedAnswer] = useState<{ type: string; value: string } | null>(null);
  const [result, setResult] = useState<{ type: string; value: string; }[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleAnswerSelect = (answer:any) => {
    setSelectedAnswer(answer);
  };

  const handleButton = () => {
    if (selectedAnswer !== null && !isSubmitted) {
      if (correctAnswer && selectedAnswer.value == correctAnswer.value) {
        setResult(success);
        setIsCorrect(true);
      } else {
        setResult(failure);
        setIsCorrect(false);
      }
      setIsSubmitted(true);

      // Notify the parent that the answer has been submitted
      if (onValidate) {
        onValidate();
      }
    }
  };

  return (
    <div className={'flex justify-center'}>
      <div className={'links-exercice'}>
        <ExerciceTitle title={title} />
        <ExerciceQuestion question={question} />
        {content.map((item: { type: string; value: string | { type: string; value: string; }[]; }, index: number) => {
          if (item['type'] === 'MQC') {
            return (
              <ExerciceQcm
                key={index}
                multipleChoices={item['value']}
                handleAnswer={handleAnswerSelect}
              />
            );
          }
        })}
        {!isSubmitted && <ExerciceValidateButton handleButton={handleButton} />}
        {isSubmitted && <ExerciceAnswerCard result={result} isCorrect={isCorrect} />}
      </div>
    </div>
  );
};

export default ExerciceMultiple;