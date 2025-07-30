
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

// Comprehensive weight loss programs database
export const programs: Program[] = [
  // Popular Commercial Programs
  {
    id: 'weight-watchers',
    name: 'Weight Watchers (WW)',
    description: 'A points-based system focusing on overall eating habits rather than restricting specific foods.',
    monthlyPrice: 20,
    website: 'https://www.weightwatchers.com',
    features: ['SmartPoints system', 'Mobile app', 'Group meetings', 'Online community support', 'ZeroPoint foods'],
    pros: [
      'No foods are off-limits',
      'Strong community support',
      'Scientifically backed approach',
      'Focuses on sustainable lifestyle changes',
      'Extensive food database'
    ],
    cons: [
      'Points tracking can be tedious',
      'Results may be slower than other programs',
      'Additional cost for in-person meetings',
      'Some find the system confusing'
    ],
    supportType: ['group', 'app', 'community'],
    dietType: ['balanced', 'flexible', 'points-based'],
    exerciseRequirement: 'medium',
    timeCommitment: 'moderate',
    bestFor: ['sustainable', 'first-time', 'group', 'balanced-approach'],
    notSuitableFor: ['quick-results', 'independent-only'],
  },
  {
    id: 'noom',
    name: 'Noom',
    description: 'Psychology-based approach focused on behavior change through education and coaching.',
    monthlyPrice: 60,
    website: 'https://www.noom.com',
    features: ['Personal coach', 'Daily lessons', 'Food logging', 'Group chat support', 'Color-coded food system'],
    pros: [
      'Focus on psychology of eating',
      'Personal coaching',
      'Educational approach',
      'No foods are restricted',
      'Evidence-based methods'
    ],
    cons: [
      'Higher cost',
      'Text-based coaching (not video)',
      'Requires daily app engagement',
      'Can be overwhelming for some'
    ],
    supportType: ['one-on-one', 'app', 'community'],
    dietType: ['balanced', 'educational', 'psychology-based'],
    exerciseRequirement: 'medium',
    timeCommitment: 'moderate',
    bestFor: ['sustainable', 'one-on-one', 'behavioral-change'],
    notSuitableFor: ['minimal-time', 'quick-fixes'],
  },
  {
    id: 'nutrisystem',
    name: 'Nutrisystem',
    description: 'Pre-packaged meal delivery system with portion-controlled foods for structured weight loss.',
    monthlyPrice: 300,
    website: 'https://www.nutrisystem.com',
    features: ['Pre-packaged meals', 'Portion control', 'Counselor support', 'Meal planning app', 'Flex meals'],
    pros: [
      'No meal planning required',
      'Portion controlled',
      'Structured approach',
      'Professional counselor support',
      'Clear guidelines'
    ],
    cons: [
      'Expensive',
      'Processed food dependent',
      'Limited fresh food variety',
      'May not teach cooking skills',
      'Shipping costs'
    ],
    supportType: ['one-on-one', 'structured'],
    dietType: ['portion-control', 'convenient', 'structured'],
    exerciseRequirement: 'low',
    timeCommitment: 'minimal',
    bestFor: ['structured-approach', 'busy-lifestyle', 'portion-control'],
    notSuitableFor: ['cooking-enthusiasts', 'flexible-eaters'],
  },
  {
    id: 'jenny-craig',
    name: 'Jenny Craig',
    description: 'Personal weight loss program combining pre-packaged meals with one-on-one coaching.',
    monthlyPrice: 400,
    website: 'https://www.jennycraig.com',
    features: ['Pre-packaged meals', 'Personal consultant', 'Weekly check-ins', 'Gradual transition to own food'],
    pros: [
      'Personal one-on-one support',
      'Structured meal plan',
      'No calorie counting',
      'Proven results',
      'Gradual transition plan'
    ],
    cons: [
      'Very expensive',
      'Relies on packaged foods',
      'Limited location availability',
      'May not teach long-term habits',
      'Restrictive approach'
    ],
    supportType: ['one-on-one', 'in-person'],
    dietType: ['structured', 'portion-control'],
    exerciseRequirement: 'low',
    timeCommitment: 'moderate',
    bestFor: ['high-support', 'structured-approach', 'accountability'],
    notSuitableFor: ['budget-conscious', 'independent-learners'],
  },

  // Diet-Specific Programs
  {
    id: 'keto-diet',
    name: 'Ketogenic Diet',
    description: 'High-fat, low-carb diet that puts your body into ketosis to burn fat for energy.',
    monthlyPrice: 0,
    website: 'https://www.ruled.me',
    features: ['Meal plans', 'Recipes', 'Educational content', 'Free resources online', 'Macros tracking'],
    pros: [
      'Potential for rapid weight loss',
      'Can be followed without cost',
      'May reduce appetite',
      'Specific guidelines',
      'Mental clarity benefits'
    ],
    cons: [
      'Very restrictive',
      'Difficult to maintain socially',
      'Potential "keto flu"',
      'Limited food variety',
      'May affect athletic performance'
    ],
    supportType: ['independent', 'online-community'],
    dietType: ['keto', 'low-carb', 'high-fat'],
    exerciseRequirement: 'low',
    timeCommitment: 'moderate',
    bestFor: ['quick-results', 'independent', 'keto-lifestyle'],
    notSuitableFor: ['flexible-eating', 'social-eaters'],
  },
  {
    id: 'paleo-diet',
    name: 'Paleo Diet',
    description: 'Eating like our ancestors - whole foods, no processed items, grains, or dairy.',
    monthlyPrice: 0,
    website: 'https://thepaleodiet.com',
    features: ['Whole foods focus', 'Recipe databases', 'Meal planning guides', 'Community forums'],
    pros: [
      'Emphasizes whole foods',
      'No calorie counting',
      'May reduce inflammation',
      'Simple food rules',
      'High protein intake'
    ],
    cons: [
      'Eliminates entire food groups',
      'Can be expensive',
      'Socially restrictive',
      'May lack certain nutrients',
      'Limited scientific evidence'
    ],
    supportType: ['independent', 'online-community'],
    dietType: ['paleo', 'whole-foods', 'grain-free'],
    exerciseRequirement: 'medium',
    timeCommitment: 'moderate',
    bestFor: ['whole-food-focus', 'anti-inflammatory', 'simple-rules'],
    notSuitableFor: ['budget-conscious', 'vegetarians'],
  },
  {
    id: 'mediterranean-diet',
    name: 'Mediterranean Diet',
    description: 'Heart-healthy eating pattern based on traditional Mediterranean cuisine with olive oil, fish, and vegetables.',
    monthlyPrice: 0,
    website: 'https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/in-depth/mediterranean-diet',
    features: ['Flexible eating pattern', 'Heart-healthy focus', 'Extensive research backing', 'Recipe collections'],
    pros: [
      'Heart health benefits',
      'Flexible and sustainable',
      'Allows moderate wine',
      'Emphasizes healthy fats',
      'Well-researched'
    ],
    cons: [
      'May not lead to rapid weight loss',
      'Requires cooking skills',
      'Can be higher in calories',
      'Olive oil can be expensive',
      'Less structured guidance'
    ],
    supportType: ['independent'],
    dietType: ['mediterranean', 'heart-healthy', 'balanced'],
    exerciseRequirement: 'medium',
    timeCommitment: 'moderate',
    bestFor: ['heart-health', 'sustainable', 'cooking-enthusiasts'],
    notSuitableFor: ['quick-results', 'structured-guidance'],
  },
  {
    id: 'whole30',
    name: 'Whole30',
    description: '30-day elimination diet removing sugar, grains, dairy, and legumes to reset eating habits.',
    monthlyPrice: 0,
    website: 'https://whole30.com',
    features: ['30-day program', 'Detailed food lists', 'Recipe ideas', 'Reintroduction protocol'],
    pros: [
      'Short-term commitment',
      'May identify food sensitivities',
      'Focus on whole foods',
      'Strong community support',
      'Clear guidelines'
    ],
    cons: [
      'Very restrictive',
      'Difficult to maintain long-term',
      'Social challenges',
      'May create unhealthy relationship with food',
      'No scientific backing for claims'
    ],
    supportType: ['independent', 'online-community'],
    dietType: ['elimination', 'whole-foods', 'short-term'],
    exerciseRequirement: 'low',
    timeCommitment: 'significant',
    bestFor: ['short-term-commitment', 'food-sensitivity', 'reset'],
    notSuitableFor: ['long-term-solution', 'flexible-eaters'],
  },

  // Intermittent Fasting Programs
  {
    id: 'intermittent-fasting',
    name: 'Intermittent Fasting (16:8)',
    description: 'Time-restricted eating with 16-hour fasting and 8-hour eating windows.',
    monthlyPrice: 0,
    website: 'https://www.healthline.com/nutrition/intermittent-fasting-guide',
    features: ['Various fasting protocols', 'Flexible food choices', 'Timing-focused approach', 'Apps for tracking'],
    pros: [
      'No cost to implement',
      'Flexible food choices',
      'May improve metabolic health',
      'Simple to understand',
      'Can enhance autophagy'
    ],
    cons: [
      'Hunger during fasting',
      'Social eating challenges',
      'May affect energy levels',
      'Not suitable for everyone',
      'Requires discipline'
    ],
    supportType: ['independent', 'app-based'],
    dietType: ['flexible', 'timing-focused', 'fasting'],
    exerciseRequirement: 'low',
    timeCommitment: 'minimal',
    bestFor: ['schedule-flexibility', 'minimal-rules', 'metabolic-health'],
    notSuitableFor: ['eating-disorders', 'medical-conditions'],
  },

  // Fitness-Focused Programs
  {
    id: 'personal-trainer',
    name: 'Personal Training Program',
    description: 'One-on-one fitness coaching with customized workout and nutrition plans.',
    monthlyPrice: 250,
    website: 'https://www.acefitness.org/resources/everyone/find-an-ace-pro/',
    features: ['Personalized workouts', 'Nutrition guidance', 'Form correction', 'Accountability', 'Progress tracking'],
    pros: [
      'Highly personalized',
      'Direct accountability',
      'Expert guidance',
      'Form and technique correction',
      'Motivation and support'
    ],
    cons: [
      'Expensive',
      'Requires scheduled appointments',
      'Quality varies by trainer',
      'May focus more on fitness',
      'Location dependent'
    ],
    supportType: ['one-on-one', 'in-person'],
    dietType: ['personalized', 'fitness-focused'],
    exerciseRequirement: 'high',
    timeCommitment: 'significant',
    bestFor: ['muscle-building', 'fitness-focus', 'high-accountability'],
    notSuitableFor: ['budget-conscious', 'minimal-time'],
  },
  {
    id: 'beachbody',
    name: 'Beachbody On Demand',
    description: 'Home workout programs with nutrition plans including P90X, Insanity, and 21 Day Fix.',
    monthlyPrice: 15,
    website: 'https://www.beachbodyondemand.com',
    features: ['Home workout videos', 'Nutrition plans', 'Portion control containers', 'Supplement options'],
    pros: [
      'Home convenience',
      'Variety of programs',
      'No gym membership needed',
      'Structured workout plans',
      'Nutritional guidance included'
    ],
    cons: [
      'Requires self-motivation',
      'Limited equipment options',
      'Can be repetitive',
      'Promotes supplements heavily',
      'One-size-fits-all approach'
    ],
    supportType: ['independent', 'online-community'],
    dietType: ['portion-control', 'structured'],
    exerciseRequirement: 'high',
    timeCommitment: 'significant',
    bestFor: ['home-workouts', 'structured-programs', 'fitness-variety'],
    notSuitableFor: ['gym-preference', 'custom-routines'],
  },
  {
    id: 'orangetheory',
    name: 'OrangeTheory Fitness',
    description: 'Heart rate-based interval training classes with calorie burn tracking.',
    monthlyPrice: 160,
    website: 'https://www.orangetheory.com',
    features: ['Heart rate monitoring', 'Group classes', 'HIIT workouts', 'Calorie burn tracking', 'Professional coaching'],
    pros: [
      'High calorie burn',
      'Motivating group environment',
      'Science-based approach',
      'Professional instruction',
      'Variety in workouts'
    ],
    cons: [
      'Expensive membership',
      'High intensity may not suit everyone',
      'Class scheduling required',
      'Limited nutrition guidance',
      'Can be intimidating'
    ],
    supportType: ['group', 'in-person'],
    dietType: ['independent', 'exercise-focused'],
    exerciseRequirement: 'high',
    timeCommitment: 'moderate',
    bestFor: ['group-motivation', 'high-intensity', 'structured-exercise'],
    notSuitableFor: ['low-fitness-level', 'budget-conscious'],
  },

  // Technology-Based Programs
  {
    id: 'myfitnesspal',
    name: 'MyFitnessPal Premium',
    description: 'Comprehensive calorie and macro tracking app with extensive food database.',
    monthlyPrice: 10,
    website: 'https://www.myfitnesspal.com',
    features: ['Food tracking', 'Exercise logging', 'Macro tracking', 'Barcode scanning', 'Recipe importer'],
    pros: [
      'Comprehensive food database',
      'Detailed macro tracking',
      'Affordable price',
      'Integrates with fitness devices',
      'Custom goal setting'
    ],
    cons: [
      'Requires consistent logging',
      'Can promote obsessive tracking',
      'Limited personalized guidance',
      'Free version has ads',
      'Learning curve for beginners'
    ],
    supportType: ['independent', 'app-based'],
    dietType: ['flexible', 'tracking-focused', 'macro-based'],
    exerciseRequirement: 'medium',
    timeCommitment: 'moderate',
    bestFor: ['data-driven', 'flexible-approach', 'macro-tracking'],
    notSuitableFor: ['tracking-averse', 'simple-approach'],
  },
  {
    id: 'calibrate',
    name: 'Calibrate',
    description: 'Medical weight loss program combining FDA-approved medications with lifestyle coaching.',
    monthlyPrice: 375,
    website: 'https://www.joincalibrate.com',
    features: ['Medical supervision', 'FDA-approved medications', 'Lifestyle coaching', 'Lab testing', 'Telehealth appointments'],
    pros: [
      'Medical supervision',
      'Clinically proven medications',
      'Comprehensive approach',
      'Regular monitoring',
      'Evidence-based methods'
    ],
    cons: [
      'Very expensive',
      'Requires medical eligibility',
      'Potential medication side effects',
      'Insurance may not cover',
      'Long-term commitment needed'
    ],
    supportType: ['medical', 'one-on-one'],
    dietType: ['medical', 'supervised', 'medication-assisted'],
    exerciseRequirement: 'medium',
    timeCommitment: 'moderate',
    bestFor: ['medical-supervision', 'significant-weight-loss', 'medication-appropriate'],
    notSuitableFor: ['medication-averse', 'budget-conscious'],
  },
  {
    id: 'found',
    name: 'Found',
    description: 'Prescription weight loss program with coaching, community support, and medication options.',
    monthlyPrice: 99,
    website: 'https://found.com',
    features: ['Medical consultation', 'Prescription medications', 'Coaching support', 'Community features', 'Progress tracking'],
    pros: [
      'Medical approach',
      'Coaching included',
      'Community support',
      'Convenient telehealth',
      'Personalized treatment'
    ],
    cons: [
      'Requires prescription eligibility',
      'Monthly subscription cost',
      'Potential side effects',
      'Limited to certain states',
      'Insurance coverage varies'
    ],
    supportType: ['medical', 'one-on-one', 'community'],
    dietType: ['medical', 'coached', 'medication-assisted'],
    exerciseRequirement: 'medium',
    timeCommitment: 'moderate',
    bestFor: ['medical-approach', 'coaching-support', 'medication-appropriate'],
    notSuitableFor: ['natural-approach-only', 'self-guided-preference'],
  },

  // Budget-Friendly Options
  {
    id: 'lose-it',
    name: 'Lose It!',
    description: 'Simple calorie tracking app with social features and challenges.',
    monthlyPrice: 4,
    website: 'https://www.loseit.com',
    features: ['Calorie tracking', 'Social challenges', 'Barcode scanning', 'Exercise integration', 'Goal setting'],
    pros: [
      'Very affordable',
      'User-friendly interface',
      'Social motivation features',
      'Good food database',
      'Simple approach'
    ],
    cons: [
      'Basic features only',
      'Limited advanced tracking',
      'Less comprehensive than competitors',
      'Fewer premium features',
      'Simple may be too basic'
    ],
    supportType: ['independent', 'community'],
    dietType: ['calorie-focused', 'flexible'],
    exerciseRequirement: 'low',
    timeCommitment: 'minimal',
    bestFor: ['budget-conscious', 'simple-tracking', 'social-motivation'],
    notSuitableFor: ['advanced-features', 'detailed-analysis'],
  },
  {
    id: 'sparkpeople',
    name: 'SparkPeople',
    description: 'Free comprehensive platform with meal plans, workouts, and community support.',
    monthlyPrice: 0,
    website: 'https://www.sparkpeople.com',
    features: ['Free meal plans', 'Workout videos', 'Community forums', 'Progress tracking', 'Educational articles'],
    pros: [
      'Completely free',
      'Comprehensive resources',
      'Strong community',
      'Educational content',
      'No premium pressure'
    ],
    cons: [
      'Outdated interface',
      'Less modern features',
      'Limited mobile optimization',
      'Ad-supported',
      'Less personalized'
    ],
    supportType: ['community', 'independent'],
    dietType: ['balanced', 'educational'],
    exerciseRequirement: 'medium',
    timeCommitment: 'moderate',
    bestFor: ['budget-conscious', 'community-support', 'comprehensive-free'],
    notSuitableFor: ['modern-interface', 'premium-features'],
  },

  // Meal Delivery Services
  {
    id: 'factor75',
    name: 'Factor',
    description: 'Fresh, chef-prepared meals delivered weekly with various dietary options.',
    monthlyPrice: 200,
    website: 'https://www.factor75.com',
    features: ['Chef-prepared meals', 'Various diet options', 'No preparation needed', 'Fresh ingredients', 'Portion controlled'],
    pros: [
      'High-quality ingredients',
      'No cooking required',
      'Portion controlled',
      'Dietary variety',
      'Convenient delivery'
    ],
    cons: [
      'Expensive per meal',
      'Limited customization',
      'Packaging waste',
      'Delivery scheduling',
      'May not satisfy hunger'
    ],
    supportType: ['independent'],
    dietType: ['convenient', 'portion-control', 'various-options'],
    exerciseRequirement: 'low',
    timeCommitment: 'minimal',
    bestFor: ['convenience', 'busy-lifestyle', 'quality-ingredients'],
    notSuitableFor: ['cooking-enthusiasts', 'budget-conscious'],
  },
  {
    id: 'hello-fresh-fit',
    name: 'HelloFresh Fit & Wholesome',
    description: 'Meal kit delivery with calorie-conscious recipes and fresh ingredients.',
    monthlyPrice: 120,
    website: 'https://www.hellofresh.com',
    features: ['Meal kits', 'Calorie-conscious recipes', 'Pre-portioned ingredients', 'Cooking instructions', 'Variety of options'],
    pros: [
      'Learn cooking skills',
      'Fresh ingredients',
      'Portion controlled',
      'Recipe variety',
      'Reduces food waste'
    ],
    cons: [
      'Still requires cooking',
      'Higher cost than grocery shopping',
      'Packaging waste',
      'Limited to available recipes',
      'Time investment for cooking'
    ],
    supportType: ['independent'],
    dietType: ['balanced', 'cooking-focused'],
    exerciseRequirement: 'low',
    timeCommitment: 'moderate',
    bestFor: ['cooking-learners', 'variety-seekers', 'portion-control'],
    notSuitableFor: ['cooking-averse', 'budget-conscious'],
  }
];
