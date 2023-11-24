export const Categories = {
  1: "AIGeneratedFalsePositive",
  2: "AIGeneratedTruePositive",
  3: "UnclearAIWarnings",
  4: "AIDetectionMalfunction",
  5: "MissingAIDetection",
  6: "UnidentifiedAIPatterns",
  7: "AIDetectionFeedback",
  8: "PrivacyIssues",
  9: "AIGeneratedSpam",
  10: "AIDetectionBias",
  11: "GeneralAIDetectionIssues",
};
export type CategoryMap = {
  [value in (typeof Categories)[keyof typeof Categories]]: boolean;
};
