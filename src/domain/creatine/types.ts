export type CreatinePhase = 'loading' | 'maintaining';

export interface PhaseConfig {
  dailyTargetDose: number;  // in grams
  recommendedServings: number;
  durationInDays?: number;  // optional for maintaining phase
  servingSize: number;      // in grams
}

export interface DoseRecord {
  id: string;
  timestamp: Date;
  amount: number;           // in grams
  phase: CreatinePhase;
}

export interface DailyProgress {
  date: Date;
  totalDose: number;
  targetDose: number;
  records: DoseRecord[];
} 