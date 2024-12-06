import { Button } from '../ui/button';

const FinalPage = ({ score, total }: { score: number; total: number }) => {
  const isPerfectScore = score === total;

  // Determine the background color based on the score range
  let bgColor = 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200';
  if (score >= 4 && score <= 6) {
    bgColor = 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200';
  } else if (score >= 7 && score <= 9) {
    bgColor = 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200';
  } else if (score >= 10) {
    bgColor = 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200';
  }

  return (
    <div className="text-center mt-10">
      <div className={`${bgColor} rounded-lg p-6 shadow-lg`}>
        <h2 className="text-4xl font-extrabold">
          Votre score est de {score} / {total}
        </h2>
        {isPerfectScore && (
          <p className="text-xl mt-4 font-bold text-green-600 dark:text-green-300">
            🎉 Félicitations pour un score parfait! 🎉
          </p>
        )}
      </div>
      <button
        className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium shadow-lg hover:bg-blue-700 transition"
        onClick={() => window.location.reload()}
      >
        Recommencer
      </button>
    </div>
  );
};

export default FinalPage;
