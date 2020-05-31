import Daemon from '../daemon';
import Magician from '../magician';

test('character distance 2', () => {
  const char = new Daemon();
  char.distance = 2;
  expect(char.attack).toBe(90);
});

test('character distance 4', () => {
  const char = new Magician();
  char.distance = 4;
  expect(char.attack).toBe(70);
});

test('character stoned distance 2', () => {
  const char = new Magician();
  char.attack = 100;
  char.distance = 2;
  char.stoned = true;
  expect(char.attack).toBe(85);
});