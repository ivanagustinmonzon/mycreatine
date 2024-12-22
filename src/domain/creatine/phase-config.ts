import { CreatinePhase, PhaseConfig } from './types';

export const PHASE_CONFIGS: Record<CreatinePhase, PhaseConfig> = {
  loading: {
    dailyTargetDose: 20,
    recommendedServings: 4,
    durationInDays: 7,
    servingSize: 5,
  },
  maintaining: {
    dailyTargetDose: 5,
    recommendedServings: 1,
    servingSize: 5,
  },
}; 