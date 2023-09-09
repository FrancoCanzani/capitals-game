export default function generateRandomNumber(range: number) {
  let randomNumber = Math.floor(Math.random() * (range - 1));
  return randomNumber;
}
