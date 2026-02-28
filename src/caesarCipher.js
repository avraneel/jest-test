export function caesarCipher(input, shift) {
  let output = "";
  for (let i = 0; i < input.length; i++) {
    const ascii = input.charCodeAt(i);
    if (ascii >= 65 && ascii <= 90) {
      if (ascii + shift > 90) {
        output += String.fromCharCode(((ascii + shift) % 90) + 64);
      } else {
        output += String.fromCharCode(ascii + shift);
      }
    } else if (ascii >= 97 && ascii <= 122) {
      if (ascii + shift > 122) {
        output += String.fromCharCode(((ascii + shift) % 122) + 96);
      } else {
        output += String.fromCharCode(ascii + shift);
      }
    } else {
      output += input[i];
    }
  }

  return output;
}
