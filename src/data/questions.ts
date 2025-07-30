
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
  {
    id: 'current-fitness-level',
    text: 'How would you describe your current fitness level?',
    type: 'single-choice',
    options: [
      { id: 'beginner', text: 'Beginner - I rarely exercise', value: 'beginner' },
      { id: 'intermediate', text: 'Intermediate - I exercise occasionally', value: 'intermediate' },
      { id: 'advanced', text: 'Advanced - I exercise regularly', value: 'advanced' },
    ],
  },
  {
    id: 'technology-comfort',
    text: 'How comfortable are you with using apps and technology?',
    type: 'single-choice',
    options: [
      { id: 'very-comfortable', text: 'Very comfortable - I love tech solutions', value: 'tech-savvy' },
      { id: 'comfortable', text: 'Comfortable - I can learn new apps', value: 'moderate' },
      { id: 'basic', text: 'Basic - I prefer simple solutions', value: 'basic' },
      { id: 'prefer-traditional', text: 'I prefer traditional methods', value: 'traditional' },
    ],
  },
  {
    id: 'tracking-preference',
    text: 'How do you prefer to track your progress?',
    type: 'multi-choice',
    options: [
      { id: 'mobile-app', text: 'Mobile app', value: 'mobile-app' },
      { id: 'website', text: 'Website/computer', value: 'website' },
      { id: 'paper-journal', text: 'Paper journal', value: 'paper' },
      { id: 'photos', text: 'Progress photos', value: 'photos' },
      { id: 'measurements', text: 'Body measurements', value: 'measurements' },
      { id: 'minimal', text: 'Minimal tracking', value: 'minimal' },
    ],
  },
  {
    id: 'motivation-style',
    text: 'What motivates you most to stick with a program?',
    type: 'multi-choice',
    options: [
      { id: 'community', text: 'Community support and encouragement', value: 'community' },
      { id: 'progress-tracking', text: 'Seeing measurable progress', value: 'progress' },
      { id: 'rewards', text: 'Rewards and incentives', value: 'rewards' },
      { id: 'education', text: 'Learning about health and nutrition', value: 'education' },
      { id: 'competition', text: 'Challenges and competition', value: 'competition' },
      { id: 'routine', text: 'Having a structured routine', value: 'routine' },
    ],
  },
  {
    id: 'lifestyle-factors',
    text: 'Which lifestyle factors affect your ability to follow a program?',
    type: 'multi-choice',
    options: [
      { id: 'busy-schedule', text: 'Very busy work/life schedule', value: 'busy' },
      { id: 'family-responsibilities', text: 'Family/caregiving responsibilities', value: 'family' },
      { id: 'travel-frequently', text: 'Frequent travel', value: 'travel' },
      { id: 'irregular-schedule', text: 'Irregular work hours', value: 'irregular' },
      { id: 'social-eating', text: 'Frequent social eating situations', value: 'social' },
      { id: 'limited-cooking', text: 'Limited time/ability to cook', value: 'cooking' },
      { id: 'none', text: 'No major constraints', value: 'flexible' },
    ],
  },
  {
    id: 'program-structure',
    text: 'What type of program structure works best for you?',
    type: 'single-choice',
    options: [
      { id: 'highly-structured', text: 'Highly structured with detailed plans', value: 'structured' },
      { id: 'semi-structured', text: 'Semi-structured with some flexibility', value: 'semi-structured' },
      { id: 'flexible', text: 'Flexible with general guidelines', value: 'flexible' },
      { id: 'self-directed', text: 'Self-directed with minimal structure', value: 'self-directed' },
    ],
  },
  {
    id: 'accountability-preference',
    text: 'How do you prefer to be held accountable?',
    type: 'multi-choice',
    options: [
      { id: 'daily-check-ins', text: 'Daily check-ins or reminders', value: 'daily' },
      { id: 'weekly-coaching', text: 'Weekly coaching calls', value: 'weekly-coaching' },
      { id: 'group-accountability', text: 'Group accountability sessions', value: 'group' },
      { id: 'progress-reports', text: 'Regular progress reports', value: 'reports' },
      { id: 'self-accountability', text: 'Self-accountability tools', value: 'self' },
      { id: 'minimal', text: 'Minimal accountability', value: 'minimal' },
    ],
  },
  {
    id: 'timeline-expectation',
    text: 'What is your realistic timeline for seeing results?',
    type: 'single-choice',
    options: [
      { id: 'immediate', text: '1-2 weeks (quick results)', value: 'immediate' },
      { id: 'short-term', text: '1-3 months', value: 'short-term' },
      { id: 'medium-term', text: '3-6 months', value: 'medium-term' },
      { id: 'long-term', text: '6+ months (sustainable approach)', value: 'long-term' },
    ],
  },
  {
    id: 'health-considerations',
    text: 'Do any of these health considerations apply to you?',
    type: 'multi-choice',
    options: [
      { id: 'diabetes', text: 'Diabetes or pre-diabetes', value: 'diabetes' },
      { id: 'heart-conditions', text: 'Heart conditions', value: 'heart' },
      { id: 'joint-issues', text: 'Joint problems or arthritis', value: 'joints' },
      { id: 'food-allergies', text: 'Food allergies or intolerances', value: 'allergies' },
      { id: 'medications', text: 'Medications that affect weight', value: 'medications' },
      { id: 'pregnancy', text: 'Pregnancy or nursing', value: 'pregnancy' },
      { id: 'eating-disorder-history', text: 'History of eating disorders', value: 'eating-disorder' },
      { id: 'none', text: 'None of these apply', value: 'none' },
    ],
  },
];
