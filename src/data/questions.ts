
export type QuestionOption = {
  id: string;
  text: string;
  value: string;
};

export type Question = {
  id: string;
  text: string;
  type: 'single-choice' | 'multi-choice' | 'slider' | 'text';
  options?: QuestionOption[];
  min?: number;
  max?: number;
  step?: number;
  minLabel?: string;
  maxLabel?: string;
  placeholder?: string;
};

// These are the questions that will be asked to help match users with a program
export const questions: Question[] = [
  {
    id: 'goal',
    text: 'What is your primary weight loss goal?',
    type: 'single-choice',
    options: [
      { id: 'lose-weight', text: 'Lose weight quickly', value: 'quick' },
      { id: 'gradual', text: 'Lose weight gradually', value: 'gradual' },
      { id: 'sustainable', text: 'Develop sustainable habits', value: 'sustainable' },
      { id: 'muscle', text: 'Build muscle while losing fat', value: 'muscle' },
    ],
  },
  {
    id: 'past-experience',
    text: 'Have you tried weight loss programs before?',
    type: 'single-choice',
    options: [
      { id: 'yes-success', text: 'Yes, with success', value: 'success' },
      { id: 'yes-failure', text: 'Yes, but didn\'t work for me', value: 'failure' },
      { id: 'no', text: 'No, this is my first time', value: 'first-time' },
    ],
  },
  {
    id: 'previous-programs',
    text: 'Which programs have you tried before? (Select all that apply)',
    type: 'multi-choice',
    options: [
      { id: 'weight-watchers', text: 'Weight Watchers', value: 'weight-watchers' },
      { id: 'noom', text: 'Noom', value: 'noom' },
      { id: 'keto', text: 'Keto Diet', value: 'keto' },
      { id: 'intermittent', text: 'Intermittent Fasting', value: 'intermittent-fasting' },
      { id: 'personal-trainer', text: 'Personal Trainer', value: 'personal-trainer' },
      { id: 'meal-delivery', text: 'Meal Delivery Service', value: 'meal-delivery' },
      { id: 'other', text: 'Other', value: 'other' },
      { id: 'none', text: 'None', value: 'none' },
    ],
  },
  {
    id: 'support-preference',
    text: 'Do you prefer to have support or work independently?',
    type: 'single-choice',
    options: [
      { id: 'group', text: 'I prefer group support', value: 'group' },
      { id: 'one-on-one', text: 'I prefer one-on-one coaching', value: 'one-on-one' },
      { id: 'independent', text: 'I prefer to work independently', value: 'independent' },
      { id: 'mix', text: 'I prefer a mix of support and independence', value: 'mix' },
    ],
  },
  {
    id: 'budget',
    text: 'What is your monthly budget for a weight loss program?',
    type: 'slider',
    min: 0,
    max: 300,
    step: 25,
    minLabel: '$0',
    maxLabel: '$300+',
  },
  {
    id: 'time-commitment',
    text: 'How much time can you commit to a program each week?',
    type: 'single-choice',
    options: [
      { id: 'minimal', text: 'Minimal (1-2 hours)', value: 'minimal' },
      { id: 'moderate', text: 'Moderate (3-5 hours)', value: 'moderate' },
      { id: 'significant', text: 'Significant (6+ hours)', value: 'significant' },
    ],
  },
  {
    id: 'diet-preference',
    text: 'Do you have any dietary preferences?',
    type: 'multi-choice',
    options: [
      { id: 'vegetarian', text: 'Vegetarian', value: 'vegetarian' },
      { id: 'vegan', text: 'Vegan', value: 'vegan' },
      { id: 'keto', text: 'Keto', value: 'keto' },
      { id: 'paleo', text: 'Paleo', value: 'paleo' },
      { id: 'gluten-free', text: 'Gluten-Free', value: 'gluten-free' },
      { id: 'no-preference', text: 'No specific preference', value: 'no-preference' },
    ],
  },
  {
    id: 'exercise-preference',
    text: 'What type of exercise do you enjoy?',
    type: 'multi-choice',
    options: [
      { id: 'cardio', text: 'Cardio (running, swimming, etc.)', value: 'cardio' },
      { id: 'strength', text: 'Strength training', value: 'strength' },
      { id: 'yoga', text: 'Yoga/Pilates', value: 'yoga' },
      { id: 'group-fitness', text: 'Group fitness classes', value: 'group-fitness' },
      { id: 'home-workout', text: 'Home workouts', value: 'home-workout' },
      { id: 'walking', text: 'Walking', value: 'walking' },
      { id: 'none', text: 'I don\'t enjoy exercise', value: 'none' },
    ],
  },
];
