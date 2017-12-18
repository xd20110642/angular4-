import { MessPipe } from './mess.pipe';

describe('MessPipe', () => {
  it('create an instance', () => {
    const pipe = new MessPipe();
    expect(pipe).toBeTruthy();
  });
});
