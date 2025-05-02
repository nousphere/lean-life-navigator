
import { programs, Program } from "../data/programs";

export type UserAnswers = {
  [questionId: string]: any;
};

// Function to calculate compatibility score between user answers and a program
export function calculateCompatibilityScore(answers: UserAnswers, program: Program): number {
  let score = 0;
  let possiblePoints = 0;

  // Primary goal alignment (weighted heavily)
  if (answers.goal) {
    possiblePoints += 30;
    if (program.bestFor.includes(answers.goal)) {
      score += 30; // High points for matching primary goal
    } else if (program.notSuitableFor.includes(answers.goal)) {
      score -= 15; // Penalty for being explicitly not suitable
    }
  }

  // Support preference alignment
  if (answers["support-preference"]) {
    possiblePoints += 20;
    if (program.supportType.includes(answers["support-preference"])) {
      score += 20;
    } else if (
      (answers["support-preference"] === "group" || 
       answers["support-preference"] === "one-on-one") && 
      program.supportType.includes("independent")
    ) {
      score -= 10; // Penalty for mismatched support type
    }
  }

  // Budget alignment
  if (answers.budget !== undefined) {
    possiblePoints += 25;
    const budget = Number(answers.budget);
    
    if (program.monthlyPrice <= budget) {
      // The closer the program price is to their max budget (without exceeding), 
      // the better the match
      const budgetUtilization = program.monthlyPrice / Math.max(budget, 1);
      score += 25 * budgetUtilization; // Max points for using most of the budget efficiently
    } else {
      // Program exceeds budget
      const overBudgetPercent = (program.monthlyPrice - budget) / Math.max(budget, 1);
      score -= Math.min(15, 15 * overBudgetPercent); // Penalty for exceeding budget
    }
  }

  // Time commitment alignment
  if (answers["time-commitment"]) {
    possiblePoints += 15;
    if (program.timeCommitment === answers["time-commitment"]) {
      score += 15;
    } else if (
      (program.timeCommitment === "significant" && answers["time-commitment"] === "minimal") ||
      (program.timeCommitment === "moderate" && answers["time-commitment"] === "minimal")
    ) {
      score -= 10; // Penalty for requiring more time than user has
    }
  }

  // Dietary preferences
  if (answers["diet-preference"] && Array.isArray(answers["diet-preference"])) {
    possiblePoints += 15;
    
    // Check if any of the user's dietary preferences match the program's diet type
    const hasMatchingDiet = answers["diet-preference"].some((preference: string) => 
      program.dietType.includes(preference) || program.dietType.includes("flexible")
    );
    
    if (hasMatchingDiet) {
      score += 15;
    } else if (answers["diet-preference"].includes("no-preference")) {
      score += 10; // Still good if user has no strong preferences
    }
  }

  // Past experience insights
  if (answers["past-experience"] && answers["previous-programs"]) {
    possiblePoints += 15;
    
    // If they've had success with similar programs before
    if (answers["past-experience"] === "success" && 
        Array.isArray(answers["previous-programs"]) && 
        answers["previous-programs"].includes(program.id)) {
      score += 15; // They liked this specific program
    }
    
    // If they've had failure with this specific program before
    if (answers["past-experience"] === "failure" && 
        Array.isArray(answers["previous-programs"]) && 
        answers["previous-programs"].includes(program.id)) {
      score -= 25; // Strong penalty for programs they've already tried and failed with
    }
  }

  // Exercise preferences
  if (answers["exercise-preference"] && Array.isArray(answers["exercise-preference"])) {
    possiblePoints += 10;
    
    if (answers["exercise-preference"].includes("none") && program.exerciseRequirement === "high") {
      score -= 10; // Penalty for high exercise programs when user doesn't like exercise
    } else if (answers["exercise-preference"].length > 0 && answers["exercise-preference"][0] !== "none") {
      if (program.exerciseRequirement === "low" && answers["exercise-preference"].includes("strength")) {
        score -= 5; // Slight penalty if they want strength training but program doesn't focus on exercise
      }
      if (program.exerciseRequirement === "high" && 
         (answers["exercise-preference"].includes("strength") || 
          answers["exercise-preference"].includes("cardio"))) {
        score += 10; // Bonus for matching high exercise programs with people who enjoy exercise
      }
    }
  }

  // Normalize score to a percentage
  const normalizedScore = possiblePoints > 0 ? (score / possiblePoints) * 100 : 50;
  
  // Ensure the score is between 0 and 100
  return Math.max(0, Math.min(100, normalizedScore));
}

// Function to get program recommendations based on user answers
export function getRecommendations(answers: UserAnswers): {
  recommended: Array<Program & { score: number; reasons: string[] }>;
  notRecommended: Array<Program & { score: number; reasons: string[] }>;
} {
  const results = programs.map(program => {
    const score = calculateCompatibilityScore(answers, program);
    const reasons: string[] = [];

    // Generate explanation reasons
    if (answers.goal && program.bestFor.includes(answers.goal)) {
      reasons.push(`Aligns with your goal of ${getGoalText(answers.goal)}`);
    }

    if (answers["support-preference"] && program.supportType.includes(answers["support-preference"])) {
      reasons.push(`Offers the ${getSupportTypeText(answers["support-preference"])} that you prefer`);
    }

    if (answers.budget !== undefined && program.monthlyPrice <= answers.budget) {
      reasons.push(`Fits within your budget of $${answers.budget} per month`);
    } else if (answers.budget !== undefined && program.monthlyPrice > answers.budget) {
      reasons.push(`Exceeds your budget of $${answers.budget} per month`);
    }

    if (answers["time-commitment"] && program.timeCommitment === answers["time-commitment"]) {
      reasons.push(`Matches your available time commitment`);
    } else if (
      answers["time-commitment"] === "minimal" && 
      (program.timeCommitment === "moderate" || program.timeCommitment === "significant")
    ) {
      reasons.push(`May require more time than you currently have available`);
    }

    if (
      answers["past-experience"] === "failure" && 
      Array.isArray(answers["previous-programs"]) && 
      answers["previous-programs"].includes(program.id)
    ) {
      reasons.push(`You've tried this program before without success`);
    }

    if (
      answers["diet-preference"] && 
      Array.isArray(answers["diet-preference"]) &&
      !answers["diet-preference"].includes("no-preference")
    ) {
      const matchesDiet = answers["diet-preference"].some(
        (pref: string) => program.dietType.includes(pref) || program.dietType.includes("flexible")
      );
      if (matchesDiet) {
        reasons.push(`Compatible with your dietary preferences`);
      } else {
        reasons.push(`May not fully accommodate your dietary preferences`);
      }
    }

    return {
      ...program,
      score,
      reasons
    };
  });

  // Sort programs by score
  const sortedResults = [...results].sort((a, b) => b.score - a.score);
  
  // Separate into recommended and not recommended
  const threshold = 60; // Score threshold for recommendation
  const recommended = sortedResults.filter(program => program.score >= threshold);
  const notRecommended = sortedResults.filter(program => program.score < threshold);

  return {
    recommended,
    notRecommended
  };
}

// Helper functions to convert values to readable text
function getGoalText(goal: string): string {
  switch (goal) {
    case 'quick': return 'losing weight quickly';
    case 'gradual': return 'losing weight gradually';
    case 'sustainable': return 'developing sustainable habits';
    case 'muscle': return 'building muscle while losing fat';
    default: return goal;
  }
}

function getSupportTypeText(supportType: string): string {
  switch (supportType) {
    case 'group': return 'group support';
    case 'one-on-one': return 'one-on-one coaching';
    case 'independent': return 'independent approach';
    case 'mix': return 'mix of support and independence';
    default: return supportType;
  }
}
