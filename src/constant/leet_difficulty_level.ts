export type LeetDifficultyLevel = {
  difficulty: string;
  color: string;
  bgColor: string;
};

export const levelColors: LeetDifficultyLevel[] = [
  {
    difficulty: "Easy",
    color: "text-emerald-600",
    bgColor: "bg-emerald-600/25",
  },
  {
    difficulty: "Medium",
    color: "text-yellow-600",
    bgColor: "bg-yellow-600/25",
  },
  { difficulty: "Hard", color: "text-red-600", bgColor: "bg-red-600/15" },
];
