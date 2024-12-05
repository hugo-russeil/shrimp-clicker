export const QcmOption: React.FC<{ value: { type: string; value: string }, handleAnswer: (answer:{ type: string; value: string }) => void }> = ({ value, handleAnswer }) => {
 
  let content;
  switch (value.type) {
    case 'text':
      content = <p className={'text-lg font-bold p-4'}>{value.value}</p>;
      break;
    case 'image':
      content = <img className={'w-32 rounded mx-auto'} src={value.value} />;
      break;
    default:
      content = <p className={'text-lg font-bold p-4'}>{value.value}</p>;
      break;
  }
 
  return (
    <button type="button"
            className="focus:outline-none focus:ring-4 focus:ring-green-700 rounded-xl"
            onClick={() => {
              handleAnswer(value);
            }}>
      {content}
    </button>
  );
};