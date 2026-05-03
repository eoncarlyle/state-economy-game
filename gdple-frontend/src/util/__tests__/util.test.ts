import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { getCurrentStreak, getMaxStreak, getPuzzleHistory } from '../util.ts';

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    }
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});

// Mock getReferenceDate so tests run consistently regardless of real-world date
vi.mock('../util.ts', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual as any,
    getReferenceDate: vi.fn(),
  };
});

describe('Streak Calculations (DST and Timezone safety)', () => {
  beforeEach(() => {
    localStorage.clear();
    // Reset process.env.TZ before each test
    process.env.TZ = 'UTC';
  });

  const setupHistory = (dates: string[]) => {
    const history: Record<string, any> = {};
    dates.forEach(date => {
      history[date] = {
        id: `mock-${date}`,
        guesses: [{ stateRecord: { name: 'Texas' }, isWin: true }], // Just needs length > 0
        isWin: true
      };
    });
    localStorage.setItem('gameHistory', JSON.stringify(history));
  };

  describe('getMaxStreak', () => {
    it('calculates max streak across a Spring Forward boundary (missing hour)', () => {
      // In Chicago, Mar 12 2023 jumps from 2am to 3am.
      process.env.TZ = 'America/Chicago';
      
      const dates = [
        '2023-03-09',
        '2023-03-10',
        '2023-03-11', // Day before spring forward
        '2023-03-12', // Spring forward day
        '2023-03-13',
      ];
      
      setupHistory(dates);
      expect(getMaxStreak()).toBe(5);
    });

    it('calculates max streak across a Fall Back boundary (extra hour)', () => {
      // In Chicago, Nov 5 2023 repeats 1am to 2am.
      process.env.TZ = 'America/Chicago';
      
      const dates = [
        '2023-11-03',
        '2023-11-04', // Day before fall back
        '2023-11-05', // Fall back day
        '2023-11-06',
        '2023-11-07',
      ];
      
      setupHistory(dates);
      expect(getMaxStreak()).toBe(5);
    });

    it('calculates max streak over a very long period spanning multiple DST shifts', () => {
      process.env.TZ = 'America/New_York';
      const dates = [];
      let d = new Date('2023-01-01T00:00:00Z');
      
      // 400 days covers a full year of DST shifts
      for (let i = 0; i < 400; i++) {
        dates.push(d.toISOString().split('T')[0]);
        d.setUTCDate(d.getUTCDate() + 1);
      }
      
      setupHistory(dates);
      expect(getMaxStreak()).toBe(400);
    });

    it('correctly resets streak when a day is missed', () => {
      const dates = [
        '2023-01-01',
        '2023-01-02',
        // '2023-01-03' Missed!
        '2023-01-04',
        '2023-01-05',
        '2023-01-06'
      ];
      setupHistory(dates);
      expect(getMaxStreak()).toBe(3); // The second streak of 3 is the max
    });
  });

  describe('getCurrentStreak', () => {
    it('calculates current streak backwards across a Spring Forward boundary', () => {
      process.env.TZ = 'America/Chicago';
      const dates = [
        '2023-03-09',
        '2023-03-10',
        '2023-03-11',
        '2023-03-12', 
      ];
      setupHistory(dates);
      expect(getCurrentStreak()).toBe(4);
    });

    it('calculates current streak backwards across a Fall Back boundary', () => {
      process.env.TZ = 'America/Chicago';
      const dates = [
        '2023-11-03',
        '2023-11-04', 
        '2023-11-05',
      ];
      setupHistory(dates);
      expect(getCurrentStreak()).toBe(3);
    });
  });
});