import { Dispositivo } from './dispositivo';

describe('Dispositivo', () => {
  it('should create an instance', () => {
    expect(new Dispositivo(1, "Apple", "iPhone 14 Pro Max", 256, "Nero", "smartphone", "disponibile")).toBeTruthy();
  });
});
