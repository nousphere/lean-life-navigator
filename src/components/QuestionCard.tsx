
import React, { useState } from 'react';
import { Question } from '../data/questions';
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

type QuestionCardProps = {
  question: Question;
  onAnswer: (questionId: string, answer: any) => void;
  currentAnswer: any;
  onNext: () => void;
  onBack: () => void;
  isFirst: boolean;
  isLast: boolean;
};

const QuestionCard = ({ 
  question, 
  onAnswer, 
  currentAnswer, 
  onNext, 
  onBack, 
  isFirst,
  isLast 
}: QuestionCardProps) => {
  const [tempAnswer, setTempAnswer] = useState<any>(currentAnswer);
  const [error, setError] = useState<string | null>(null);

  const handleNext = () => {
    // Validate answer before proceeding
    if ((question.type === 'single-choice' || question.type === 'text') && !tempAnswer) {
      setError('Please select an option to continue');
      return;
    }
    
    if (question.type === 'multi-choice' && (!Array.isArray(tempAnswer) || tempAnswer.length === 0)) {
      setError('Please select at least one option');
      return;
    }
    
    // Save the answer and move to the next question
    onAnswer(question.id, tempAnswer);
    onNext();
  };

  const handleSingleChoiceChange = (value: string) => {
    setTempAnswer(value);
    setError(null);
    // Auto-advance to next question after a brief delay
    setTimeout(() => {
      onAnswer(question.id, value);
      onNext();
    }, 300);
  };
  
  const handleMultiChoiceChange = (value: string, checked: boolean) => {
    setError(null);
    
    if (value === 'none' && checked) {
      // If "None" is selected, clear all other selections
      setTempAnswer(['none']);
      return;
    }
    
    if (!Array.isArray(tempAnswer)) {
      setTempAnswer(checked ? [value] : []);
      return;
    }
    
    let newAnswers: string[];
    
    if (checked) {
      // If the item being checked is not "None", remove "None" from selections
      newAnswers = value !== 'none' 
        ? [...tempAnswer.filter(item => item !== 'none'), value] 
        : ['none']; // If selecting "None", clear other selections
    } else {
      // If unchecking an item, simply remove it
      newAnswers = tempAnswer.filter(item => item !== value);
    }
    
    setTempAnswer(newAnswers);
  };
  
  const handleSliderChange = (value: number[]) => {
    setTempAnswer(value[0]);
    setError(null);
  };
  
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempAnswer(e.target.value);
    setError(null);
  };

  const renderQuestionInput = () => {
    switch (question.type) {
      case 'single-choice':
        return (
          <RadioGroup 
            value={tempAnswer} 
            onValueChange={handleSingleChoiceChange}
            className="space-y-3"
          >
            {question.options?.map(option => (
              <div key={option.id} className="flex items-center space-x-2 rounded-lg border p-4 hover:bg-muted/50">
                <RadioGroupItem value={option.value} id={option.id} />
                <Label htmlFor={option.id} className="flex-grow cursor-pointer">{option.text}</Label>
              </div>
            ))}
          </RadioGroup>
        );
        
      case 'multi-choice':
        return (
          <div className="space-y-3">
            {question.options?.map(option => (
              <div key={option.id} className="flex items-center space-x-2 rounded-lg border p-4 hover:bg-muted/50">
                <Checkbox 
                  id={option.id} 
                  checked={Array.isArray(tempAnswer) && tempAnswer.includes(option.value)}
                  onCheckedChange={(checked) => handleMultiChoiceChange(option.value, checked === true)}
                />
                <Label htmlFor={option.id} className="flex-grow cursor-pointer">{option.text}</Label>
              </div>
            ))}
          </div>
        );
        
      case 'slider':
        return (
          <div className="space-y-6 py-4">
            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <span>{question.minLabel || question.min}</span>
              <span>{question.maxLabel || question.max}</span>
            </div>
            <Slider
              defaultValue={tempAnswer !== undefined ? [tempAnswer] : [Math.floor((question.min || 0) + (question.max || 100) / 2)]}
              min={question.min}
              max={question.max}
              step={question.step}
              onValueChange={handleSliderChange}
            />
            <div className="text-center text-lg font-medium mt-4">
              {tempAnswer !== undefined ? `$${tempAnswer}` : `$${Math.floor((question.min || 0) + (question.max || 100) / 2)}`}
            </div>
          </div>
        );
        
      case 'text':
        return (
          <Input 
            type="text" 
            placeholder={question.placeholder} 
            value={tempAnswer || ''} 
            onChange={handleTextChange}
            className="w-full p-4"
          />
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl w-full fade-in">
      <h3 className="text-xl font-semibold mb-4">{question.text}</h3>
      
      <div className="my-6">
        {renderQuestionInput()}
      </div>
      
      {error && <p className="text-destructive mb-4">{error}</p>}
      
      <div className="flex justify-between mt-6">
        <Button 
          variant="outline" 
          onClick={onBack}
          disabled={isFirst}
        >
          Back
        </Button>
        
        <Button onClick={handleNext}>
          {isLast ? 'See Results' : 'Next'}
        </Button>
      </div>
    </div>
  );
};

export default QuestionCard;
