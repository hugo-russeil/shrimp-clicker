import { QcmOption } from './qcmoption';
 
export const ExerciceQcm: React.FC<{ multipleChoices:any, handleAnswer:(answer:) => void }> = ({ multipleChoices, handleAnswer }) => {
  return (
    <div className={'grid grid-cols-2 gap-2 mt-4'}>
      {multipleChoices.map((value, index) => (
        <QcmOption key={index} value={value} handleAnswer={handleAnswer} />
      ))}
    </div>
  );
};