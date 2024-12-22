import { DoseRecord, DailyProgress, CreatinePhase } from './types';
import { PHASE_CONFIGS } from './phase-config';

export class TrackingService {
  private static instance: TrackingService;
  private currentPhase: CreatinePhase = 'maintaining';

  private constructor() {}

  static getInstance(): TrackingService {
    if (!TrackingService.instance) {
      TrackingService.instance = new TrackingService();
    }
    return TrackingService.instance;
  }

  setPhase(phase: CreatinePhase) {
    this.currentPhase = phase;
  }

  getCurrentPhase(): CreatinePhase {
    return this.currentPhase;
  }

  getPhaseConfig() {
    return PHASE_CONFIGS[this.currentPhase];
  }

  addDose(amount: number): DoseRecord {
    const record: DoseRecord = {
      id: Date.now().toString(), // Simple ID generation
      timestamp: new Date(),
      amount,
      phase: this.currentPhase,
    };

    // TODO: Implement persistence
    return record;
  }

  getDailyProgress(date: Date): DailyProgress {
    // TODO: Implement actual data fetching
    return {
      date,
      totalDose: 0,
      targetDose: this.getPhaseConfig().dailyTargetDose,
      records: [],
    };
  }

  getWeeklyProgress(startDate: Date): DailyProgress[] {
    // TODO: Implement actual data fetching
    const progress: DailyProgress[] = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(startDate);
      date.setDate(date.getDate() + i);
      progress.push(this.getDailyProgress(date));
    }
    return progress;
  }
} 