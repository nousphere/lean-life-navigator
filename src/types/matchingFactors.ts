export type MatchingFactors = {
  // Core matching criteria
  primaryGoals: string[]; // ['weight-loss', 'muscle-gain', 'maintenance', 'general-health']
  secondaryGoals: string[]; // ['energy-boost', 'better-sleep', 'confidence', 'habit-formation']
  
  // User characteristics
  experienceLevel: string[]; // ['beginner', 'intermediate', 'advanced', 'returning']
  ageGroups: string[]; // ['18-25', '26-35', '36-45', '46-55', '55+']
  lifestyles: string[]; // ['busy-professional', 'stay-at-home-parent', 'student', 'retiree', 'shift-worker']
  
  // Program characteristics  
  supportTypes: string[]; // ['group', 'one-on-one', 'self-guided', 'peer-support', 'professional-coach']
  deliveryMethods: string[]; // ['app-based', 'in-person', 'online-sessions', 'self-study', 'hybrid']
  timeCommitments: string[]; // ['minimal', 'moderate', 'intensive', 'flexible']
  
  // Diet and nutrition
  dietTypes: string[]; // ['balanced', 'low-carb', 'keto', 'intermittent-fasting', 'plant-based', 'mediterranean', 'flexible']
  mealPrep: string[]; // ['meal-delivery', 'batch-cooking', 'quick-meals', 'eating-out-friendly', 'family-friendly']
  dietRestrictions: string[]; // ['gluten-free', 'dairy-free', 'nut-free', 'vegetarian', 'vegan', 'kosher', 'halal']
  
  // Exercise and activity
  exerciseTypes: string[]; // ['cardio', 'strength-training', 'yoga', 'pilates', 'walking', 'swimming', 'cycling', 'home-workouts', 'gym-based']
  exerciseIntensity: string[]; // ['low-impact', 'moderate', 'high-intensity', 'variable']
  fitnessLevel: string[]; // ['sedentary', 'lightly-active', 'moderately-active', 'very-active']
  
  // Budget and accessibility
  budgetRanges: string[]; // ['free', 'under-25', '25-50', '50-100', '100-200', '200+']
  accessibility: string[]; // ['wheelchair-accessible', 'mobility-friendly', 'vision-impaired-friendly', 'hearing-impaired-friendly']
  
  // Technology and tools
  technologyRequirements: string[]; // ['smartphone-app', 'computer-access', 'wearable-device', 'basic-tech', 'no-tech-needed']
  trackingMethods: string[]; // ['calorie-counting', 'macro-tracking', 'portion-control', 'mindful-eating', 'no-tracking']
  
  // Motivation and psychology
  motivationStyles: string[]; // ['social-accountability', 'self-motivated', 'gamification', 'rewards-based', 'education-focused']
  personalityTypes: string[]; // ['detail-oriented', 'big-picture', 'routine-lover', 'variety-seeker', 'goal-driven', 'process-focused']
  
  // Timeline and urgency
  timeframes: string[]; // ['1-3-months', '3-6-months', '6-12-months', '12+-months', 'ongoing-lifestyle']
  urgency: string[]; // ['immediate-results', 'gradual-progress', 'long-term-health', 'special-event']
  
  // Special considerations
  medicalConsiderations: string[]; // ['diabetes-friendly', 'heart-healthy', 'pregnancy-safe', 'senior-friendly', 'injury-recovery']
  socialFactors: string[]; // ['family-involvement', 'workplace-support', 'community-based', 'solo-journey']
};

// Weight values for scoring (out of 100 total points)
export const MATCHING_WEIGHTS = {
  primaryGoals: 25,
  supportTypes: 15,
  budgetRanges: 15,
  timeCommitments: 10,
  dietTypes: 10,
  exerciseTypes: 8,
  experienceLevel: 5,
  deliveryMethods: 5,
  motivationStyles: 4,
  timeframes: 3
};

// Scoring thresholds
export const SCORE_THRESHOLDS = {
  topMatch: 75,        // Top 3 recommendations
  recommended: 60,     // "You may also be interested in"
  notRecommended: 40   // Below this is not shown
};

export type ProgramWithMatchingFactors = {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  website: string;
  features: string[];
  pros: string[];
  cons: string[];
  matchingFactors: MatchingFactors;
  adminNotes?: string; // Internal notes for admin
};