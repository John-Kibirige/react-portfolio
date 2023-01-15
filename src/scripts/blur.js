import projects from '../data/data';

const blurSequence = (start) => {
  const n = projects.length;
  const range = [start];
  let last = range[range.length - 1];
  while (last <= n) {
    range.push(last + 4);
    last = range[range.length - 1];
  }
  return range;
};

export default blurSequence;
