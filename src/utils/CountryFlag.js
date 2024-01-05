export default function CountryFlag(countryCode) {
  const code = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...code);
}
