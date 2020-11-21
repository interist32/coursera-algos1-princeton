import {Permutation} from './permutation';


const inputs = [
  'A B C D E F G H I',
  'AA BB BB BB BB BB CC CC',
] as const ;

for (const input of inputs) {
  const chars = input.split(' ');
  const numberOfChars = chars.length;
  new Permutation<string>(Math.trunc(numberOfChars / 4), chars);
  new Permutation<string>(Math.trunc(numberOfChars / 2), chars);
  new Permutation<string>(numberOfChars, chars);
}