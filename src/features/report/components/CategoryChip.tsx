// Path: src/features/report/components/CategoryFilter.tsx

// Interfaces
import { Category } from "../interfaces/Category";

const AIGeneratedFalsePositive = ({ category }: { category: Category }) => (
  <span className="whitespace-nowrap rounded-full bg-red-100 px-2.5 py-0.5 text-sm text-red-700">
    🔴 {category.name}
  </span>
);

const AIGeneratedTruePositive = ({ category }: { category: Category }) => (
  <span className="whitespace-nowrap rounded-full bg-green-100 px-2.5 py-0.5 text-sm text-green-700">
    🟢 {category.name}
  </span>
);

const UnclearAIWarnings = ({ category }: { category: Category }) => (
  <span className="whitespace-nowrap rounded-full bg-yellow-100 px-2.5 py-0.5 text-sm text-yellow-700">
    🟡 {category.name}
  </span>
);

const AIDetectionMalfunction = ({ category }: { category: Category }) => (
  <span className="whitespace-nowrap rounded-full bg-gray-100 px-2.5 py-0.5 text-sm text-gray-700">
    🛠️ {category.name}
  </span>
);

const MissingAIDetection = ({ category }: { category: Category }) => (
  <span className="whitespace-nowrap rounded-full bg-pink-100 px-2.5 py-0.5 text-sm text-pink-700">
    🚫 {category.name}
  </span>
);

const UnidentifiedAIPatterns = ({ category }: { category: Category }) => (
  <span className="whitespace-nowrap rounded-full bg-indigo-100 px-2.5 py-0.5 text-sm text-indigo-700">
    ❓ {category.name}
  </span>
);

const AIDetectionFeedback = ({ category }: { category: Category }) => (
  <span className="whitespace-nowrap rounded-full bg-blue-100 px-2.5 py-0.5 text-sm text-blue-700">
    📢 {category.name}
  </span>
);

const PrivacyIssues = ({ category }: { category: Category }) => (
  <span className="whitespace-nowrap rounded-full bg-teal-100 px-2.5 py-0.5 text-sm text-teal-700">
    🔒 {category.name}
  </span>
);

const AIGeneratedSpam = ({ category }: { category: Category }) => (
  <span className="whitespace-nowrap rounded-full bg-pink-100 px-2.5 py-0.5 text-sm text-pink-700">
    🚫 {category.name}
  </span>
);

const AIDetectionBias = ({ category }: { category: Category }) => (
  <span className="whitespace-nowrap rounded-full bg-pink-100 px-2.5 py-0.5 text-sm text-pink-700">
    🚫 {category.name}
  </span>
);

const GeneralAIDetectionIssues = ({ category }: { category: Category }) => (
  <span className="whitespace-nowrap rounded-full bg-pink-100 px-2.5 py-0.5 text-sm text-pink-700">
    🚫 {category.name}
  </span>
);

interface ComponentMap {
  [key: number]: React.FC<{ category: Category }>;
}

const componentMap: ComponentMap = {
  1: AIGeneratedFalsePositive,
  2: AIGeneratedTruePositive,
  3: UnclearAIWarnings,
  4: AIDetectionMalfunction,
  5: MissingAIDetection,
  6: UnidentifiedAIPatterns,
  7: AIDetectionFeedback,
  8: PrivacyIssues,
  9: AIGeneratedSpam,
  10: AIDetectionBias,
  11: GeneralAIDetectionIssues,
};

export const CategoryChip = ({ category }: { category: Category }) => {
  const ComponentToRender =
    componentMap[category.category_id] || GeneralAIDetectionIssues;
  return <ComponentToRender category={category} />;
};

export default CategoryChip;
