export const QcmOption: React.FC<{ value:any, handleAnswer:any }> = ({ value, handleAnswer }) => {
 
  let content;
  switch (value.type) {
    case 'TEXT':
      content = <p className={'text-lg font-bold pt-4'}>{value.value}</p>;
      break;
    case 'IMAGE':
      content = <img className={'w-32 rounded mx-auto'} src={value.src} alt={value.alt} />;
      break;
    default:
      content = <p className={'text-lg font-bold pt-4'}>{value.value}</p>;
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