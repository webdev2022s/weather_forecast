import { useEffect, useState } from "react";

const initialStorage = () => {
  const data = JSON.parse(localStorage.getItem("LOCATION")) || "";
  if (!data) return [];
  return data;
};

export default function useLocalStorage() {
  const [value, setValue] = useState(initialStorage);

  useEffect(() => {
    localStorage.setItem("LOCATION", JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}
