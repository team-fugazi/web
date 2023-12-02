// TypeScript declarations for Podium feature
export type Member = {
  name: string;
  score: number;
  avatarColor: string;
};

// Component Props for podium pillar
export interface PillarProps {
  player: Member;
  index: number;
  height: string;
}
