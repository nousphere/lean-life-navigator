
export type Program = {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  website: string;
  features: string[];
  pros: string[];
  cons: string[];
  supportType: string[];
  dietType: string[];
  exerciseRequirement: 'low' | 'medium' | 'high';
  timeCommitment: 'minimal' | 'moderate' | 'significant';
  bestFor: string[];
  notSuitableFor: string[];
};

// Sample weight loss programs 
export const programs: Program[] = [
  {
    id: 'weight-watchers',
    name: 'Weight Watchers',
    description: 'A points-based system focusing on overall eating habits rather than restricting specific foods.',
    monthlyPrice: 20,
    website: 'https://www.weightwatchers.com',
    features: ['Points-based system', 'Mobile app', 'Group meetings', 'Online community support'],
    pros: [
      'No foods are off-limits',
      'Strong community support',
      'Scientifically backed approach',
      'Focuses on sustainable lifestyle changes'
    ],
    cons: [
      'Points tracking can be tedious',
      'Results may be slower than other programs',
      'Additional cost for in-person meetings'
    ],
    supportType: ['group', 'app'],
    dietType: ['balanced', 'flexible'],
    exerciseRequirement: 'medium',
    timeCommitment: 'moderate',
    bestFor: ['sustainable', 'first-time', 'group'],
    notSuitableFor: ['quick', 'independent'],
  },
  {
    id: 'noom',
    name: 'Noom',
    description: 'Psychology-based approach focused on behavior change through education and coaching.',
    monthlyPrice: 60,
    website: 'https://www.noom.com',
    features: ['Personal coach', 'Daily lessons', 'Food logging', 'Group chat support'],
    pros: [
      'Focus on psychology of eating',
      'Personal coaching',
      'Educational approach',
      'No foods are restricted'
    ],
    cons: [
      'Higher cost',
      'Text-based coaching (not video)',
      'Requires daily app engagement'
    ],
    supportType: ['one-on-one', 'app'],
    dietType: ['balanced', 'educational'],
    exerciseRequirement: 'medium',
    timeCommitment: 'moderate',
    bestFor: ['sustainable', 'one-on-one', 'mix'],
    notSuitableFor: ['minimal'],
  },
  {
    id: 'keto-diet',
    name: 'Keto Diet Program',
    description: 'High-fat, low-carb diet that puts your body into a state of ketosis to burn fat for energy.',
    monthlyPrice: 0,
    website: 'https://www.ruled.me',
    features: ['Meal plans', 'Recipes', 'Educational content', 'Free resources online'],
    pros: [
      'Potential for rapid weight loss',
      'Can be followed without cost',
      'May reduce appetite',
      'Specific guidelines make decisions easier'
    ],
    cons: [
      'Restrictive diet',
      'Can be difficult to maintain',
      'Potential "keto flu" side effects',
      'Limited food options'
    ],
    supportType: ['independent'],
    dietType: ['keto', 'low-carb'],
    exerciseRequirement: 'low',
    timeCommitment: 'moderate',
    bestFor: ['quick', 'independent', 'keto'],
    notSuitableFor: ['sustainable', 'group'],
  },
  {
    id: 'intermittent-fasting',
    name: 'Intermittent Fasting',
    description: 'Cycling between periods of eating and fasting, focusing on when you eat rather than what you eat.',
    monthlyPrice: 0,
    website: 'https://www.healthline.com/nutrition/intermittent-fasting-guide',
    features: ['Various fasting protocols (16:8, 5:2, etc.)', 'Flexible food choices', 'Can combine with other diets'],
    pros: [
      'No cost to implement',
      'Flexible food choices',
      'Can be adapted to lifestyle',
      'May improve metabolic health'
    ],
    cons: [
      'Hunger during fasting periods',
      'Can be difficult for social eating',
      'Requires discipline',
      'May not work well with certain medical conditions'
    ],
    supportType: ['independent'],
    dietType: ['flexible', 'timing-focused'],
    exerciseRequirement: 'low',
    timeCommitment: 'minimal',
    bestFor: ['independent', 'minimal'],
    notSuitableFor: ['group', 'one-on-one'],
  },
  {
    id: 'personal-trainer',
    name: 'Personal Training Program',
    description: 'One-on-one fitness coaching with customized workout and nutrition plans.',
    monthlyPrice: 250,
    website: 'https://www.acefitness.org/resources/everyone/find-an-ace-pro/',
    features: ['Personalized workout plans', 'Nutrition guidance', 'Accountability', 'Expert technique correction'],
    pros: [
      'Highly personalized',
      'Direct accountability',
      'Expert guidance',
      'Form and technique correction'
    ],
    cons: [
      'Expensive',
      'Requires scheduled appointments',
      'Results depend on trainer quality',
      'May focus more on fitness than nutrition'
    ],
    supportType: ['one-on-one'],
    dietType: ['personalized'],
    exerciseRequirement: 'high',
    timeCommitment: 'significant',
    bestFor: ['muscle', 'one-on-one', 'significant'],
    notSuitableFor: ['minimal', 'independent'],
  },
  {
    id: 'meal-delivery',
    name: 'Meal Delivery Service',
    description: 'Pre-portioned, calorie-controlled meals delivered to your door.',
    monthlyPrice: 200,
    website: 'https://www.factor75.com/',
    features: ['Prepared meals', 'Portion control', 'Various dietary options', 'No cooking required'],
    pros: [
      'Convenient',
      'Portion controlled',
      'No meal planning needed',
      'Reduces decision fatigue'
    ],
    cons: [
      'Expensive',
      'Limited customization',
      'May not teach sustainable habits',
      'Environmental packaging impact'
    ],
    supportType: ['independent'],
    dietType: ['portion-control', 'convenient'],
    exerciseRequirement: 'low',
    timeCommitment: 'minimal',
    bestFor: ['minimal', 'independent'],
    notSuitableFor: ['group', 'sustainable'],
  },
  {
    id: 'app-based',
    name: 'MyFitnessPal Premium',
    description: 'App-based tracking for calories, exercise and progress with premium features.',
    monthlyPrice: 10,
    website: 'https://www.myfitnesspal.com',
    features: ['Food tracking', 'Exercise logging', 'Extensive food database', 'Goal setting'],
    pros: [
      'Low cost',
      'Flexible approach',
      'Detailed tracking',
      'Can be used with any diet'
    ],
    cons: [
      'Requires consistent logging',
      'Limited personalized guidance',
      'Can promote obsessive tracking',
      'No direct support'
    ],
    supportType: ['independent', 'app'],
    dietType: ['flexible', 'tracking-focused'],
    exerciseRequirement: 'medium',
    timeCommitment: 'moderate',
    bestFor: ['independent', 'mix'],
    notSuitableFor: ['one-on-one', 'group'],
  },
];
