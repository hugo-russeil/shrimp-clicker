import React from 'react';
import ExerciseQcm from './exerciseqcm';
import { qcmQuestions } from '../../data/data';

const QcmPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">
        Quiz à Choix Multiple
      </h1>
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
        <ExerciseQcm json={qcmQuestions} />
      </div>
    </div>
  );
};

export default QcmPage;
