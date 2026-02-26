export function reverser(input) {
  let rev = "";
  for (let ch of input) {
    rev = ch + rev;
  }
  return rev;
}
