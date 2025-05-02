
import React, { useState } from 'react';
import QuestionCard from './QuestionCard';
import ProgressBar from './ProgressBar';
import ResultCard from './ResultCard';
import { questions } from '../data/questions';
import { getRecommendations } from '../utils/matchingAlgorithm';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export type UserAnswers = {
  [questionId: string]: any;
};

const QuestionnaireContainer = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [userAnswers, setUserAnswers] = useState<UserAnswers>({});
  const { toast } = useToast();
  
  const handleAnswer = (questionId: string, answer: any) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: answer,
    }));
  };
  
  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Show results when we've answered all questions
      setShowResults(true);
      window.scrollTo(0, 0);
      toast({
        title: "Analysis Complete!",
        description: "Here are your personalized program recommendations.",
      });
    }
  };
  
  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };
  
  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setShowResults(false);
    setUserAnswers({});
    window.scrollTo(0, 0);
  };
  
  const currentQuestion = questions[currentQuestionIndex];
  const { recommended, notRecommended } = showResults 
    ? getRecommendations(userAnswers) 
    : { recommended: [], notRecommended: [] };

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      {!showResults ? (
        <>
          <ProgressBar 
            currentStep={currentQuestionIndex + 1} 
            totalSteps={questions.length} 
          />
          
          <QuestionCard 
            question={currentQuestion}
            onAnswer={handleAnswer}
            onNext={handleNext}
            onBack={handleBack}
            currentAnswer={userAnswers[currentQuestion.id]}
            isFirst={currentQuestionIndex === 0}
            isLast={currentQuestionIndex === questions.length - 1}
          />
        </>
      ) : (
        <div className="fade-in">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Your Personalized Recommendations</h2>
            <Button variant="outline" onClick={handleReset}>
              Start Over
            </Button>
          </div>
          
          {recommended.length > 0 ? (
            <>
              <h3 className="text-xl font-semibold mb-4 text-primary">Top Recommendations</h3>
              <div className="space-y-6 mb-10">
                {recommended.map((program, index) => (
                  <ResultCard 
                    key={program.id} 
                    program={program} 
                    rank={index + 1} 
                    isRecommended={true}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center p-6 bg-muted rounded-lg mb-8">
              <h3 className="text-lg font-semibold mb-2">No strong matches found</h3>
              <p>Based on your answers, we couldn't find programs that strongly match your preferences.</p>
            </div>
          )}
          
          {notRecommended.length > 0 && (
            <>
              <h3 className="text-xl font-semibold mb-4 text-muted-foreground">
                Not Recommended For You
              </h3>
              <div className="space-y-6">
                {notRecommended.slice(0, 3).map((program, index) => (
                  <ResultCard 
                    key={program.id} 
                    program={program} 
                    rank={recommended.length + index + 1} 
                    isRecommended={false}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default QuestionnaireContainer;
