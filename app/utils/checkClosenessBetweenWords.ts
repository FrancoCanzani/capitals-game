export default function checkClosenessBetweenWords(
  capital: string,
  input: string
): number {
  const unpackedCapital = capital.toLowerCase().split('');
  const unpackedAnswer = input.toLowerCase().split('');
  let closeWords = 0;
  for (let letter of unpackedAnswer) {
    if (unpackedCapital.includes(letter)) {
      closeWords++;
    }
  }
  return (closeWords / unpackedCapital.length) * 100;
}
