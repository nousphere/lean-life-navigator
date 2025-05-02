
import React from 'react';

type ProgressBarProps = {
  currentStep: number;
  totalSteps: number;
};

const ProgressBar = ({ currentStep, totalSteps }: ProgressBarProps) => {
  const progress = Math.round((currentStep / totalSteps) * 100);
  
  return (
    <div className="w-full mb-6">
      <div className="flex justify-between mb-1 text-sm text-gray-500">
        <span>Start</span>
        <span>{`${currentStep} of ${totalSteps}`}</span>
        <span>Results</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-primary h-2.5 rounded-full transition-all duration-500 ease-in-out" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
