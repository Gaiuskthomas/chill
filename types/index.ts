export interface MovieRecommendation {
  title: string;
  malayalamTitle: string;
  year: number;
  type: 'movie' | 'scene';
  description: string;
  mood: string;
  reason: string;
  sceneDescription?: string;
  director?: string;
  cast?: string[];
}
