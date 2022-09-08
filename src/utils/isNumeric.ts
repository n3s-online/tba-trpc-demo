export default function isNumeric(n: string) {
  return !isNaN(parseFloat(n)) && isFinite(parseFloat(n));
}
