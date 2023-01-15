import projects from '../data/data';

const blurSequence = (start) => {
  const n = projects.length;
  const range = [start];
  let count = 0;
  let last = range[range.length - 1];
  while (last <= n) {
    range.push(last + 4);
    last = range[range.length - 1];
    count++;
  }
  return range;
};

export { blurSequence };
