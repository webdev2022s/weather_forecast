export default function DateFormat(dates) {
  return new Intl.DateTimeFormat("en", { weekday: "long" }).format(
    new Date(dates)
  );
}
