export default function checkClosenessBetweenWords(
  capital: string,
  input: string
): number {
  // Convert both words to lowercase
  const lowercaseCapital = capital.toLowerCase();
  const lowercaseInput = input.toLowerCase();

  const maxLength = Math.max(lowercaseCapital.length, lowercaseInput.length);

  // Calculate closeness based on common letters and their positions
  let closeness = 0;

  for (let i = 0; i < maxLength; i++) {
    if (lowercaseCapital[i] === lowercaseInput[i]) {
      closeness++;
    }
  }

  // Calculate closeness as a percentage of the longer word's length
  return (closeness / maxLength) * 100;
}
